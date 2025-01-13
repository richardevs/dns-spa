<script lang="ts">
	import { goto } from '$app/navigation';
	import Keydown from 'svelte-keydown';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { compress, decompress } from 'compress-json';

	let domain = '';
	let count = 0;
	export const apiMap = new Map();

	function encodeResults(results: object): string {
		const compressed = compress(results);
		// Make base64 URL-safe
		return btoa(JSON.stringify(compressed))
			.replace(/\+/g, '-')
			.replace(/\//g, '_')
			.replace(/=+$/, '');
	}

	function decodeResults(encoded: string): object {
		try {
			// Restore base64 padding and characters
			const base64 = encoded
				.replace(/-/g, '+')
				.replace(/_/g, '/')
				.padEnd(encoded.length + ((4 - (encoded.length % 4)) % 4), '=');
			const compressedStr = atob(base64);
			const compressed = JSON.parse(compressedStr);
			return decompress(compressed);
		} catch (e) {
			console.error('Failed to decode results:', e);
			return {};
		}
	}

	function loadResultsFromURL() {
		if (browser) {
			const getquery = $page.url.searchParams.get('query');
			const results = $page.url.searchParams.get('results');

			if (getquery) {
				domain = getquery;
				if (results) {
					try {
						const parsed = decodeResults(results);
						apiMap.clear();
						for (const [key, value] of Object.entries(parsed)) {
							apiMap.set(key, value);
						}
						count++; // Trigger UI refresh
					} catch (e) {
						console.error('Failed to parse results:', e);
					}
				}
			}
		}
	}
	let updateURL: (results?: object) => Promise<void>;

	// Load initial state from URL
	onMount(() => {
		// Load initial results
		loadResultsFromURL();

		updateURL = async (results?: object) => {
			const url = new URL(window.location);
			url.searchParams.set('query', domain);
			if (results) {
				url.searchParams.set('results', encodeResults(results));
			}
			await goto(url.toString(), { replaceState: false });
		};
	});

	$: {
		// React to URL changes
		if (browser) {
			$page.url.search;
		}
		loadResultsFromURL();
	}

	// let baseurl = "https://cloudflare-dns.com/dns-query?"
	let baseurl = 'https://dns.google/resolve?';

	let dnstype = ['SOA', 'A', 'AAAA', 'TXT', 'MX', 'NS', 'CAA'];
	const emailcheck: { [x: string]: string } = {
		_dmarc: 'TXT',
		_spf: 'TXT',
		'mta-sts': 'A',
		'_mta-sts': 'TXT',
		'_smtp._tls': 'TXT',
		'google._domainkey': 'TXT'
	};

	// https://svelte.dev/repl/cb31be94ea444b41a11d1320d16ba6dc?version=3.32.3
	async function requestDoH() {
		apiMap.clear();
		const results: Record<string, any> = {};

		// dnstype check
		for (const type of dnstype) {
			await fetch(baseurl + 'name=' + domain + '&type=' + type, {
				headers: { accept: 'application/dns-json' }
			})
				.then((response) => response.json())
				.then((data) => {
					if (data.Answer) {
						apiMap.set(type, data.Answer);
						results[type] = data.Answer;
						console.log('setting', type);
					}
				})
				.catch((error) => {
					console.log(error);
					return [];
				});
		}

		// special email records check on subdomains
		for (let key in emailcheck) {
			await fetch(baseurl + 'name=' + key + '.' + domain + '&type=' + emailcheck[key], {
				headers: { accept: 'application/dns-json' }
			})
				.then((response) => response.json())
				.then((data) => {
					if (data.Answer) {
						apiMap.set(key, data.Answer);
						results[key] = data.Answer;
						console.log('setting', key);
					}
				})
				.catch((error) => {
					console.log(error);
					return [];
				});
		}

		count++;
		await updateURL(results);
	}
</script>

<div class="container">
	<!-- <h1>DNS Query Tool</h1> -->
	<div class="card">
		<p>
			This site is built with Svelte as a playground project, which sends request to a DoH server. <a
				href="https://github.com/richardevs/dns-spa"
				target="_blank">Source</a
			>
		</p>
		<p>It queries the common record types for the domain. Format: TTL, value</p>
		<h1>
			<input bind:value={domain} placeholder="enter desired domain" />
			<button id="sum" on:click={requestDoH}>Summarize</button>
		</h1>

		<Keydown
			on:Enter={() => {
				document.getElementById('sum')?.click();
			}}
		/>

		<!-- https://svelte.dev/repl/db8ac032184b455bbeed903ba042937c?version=4.2.17 -->
		{#key count}
			<!-- <li>Debug: {count}</li> -->
			<!-- https://github.com/sveltejs/svelte/issues/5021 -->
			{#each [...apiMap] as [key, value]}
				<!-- <li>{key} => {Object.getOwnPropertyNames(value)}</li> -->
				<h1>{key}</h1>
				{#each value as item}
					<li>{item.TTL}, {item.data}</li>
				{/each}
			{/each}
		{/key}
	</div>
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		width: 100%;
		min-height: 100vh;
		font-family:
			system-ui,
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			Roboto,
			sans-serif;
		background: #f5f5f5;
		color: #333;
		line-height: 1.6;
	}

	.container {
		width: 100%;
		padding: 1rem 2rem; /* 1rem top/bottom, 2rem left/right */
		margin: 0 auto; /* center the container */
		box-sizing: border-box; /* include padding in width calculation */
	}

	.card {
		background: white;
		border-radius: 12px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		padding: 2rem;
		transition: transform 0.2s ease;
		width: 100%;
		box-sizing: border-box;
	}

	h1 {
		font-size: 2.5rem;
		font-weight: 700;
		color: #2d3748;
		text-align: left;
		margin-bottom: 2rem;
	}

	input {
		width: 98%; /* Reduce width to accommodate padding */
		padding: 0.75rem;
		border: 2px solid #e2e8f0;
		border-radius: 8px;
		margin-bottom: 1rem;
		margin-right: 2rem; /* Add right margin */
		font-size: 1rem;
		transition: border-color 0.2s ease;
		box-sizing: border-box; /* Include padding in width calculation */
	}

	input:focus {
		outline: none;
		border-color: #4299e1;
	}

	button {
		background: #4299e1;
		color: white;
		border: none;
		padding: 0.75rem 1.5rem;
		border-radius: 8px;
		font-weight: 600;
		cursor: pointer;
		transition: background-color 0.2s ease;
	}

	button:hover {
		background: #3182ce;
	}

	@media (max-width: 640px) {
		.container {
			margin: 1rem auto;
		}

		h1 {
			font-size: 2rem;
		}

		.card {
			padding: 1.5rem;
		}
	}

	li {
		word-wrap: break-word;
	}
</style>

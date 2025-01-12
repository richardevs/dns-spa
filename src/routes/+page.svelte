<script lang="ts">
	import Keydown from 'svelte-keydown';
	let domain = '';
	let count = 0;
	export const apiMap = new Map();

	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	onMount(() => {
		const getquery = $page.url.searchParams.get('query');
		if (getquery) {
			domain = getquery;
			// Not to automatically trigger the request as of now
			// document.getElementById("sum")?.click();
		}
	});

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
		updateURL();
		apiMap.clear();

		// dnstype check
		for (const type of dnstype) {
			await fetch(baseurl + 'name=' + domain + '&type=' + type, {
				headers: { accept: 'application/dns-json' }
			})
				.then((response) => response.json())
				.then((data) => {
					if (data.Answer) {
						apiMap.set(type, data.Answer);
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
						console.log('setting', key);
					}
				})
				.catch((error) => {
					console.log(error);
					return [];
				});
		}

		count++;
		console.log('returning.');
	}

	function updateURL() {
		const url = new URL(window.location);
		url.searchParams.set('query', domain);
		window.history.pushState({}, '', url);
	}
</script>

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

<!-- <style>
table, th, td {
    border:1px solid black;
    min-width: 60%;
}
</style> -->

<style>
	li {
		word-wrap: break-word;
	}
</style>

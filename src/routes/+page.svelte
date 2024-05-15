<script lang="ts">
// import { onMount } from 'svelte';
let domain = '';
let count = 0;
export const apiMap = new Map();
// import { writable, derived } from 'svelte/store';
// export const apiData = writable({});
let baseurl = "https://cloudflare-dns.com/dns-query?"
let dnstype = ["A", "AAAA", "TXT", "MX"]
const emailcheck: { [x: string]: string; } = {
    '_dmarc': "TXT",
    '_spf': "TXT",
    '_mta-sts': "TXT",
    '_smtp._tls': "TXT"
};

// https://svelte.dev/repl/cb31be94ea444b41a11d1320d16ba6dc?version=3.32.3
async function requestDoH () {
    apiMap.clear()

    // dnstype check
    for (const type of dnstype) {
        await fetch(baseurl + "name=" + domain + "&type=" + type, {headers: {"accept": "application/dns-json"}})
        .then(response => response.json())
        .then(data => {
            if( data.Answer ) {
                apiMap.set(type, data.Answer)
                console.log("setting", type)
            }
        }).catch(error => {
            console.log(error);
            return [];
        });
    }

    // special email records check on subdomains
    for (let key in emailcheck) {
        await fetch(baseurl + "name=" + key + "." + domain + "&type=" + emailcheck[key], {headers: {"accept": "application/dns-json"}})
        .then(response => response.json())
        .then(data => {
            if( data.Answer ) {
                apiMap.set(key, data.Answer)
                console.log("setting", key)
            }
        }).catch(error => {
            console.log(error);
            return [];
        });
    }

    count++;
    console.log("returning.");
}
</script>

<p>This site is built with Svelte as a playground project, which sends request to a DoH server.</p>
<input bind:value={domain} placeholder="enter desired domain" /> <button on:click={requestDoH}>Summarize</button>

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
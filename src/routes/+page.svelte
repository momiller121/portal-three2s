<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<h1>portal.three2s.com</h1>
<p>[served from: {data.host}]</p>

<h2>Request Cookies</h2>
<pre>{JSON.stringify(data.cookies, null, 2)}</pre>

<h2>Request Headers</h2>
<pre>{JSON.stringify(data.headers, null, 2)}</pre>

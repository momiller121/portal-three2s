<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<h1>portal.three2s.com</h1>
<p>[served from: {data.host}]</p>
<p>Fake secret: {data.pretendSecret}</p>

<h2>Request Cookies</h2>
<pre class="blue">{JSON.stringify(data.cookies, null, 2)}</pre>

<h2>Request Headers</h2>
<pre class="green">{JSON.stringify(data.headers, null, 2)}</pre>

<style>
	.blue {
		color: hsl(240, 100%, 40%);
	}
	.green {
		color: hsl(120, 100%, 26%);
	}
</style>

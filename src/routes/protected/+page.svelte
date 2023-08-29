<script lang="ts">
	import { page } from '$app/stores';
</script>

{#if $page.data.session}
	<h1>Protected page</h1>
	<pre style="color:blue">Session: {JSON.stringify($page.data.session, null, 2)}</pre>
	<p>This is a protected content. You can access this content because you are signed in.</p>
	<p>Session expiry: {$page.data.session?.expires}</p>
{:else}
	<h1>Access Denied</h1>
	<p>
		<a href="/auth/signin"> You must be signed in to view this page </a>
	</p>
{/if}

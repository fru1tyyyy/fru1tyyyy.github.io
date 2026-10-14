<script>
    import "../app.css";
	import favicon from '$lib/assets/dog.jpg';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}

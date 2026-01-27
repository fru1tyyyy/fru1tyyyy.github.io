<script>
	import favicon from '$lib/assets/dog.jpg';
	import "./global.css";
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}

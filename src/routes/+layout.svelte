<script>
    // @ts-ignore
    import "../app.css";
	// @ts-ignore
	import favicon from '$lib/assets/dog.jpg';
	import { onMount } from "svelte";
	import { initLang } from "$lib/i18n.js";
	let { children } = $props();
	
	onMount(initLang);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}

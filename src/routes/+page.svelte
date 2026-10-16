<script>
  import { fade, fly } from "svelte/transition";
  import { onMount } from "svelte";
  import Header from "$lib/components/Header.svelte";
  import About from "$lib/home/About.svelte";
  import Info from "$lib/home/Info.svelte";
  import { t } from "$lib/i18n.js";
  let showIntro = true;

  const techStack = [
    { name: "TYPESCRIPT"},
    { name: "JAVASCRIPT"},
    { name: "REACT.JS"},
    { name: "NODE.JS"},
    { name: "SVELTE"},
    { name: "EXPRESS.JS"},
    { name: "GITHUB"},
    { name: "GIT"},
    { name: "NEXT.JS"},
    { name: "FIGMA" },
    { name: "JAVA"},
    { name: "PYTHON"},
    { name: "PHP"},
    { name: "SCALA"},
    { name: "CSS"}
  ];

  onMount(() => {
    setTimeout(() => {
      showIntro = false;
    }, 1000);
  });
</script>

<svelte:head>
  <title>YU BEEN</title>
</svelte:head>

{#if showIntro}
<div class="intro-screen" transition:fade={{duration: 300}}>
  <div class="intro-text">
    <h1 transition:fly={{y: -300, duration: 400}}>{$t("nav.home")}</h1>
  </div>
</div>
{/if}

<Header/>
<About {techStack}/>
<Info/>

<style>
.intro-screen {
  position: fixed;
  inset: 0;
  background: var(--bg);
  color: var(--text);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  text-align: center;
}

.intro-text h1 {
  font-size: clamp(3rem, 10vw, 7rem);
  margin-top: 0;
}

h1 {
  text-align: center;
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 3rem;
  color: var(--text);
}
</style>

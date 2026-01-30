<script>
  import { fade, fly } from "svelte/transition";
  import { onMount } from "svelte";
  import Header from "$lib/components/Header.svelte";
  import About from "$lib/home/About.svelte";
  import Info from "$lib/home/Info.svelte";
  import Footer from "$lib/components/Footer.svelte";

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
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      showIntro = false;
      document.body.style.overflow = "auto";
    }, 1000);
  });
</script>

<svelte:head>
  <title>Yu Been | About Me</title>
</svelte:head>

<style>
  :global(html, body) {
  margin: 0;
  padding: 0;
  background: #061822;
  overflow-x: hidden;
}

.intro-screen {
  position: fixed;
  inset: 0;
  background: black;
  color: white;
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
  color: #ffffff;
}
</style>

{#if showIntro}
<div class="intro-screen" transition:fade={{duration: 300}}>
  <div class="intro-text">
    <h1 transition:fly={{y: -300, duration: 400}}>Home</h1>
  </div>
</div>
{/if}

<Header/>
<About {techStack} />
<Info/>
<Footer/>

<script>
  import { fade, fly } from "svelte/transition";
  import { onMount } from "svelte";
  import "../global.css";
  import Header from "$lib/components/Header.svelte"
  import ProjectCard from "$lib/project/Project.svelte";
  import Footer from "$lib/components/Footer.svelte";

  let showIntro = true;
  function handleScroll(){
    showIntro = window.scrollY < 80;
  }

  onMount(() => {
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      showIntro = false;
      document.body.style.overflow = "auto";
    }, 1000);
  });
</script>

<svelte:head>
  <title>Yu Been | Projects</title>
</svelte:head>

<style>
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

.projects {
  padding: 4rem 6%;
  margin: 0 auto;
  width: 100%;
  max-width: 1400px;
}

h1 {
  text-align: center;
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 3rem;
  color: #ffffff;
}

@media (max-width: 768px) {
  .projects {
    padding: 3rem 5%;
  }
}
</style>
{#if showIntro}
<div class="intro-screen" transition:fade={{duration: 300}}>
  <div class="intro-text">
    <h1 transition:fly={{y: -300, duration: 400}}>Projects</h1>
  </div>
</div>
{/if}

<section class="projects">
  <Header/>
  <h1>My Projects</h1>
  <ProjectCard
    title="My Portfolio"
    image="/img/portfolio.png"
    link="https://github.com/fru1tyyyy/fru1tyyyy.github.io"
    description="My personal portfolio built using Svelte, it includes about me, my experience and my projects"/>

  <ProjectCard
    title="CubeX"
    image="/img/cubex.png"
    link="https://github.com/fru1tyyyy/cubex"
    description="Cube shop built using JavaScript, TypeScript, React, Express"/>

  <ProjectCard
    title="Killua"
    image="/img/killua.jpg"
    link="https://github.com/fru1tyyyy/killua"
    description="Discord Bot that can play music like an actual music bot and can also send memes, built using TypeScript"/>

  <ProjectCard
    title="Pokemon"
    image="/img/pokemon.jpg"
    link="https://github.com/fru1tyyyy/pokemon"
    description="a pokemon game that players can choose their own pokemon and put it in the battles, built using Java"/>
</section>
<Footer/>

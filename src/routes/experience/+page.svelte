<script>
  import { fade, fly } from "svelte/transition";
  import { onMount } from "svelte";
  import Experience from "$lib/work/Experience.svelte";
  import Education from "$lib/work/Educations.svelte";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";

  let activeTab = "Experience";

  /**
     * @param {string} tab
     */
  function selectTab(tab){
    activeTab = tab;
  }

  let showIntro = true;
  function handleScroll() {
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
  <title>Yu Been | Work</title>
</svelte:head>

<style>
:global(body) {
    background: black;
    margin: 0;
    color: white; 
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

.tabs {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 2rem 0;
}

button {
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 8px;
  background: rgba(255,255,255,0.1);
  color: white;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.3s, color 0.3s;
}

button.selected {
  background: #5eead4;
  color: black;
}

.tab-content {
  position: relative;
  overflow: hidden; 
  max-width: 1200px;
  margin: 0 auto;
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
    <h1 transition:fly={{y: -300, duration: 400}}>Work</h1>
  </div>
</div>
{/if}
<Header/>
<div class="tabs">
  <button on:click={() => selectTab("Experience")} class:selected={activeTab === "Experience"}>Experience</button>
  <button on:click={() => selectTab("Education")} class:selected={activeTab === "Education"}>Education</button>
</div>

<div class="tab-content">
  {#key activeTab}
  <div in:fly={{y: 300, duration: 2000}} out:fly={{y: 300, duration: 500}}>
    {#if activeTab === "Experience"}
    <Experience/>
    {:else if activeTab === "Education"}
    <Education/>
    {/if}
  </div>
  {/key}
</div>
<Footer/>
<script>
  import { fade, fly } from "svelte/transition";
  import { onMount } from "svelte";
  import Experience from "$lib/work/Experience.svelte";
  import Education from "$lib/work/Educations.svelte";
  import Volunteer from "$lib/work/Volunteer.svelte";
  import Header from "$lib/components/Header.svelte";
  import { t } from "$lib/i18n.js";

  // Internal IDs (kept in English, not shown to visitors)
  let activeTab = "Education";

  /**
   * @param {string} tab
   */
  function selectTab(tab) {
    activeTab = tab;
  }

  let showIntro = true;
  let pageLoaded = false;

  onMount(() => {
    setTimeout(() => {
      showIntro = false;
      pageLoaded = true;
    }, 1000);
  });
</script>

<svelte:head>
  <title>YU BEEN</title>
</svelte:head>

{#if showIntro}
<div class="intro-screen" transition:fade={{ duration: 300 }}>
  <div class="intro-text">
    <h1 transition:fly={{ y: -300, duration: 400 }}>{$t("nav.work")}</h1>
  </div>
</div>
{/if}

<Header/>

<div class="work-wrap">
  <div class="tabs">
    <button on:click={() => selectTab("Education")} class:selected={activeTab === "Education"}>
      {$t("work.education")}
    </button>
    <button on:click={() => selectTab("Experience")} class:selected={activeTab === "Experience"}>
      {$t("work.experience")}
    </button>
    <button on:click={() => selectTab("Volunteer")} class:selected={activeTab === "Volunteer"}>
      {$t("work.volunteer")}
    </button>
  </div>

  {#if pageLoaded}
  <div in:fly={{ y: 300, duration: 800 }}>
    <div class="tab-content">
      {#key activeTab}
      <div in:fly={{ y: 300, duration: 2000 }} out:fly={{ y: 300, duration: 500 }}>
        {#if activeTab === "Education"}
        <Education/>
        {:else if activeTab === "Experience"}
        <Experience/>
        {:else if activeTab === "Volunteer"}
        <Volunteer/>
        {/if}
      </div>
      {/key}
    </div>
  </div>
  {/if}
</div>

<style>
.work-wrap {
  background: var(--section-bg);
  min-height: 100vh;
  transition: background 0.3s;
}

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

.tabs {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 0;
  padding: 2rem 0;
}

button {
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 8px;
  background: var(--surface);
  color: var(--text);
  cursor: pointer;
  font-weight: 600;
  transition: background 0.3s, color 0.3s;
}

button.selected {
  background: var(--accent);
  color: var(--accent-text);
}

.tab-content {
  position: relative;
  overflow: hidden;
  max-width: 1200px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .tabs {
    padding-top: 5rem;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
  }

  button {
    width: 80%;
    padding: 0.75rem 1rem;
  }
}
</style>
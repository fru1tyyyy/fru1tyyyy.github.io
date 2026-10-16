<script>
  import { fly, fade } from "svelte/transition";
  import ThemeToggle from "$lib/components/Theme.svelte";
  import LangToggle from "$lib/components/Toggle.svelte";
  import { t } from "$lib/i18n.js";

  let isOpen = false;

  function toggleMenu() {
    isOpen = !isOpen;
    document.body.style.overflow = isOpen ? 'hidden' : ''; 
  }
</script>

<div class="toggle-wrap">
  <LangToggle/>
  <ThemeToggle/>
</div>

<div class="theme-toggle-wrap">
  <ThemeToggle />
</div>

<button class="menu-btn" on:click={toggleMenu} aria-label="Toggle menu">
  {#if isOpen}
    ✕
  {:else}
    ☰
  {/if}
</button>

{#if isOpen}
  <div class="overlay" on:click={toggleMenu} transition:fade={{ duration: 200 }}>
    <ul class="overlay-links" on:click|stopPropagation transition:fly={{ y: -300, duration: 400 }}>
      <li><a href="/" data-sveltekit-preload-data="hover" on:click={toggleMenu}>{$t("nav.home")}</a></li>
      <li><a href="/experience" data-sveltekit-preload-data="hover" on:click={toggleMenu}>{$t("nav.work")}</a></li>
      <li><a href="/project" data-sveltekit-preload-data="hover" on:click={toggleMenu}>{$t("nav.projects")}</a></li>
      <li><a href="/contact" data-sveltekit-preload-data="hover" on:click={toggleMenu}>{$t("nav.contact")}</a></li>
    </ul>
  </div>
{/if}

<style>
.theme-toggle-wrap {
  position: fixed;
  top: 1rem;
  right: 4.5rem;
  z-index: 1001;
}

.menu-btn {
  position: fixed;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 2rem;
  color: var(--text);
  z-index: 1001;
  cursor: pointer;
}

.overlay {
  position: fixed;
  inset: 0;
  background-color: var(--bg);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.overlay-links {
  list-style: none;
  text-align: center;
  padding: 0;
}

.overlay-links li {
  margin: 1rem 0;
}

.overlay-links a {
  text-decoration: none;
  color: transparent; 
  font-weight: bold;
  font-size: 4rem;
  font-family: 'Inter', sans-serif;
  background: linear-gradient(
    to right,
    var(--link-start) 20%,
    purple 40%,
    red 60%,
    green 80%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  animation: shine 5s linear infinite;
  transition: color 0.3s;
}

.overlay-links a:hover {
  color: violet; 
}

.toggle-wrap {
  position: fixed;
  top: 1rem;
  right: 4.5rem;
  display: flex;
  gap: 0.5rem;
  z-index: 1001;
}

@keyframes shine {
  to {
    background-position: 200% center;
  }
}

@media (max-width: 768px) {
  .menu-btn {
    font-size: 1.8rem;
  }

  .theme-toggle-wrap {
    right: 4rem;
  }

  .overlay-links a {
    font-size: 2.5rem; 
    background-size: 200% auto; 
  }

  .overlay-links li {
    margin: 0.8rem 0;
  }
}
</style>
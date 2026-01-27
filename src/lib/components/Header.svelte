<script>
  import { fly, fade } from "svelte/transition";

  let isOpen = false;

  function toggleMenu() {
    isOpen = !isOpen;
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'; 
  }
</script>
<button class="menu-btn" on:click={toggleMenu}>
  {#if isOpen}
    ✕
  {:else}
    ☰
  {/if}
</button>
{#if isOpen}
  <div class="overlay" on:click={toggleMenu} transition:fade={{ duration: 200 }}>
    <ul class="overlay-links" on:click|stopPropagation transition:fly={{ y: -300, duration: 400 }}>
      <li><a href="/" sveltekit:prefetch on:click={toggleMenu}>HOME</a></li>
      <li><a href="/experience" sveltekit:prefetch on:click={toggleMenu}>WORK</a></li>
      <li><a href="/project" sveltekit:prefetch on:click={toggleMenu}>PROJECTS</a></li>
      <li><a href="mailto:yubeen721@gmail.com" sveltekit:prefetch on:click={toggleMenu}>CONTACT</a></li>
    </ul>
  </div>
{/if}
<style>
.menu-btn {
  position: fixed;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 2rem;
  color: white;
  z-index: 1001;
  cursor: pointer;
}

.overlay {
  position: fixed;
  inset: 0;
  background-color: black; 
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
  color: white;
  font-weight: bold;
  font-size: 4rem;
  transition: color 0.3s;
}

.overlay-links a:hover {
  color: violet;
}

@media (max-width: 768px) {
  .menu-btn {
    font-size: 1.8rem;
  }

  .overlay-links a {
    font-size: 2.5rem; /* smaller on mobile */
  }

  .overlay-links li {
    margin: 0.8rem 0;
  }
}
</style>

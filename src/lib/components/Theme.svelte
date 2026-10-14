<script>
  import { onMount } from "svelte";

  let theme = "dark";

  onMount(() => {
    theme = document.documentElement.dataset.theme || "dark";
  });

  function toggle() {
    theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem("theme", theme); } catch (e) {}
  }
</script>

<button class="theme-toggle" on:click={toggle} aria-label="Toggle dark and light mode">
  {theme === "dark" ? "☀️" : "🌙"}
</button>

<style>
  .theme-toggle {
    background: var(--surface);
    color: var(--text);
    border: none;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.1rem;
    cursor: pointer;
    transition: background 0.3s;
  }
</style>
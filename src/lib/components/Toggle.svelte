<script>
    import { lang, setLang } from "$lib/i18n.js";
</script>

<button class="lang-toggle" on:click={() => setLang($lang === "en" ? "zh" : "en")} 
aria-label="Change Language">{$lang === "en" ? "中" : "en"}</button>

<style>
  .lang-toggle {
    background: var(--surface);
    color: var(--text);
    border: none;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    font-size: 0.95rem;
    font-weight: 700;
    cursor: pointer;
    transition: background 0.3s;
  }
</style>
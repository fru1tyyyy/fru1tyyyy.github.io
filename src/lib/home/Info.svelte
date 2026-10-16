<script>
  import { t } from "$lib/i18n.js";
</script>

<section id="about">
  <div class="content">
    <h2>{$t("info.title")}</h2>

    {#each $t("info.blocks") as block}
      <div class="block">
        <div class="block-title">{block.title}</div>
        <ul>
          {#each block.items as item}
            <li>{item}</li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>
</section>

<style>
  section {
    min-height: 100vh;
    background: var(--section-bg);
    color: var(--text);
    display: flex;
    justify-content: center;
    padding: 5rem 6%;
    font-family: Georgia, "Times New Roman", serif;
    transition: background 0.3s, color 0.3s;
  }

  .content {
    max-width: 680px;
    width: 100%;
  }

  h2 {
    text-align: center;
    font-size: clamp(2rem, 5vw, 2.8rem);
    margin-bottom: 2.5rem;
    font-weight: 500;
  }

  .block {
    margin-bottom: 2.2rem;
  }

  .block-title {
    font-size: 1rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 0.8rem;
    font-family: "Segoe UI", sans-serif;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    position: relative;
    padding-left: 1.2rem;
    margin-bottom: 0.85rem;
    line-height: 1.7;
    color: var(--text-soft);
    font-size: 1rem;
  }

  li::before {
    content: "–";
    position: absolute;
    left: 0;
    color: var(--link-blue);
  }

  @media (max-width: 768px) {
    section {
      padding: 4rem 5%;
    }

    li {
      font-size: 0.95rem;
    }
  }
</style>

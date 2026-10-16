<script>
  import { t } from "$lib/i18n.js";

  /**
   * @type {any[] | null | undefined}
   */
  export let techStack = [];
</script>

<section class="hero" id="about">
  <div class="hero-content">
    <div class="avatar">
      <img src="/img/pfp3.jpg" alt="Avatar" />
    </div>

    <div class="intro">
      <h1>{$t("home.name")}</h1>
      <p>{$t("home.role")}</p>
    </div>
  </div>

  <div class="tech-bar-container">
    <div class="tech-bar">
      {#each techStack ?? [] as tech}
        <div class="tech-item">
          <span>{tech.name}</span>
          <span class="separator">/</span>
        </div>
      {/each}

      {#each techStack ?? [] as tech}
        <div class="tech-item">
          <span>{tech.name}</span>
          <span class="separator">/</span>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .hero {
    width: 100%;
    min-height: 100vh;
    background: var(--section-bg);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Georgia, "Times New Roman", serif;
    color: var(--text);
    position: relative;
    transition: background 0.3s, color 0.3s;
  }

  .hero-content {
    display: flex;
    align-items: center;
    gap: 3rem;
  }

  .avatar {
    width: 200px;
    height: 200px;
    background: #bfc4ff;
    border: 3px solid var(--link-blue);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .avatar img {
    width: 90%;
    height: 90%;
  }

  .intro h1 {
    margin: 0;
    font-size: 2.4rem;
    font-weight: 500;
  }

  .intro p {
    margin-top: 0.6rem;
    font-size: 1.1rem;
    color: var(--muted);
    letter-spacing: 0.06em;
    font-family: "Segoe UI", sans-serif;
  }

  .tech-bar-container {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 1rem 0;
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    background: var(--bg);
    overflow: hidden;
    transition: background 0.3s;
  }

  .tech-bar {
    display: flex;
    gap: 3rem;
    white-space: nowrap;
    animation: scroll 22s linear infinite;
  }

  .tech-item {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-size: 0.9rem;
    letter-spacing: 0.15em;
    color: var(--tech-text);
    font-family: "Segoe UI", sans-serif;
  }

  .separator {
    color: var(--separator);
  }

  @media (max-width: 768px) {
    .hero-content {
      flex-direction: column;
      text-align: center;
      gap: 1.5rem;
    }
  }

  @keyframes scroll {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }
</style>

<script>
  import { onMount } from "svelte";
  import { t } from "$lib/i18n.js";

  // "title" is a translation key (skills.languages, skills.frameworks, skills.tools)
  const sections = [
    {
      title: "languages",
      items: ["JavaScript", "TypeScript", "Python", "PHP", "C#"]
    },
    {
      title: "frameworks",
      items: ["React.JS", "Svelte", "Express.JS", "Node.JS", "Flutter"]
    },
    {
      title: "tools",
      items: ["Git", "GitHub", "VS Code", "Figma", "Canva"]
    }
  ];

  let filled = sections.map(section => section.items.map(() => 0));

  onMount(() => {
    setTimeout(() => {
      sections.forEach((section, i) => {
        section.items.forEach((_, j) => {
          setTimeout(() => {
            filled[i][j] = 100;
          }, j * 200);
        });
      });
    }, 100);
  });
</script>

<section class="skill-section">
  <h1>{$t("skills.title")}</h1>

  <div class="skill-grid">
    {#each sections as section, i}
      <div class="skill-card">
        <h3 class="skill-title">
          {$t("skills." + section.title)}
        </h3>
        <ul class="skill-list">
          {#each section.items as item, j}
            <li class="skill-item">
              <span class="skill-name">{item}</span>
              <div class="skill-bar-container">
                <div class="skill-bar" style="width: {filled[i][j]}%"></div>
              </div>
            </li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>
</section>

<style>
  h1 {
    text-align: center;
    font-size: clamp(2rem, 5vw, 3rem);
    margin-bottom: 3rem;
    color: var(--text);
  }

  .skill-section {
    background: var(--section-bg);
    padding: 5rem 1.25rem;
    transition: background 0.3s;
  }

  .skill-grid {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  @media (min-width: 768px) {
    .skill-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .skill-grid {
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
    }
  }

  .skill-card {
    background: var(--glass);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-radius: 1.25rem;
    padding: 1.75rem;
    border: 1px solid var(--glass-border);
    box-shadow: 0 20px 40px var(--glass-shadow);
  }

  .skill-title {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    color: var(--skill-title);
  }

  .skill-list {
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0;
    list-style: none;
  }

  .skill-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  .skill-name {
    color: var(--skill-name);
    font-size: 0.9rem;
    white-space: nowrap;
  }

  .skill-bar {
    flex-shrink: 0;
    width: 0%;
    height: 0.35rem;
    border-radius: 999px;
    background: linear-gradient(90deg, #5eead4, #c084fc);
    transition: width 2s ease-in-out;
  }

  .skill-bar-container {
    width: 100%;
    height: 0.35rem;
    border-radius: 900px;
    background: var(--track);
    overflow: hidden;
  }
</style>

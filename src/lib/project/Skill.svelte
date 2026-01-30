<script>
    import { onMount } from "svelte";
    let animate = false;

    const sections = [
        {
            title: "Languages",
            items: ["JavaScript", "TypeScript", "Python", "PHP", "C#", "Java"]
        },
        {
            title: "Frameworks",
            items: ["React.JS", "Svelte", "Express.JS", "Node.JS", "Laravel", "Next.JS"]
        },
        {
            title: "Tools & Databases",
            items: ["Git", "GitHub", "VS Code", "Visual Studio", "Figma", "MongoDB"]
        }
    ];

    let filled = sections.map(section => section.items.map(() => 0));

    onMount(() => {
        setTimeout(() => {
            animate = true;
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
<style>
    h1 {
        text-align: center;
        font-size: clamp(2rem, 5vw, 3rem);
        margin-bottom: 3rem;
        color: #ffffff;
    }
    .skill-section {
        background: black;
        padding: 5rem 1.25rem;
    }

    .skill-header {
        max-width: 1200px;
        margin: 0 auto 3rem;
        text-align: center;
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
        background: rgba(255, 255, 255, 0.06);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        border-radius: 1.25rem;
        padding: 1.75rem;
        border: 1px solid rgba(255, 255, 255, 0.08);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
    }

    .skill-title {
        display: flex;
        align-items: center;
        gap: 0.6rem;
        font-size: 0.9rem;
        font-weight: 600;
        letter-spacing: 0.12em;
        color: #e5e7eb;
    }

    .skill-list {
        margin-top: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .skill-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    }

    .skill-name {
        color: #d1d5db;
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
        background: rgba(255,255,255,0.1);
        overflow: hidden;
    }

  @media (max-width: 420px) {
    .skill-bar {
      width: 9rem;
    }
  }
</style>
<section class="skill-section">
    <h1>My Skills</h1>
  <div class="skill-header">
  </div>
  <div class="skill-grid">
    {#each sections as section}
      <div class="skill-card">
        <h3 class="skill-title">
          {section.title}
        </h3>
        <ul class="skill-list">
          {#each section.items as item, j}
            <li class="skill-item">
              <span class="skill-name">{item}</span>
              <div class="skill-bar-container">
                <div class="skill-bar" style="width: {filled[sections.indexOf(section)][j]}%"></div>
              </div>
            </li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>
</section>
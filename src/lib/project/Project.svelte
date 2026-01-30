<script>
  const projects = [
    {
      title: "My Portfolio",
      image: "/img/portfolio.png",
      link: "https://github.com/fru1tyyyy/fru1tyyyy.github.io",
      description: "My personal portfolio built using Svelte, it includes about me, my experience and my projects"
    },
    {
      title: "CubeX",
      image: "/img/cubex.png",
      link: "https://github.com/fru1tyyyy/cubex",
      description: "Cube shop built using JavaScript, TypeScript, React, Express"
    },
    {
      title: "Killua",
      image: "/img/killua.jpg",
      link: "https://github.com/fru1tyyyy/killua",
      description: "Discord Bot that can play music like an actual music bot and can also send memes, built using TypeScript"
    },
    {
      title: "BlurVision",
      image: "/img/faceblur.jpg",
      link: "https://github.com/fru1tyyyy/blurvision",
      description: "It can blur video, like in this case it can detect people face and blur it"
    },
    {
      title: "Pokemon",
      image: "/img/pokemon.jpg",
      link: "https://github.com/fru1tyyyy/pokemon",
      description: "A pokemon game where players can choose their own pokemon and battle, built using Java"
    }
  ];
</script>

<section class="projects">
  <h1>My Projects</h1>

  {#each projects as project}
    <div class="project-card">
      <a href={project.link} target="_blank" class="image-wrapper">
        <img src={project.image} alt={project.title} />
      </a>

      <div class="content">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
      </div>
    </div>
  {/each}
</section>

<style>
.projects {
  padding: 4rem 2%;
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  background: black; 
  box-sizing: border-box;
  overflow-x: hidden; 
}

h1 {
  text-align: center;
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 3rem;
  color: #ffffff;
}

.project-card {
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  margin: 2rem auto;
  align-items: flex-start;
  width: 100%;
  background: #111; 
  padding: 1rem;  
  border-radius: 12px; 
  box-shadow: 0 4px 12px rgba(0,0,0,0.5); 
  box-sizing: border-box;
}

.image-wrapper {
  flex: 1 1 40%; 
  max-width: 300px; 
  border: 2px solid #e8b5b3;
  padding: 4px;
  border-radius: 8px;
  transition: transform 0.2s ease;
}

.image-wrapper:hover {
  transform: scale(1.05);
}

img {
  width: 100%; 
  height: auto;
  border-radius: 6px;
  display: block;
}

.content {
  flex: 1 1 60%; 
}

h2 {
  margin: 0 0 0.5rem;
  color: #cdd9d9;
  font-size: 1.5rem;
}

p {
  line-height: 1.6;
  color: #b5c4c4;
  font-size: 1rem;
}

/* Mobile adjustments */
@media (max-width: 768px) {
  .project-card {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 0.8rem;
  }

  .image-wrapper {
    max-width: 90%; /* shrink image wrapper on mobile */
  }

  .content {
    text-align: center;
    width: 100%;
  }

  h2 {
    font-size: 1.3rem;
  }

  p {
    font-size: 0.95rem;
  }
}

/* Global fix for any body overflow */
:global(body) {
  overflow-x: hidden;
}
</style>
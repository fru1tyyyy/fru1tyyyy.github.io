<script>
  const projects = [
    {
      title: "Chatty",
      image: "/img/chatty.png",
      link: "https://github.com/fru1tyyyy/chatty",
      description: "A real time chatting system !!!"
    },
    {
      title: "My Portfolio",
      image: "/img/portfolio1.png",
      link: "https://github.com/fru1tyyyy/fru1tyyyy.github.io",
      description: "My personal portfolio !!!"
    },
    {
      title: "CubeX",
      image: "/img/cubex.png",
      link: "https://github.com/fru1tyyyy/cubex",
      description: "A cube shop !!!"
    },
    {
      title: "Killua",
      image: "/img/killua.jpg",
      link: "https://github.com/fru1tyyyy/killua",
      description: "Discord music bot !!!"
    },
    {
      title: "BlurVision",
      image: "/img/faceblur.jpg",
      link: "https://github.com/fru1tyyyy/blurvision",
      description: "Detect people faces and blur it !!!"
    },
    {
      title: "Predict-Price",
      image: "/img/ml.jpg",
      link: "https://github.com/fru1tyyyy/predict-price",
      description: "Machine Learning to predict price !!!"
    },
    {
      title: "Pokemon",
      image: "/img/pokemon.jpg",
      link: "https://github.com/fru1tyyyy/pokemon",
      description: "A pokemon game !!!"
    }
  ];
</script>

<div class="projects-wrap">
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
</div>

<style>
.projects-wrap {
  background: var(--section-bg);
  transition: background 0.3s;
}

.projects {
  padding: 4rem 2%;
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  box-sizing: border-box;
  overflow-x: hidden;
}

h1 {
  text-align: center;
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 3rem;
  color: var(--text);
}

.project-card {
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  margin: 2rem auto;
  align-items: flex-start;
  width: 100%;
  background: var(--card-bg);
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px var(--card-shadow);
  box-sizing: border-box;
  transition: background 0.3s;
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
  color: var(--title-soft);
  font-size: 1.5rem;
}

p {
  line-height: 1.6;
  color: var(--p-soft);
  font-size: 1rem;
}

@media (max-width: 768px) {
  .project-card {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 0.8rem;
  }

  .image-wrapper {
    max-width: 90%;
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
</style>
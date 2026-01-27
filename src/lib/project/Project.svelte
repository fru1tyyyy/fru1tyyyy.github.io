<script>
  export let title;
  export let description;
  export let image;
  export let link;
</script>

<div class="project-card">
  <a href={link} target="_blank" class="image-wrapper">
    <img src={image} alt={title} />
  </a>

  <div class="content">
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
</div>

<style>
.project-card {
  display: flex;
  gap: 2rem;
  margin: 3rem auto;
  align-items: flex-start;
  width: 100%;
  max-width: 1100px;
  background: #111; /* <- dark background */
  padding: 1.5rem;  /* add some padding */
  border-radius: 12px; /* rounded edges for card */
  box-shadow: 0 4px 12px rgba(0,0,0,0.5); /* optional: subtle shadow */
}

.image-wrapper {
  border: 2px solid #e8b5b3;
  padding: 6px;
  border-radius: 8px;
  transition: transform 0.2s ease;
}

.image-wrapper:hover {
  transform: scale(1.03);
}

img {
  width: 340px;
  max-width: 100%; 
  height: auto;
  border-radius: 6px;
  display: block;
}

.content {
  flex: 1;
}

h2 {
  margin: 0 0 0.4rem;
  color: #cdd9d9;
  font-size: 1.6rem;
}

p {
  max-width: 520px;
  line-height: 1.7;
  color: #b5c4c4;
  font-size: 1rem;
}

/* 📱 Mobile */
@media (max-width: 768px) {
  .project-card {
    flex-direction: column;
    align-items: flex-start; 
    gap: 1.2rem;
  }

  img {
    width: 100%;
  }

  p {
    max-width: 100%;
  }
}

/* 📱 Mobile */
@media (max-width: 768px) {
  .project-card {
    flex-direction: column;
    align-items: flex-start; 
    gap: 1.2rem;
  }

  img {
    width: 100%;
  }

  p {
    max-width: 100%;
  }
}
</style>
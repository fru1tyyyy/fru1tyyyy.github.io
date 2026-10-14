<script>
  const experiences = [
    {
      date: "Aug 2024 - Dec 2024",
      org: "BASS SDN BHD",
      role: "Software Intern",
      bullets: [
        "Gain knowledge in upgrading and maintaining computer hardware",
        "Acquire practical experience in backend development",
        "Gain practical skills in C# for software development",
        "Develop professional experience in a real-world work environment"
      ]
    }
  ];
</script>

<section class="experience">
  <h2>My Experience</h2>
  {#each experiences as exp}
    <div class="row">
      <div class="date">{exp.date}</div>
      <div class="content">
        <h3>{exp.org}</h3>
        <h4>{exp.role}</h4>
        <ul>
          {#each exp.bullets as bullet}
            <li>{bullet}</li>
          {/each}
        </ul>
      </div>
    </div>
  {/each}
</section>

<style>
.experience {
  background: var(--section-bg);
  color: var(--text-soft);
  padding: 5rem 8%;
  position: relative;
  transition: background 0.3s, color 0.3s;
}

h2 {
  text-align: center;
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  font-weight: 700;
  margin-bottom: 4rem;
  color: var(--text);
}

.row {
  display: flex;
  gap: 3rem;
  margin-bottom: 4.5rem;
  position: relative;
  transition: transform 0.3s ease;
}

.row:hover {
  transform: translateX(5px);
  background: var(--card-bg);
  border-radius: 12px;
  padding: 0.1rem;
}

.date {
  width: 200px;
  font-size: 0.95rem;
  color: var(--muted);
  text-align: right;
  padding-top: 2px;
  line-height: 3.7;
  white-space: nowrap;
  flex-shrink: 0;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.content h3 {
  font-size: 1.2rem;
  color: var(--tech-text);
  margin-bottom: 0.3rem;
}

.content h4 {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 1rem;
}

ul {
  padding-left: 1.2rem;
  line-height: 1.7;
}

li {
  font-size: 0.95rem;
  color: var(--text-soft);
  margin-bottom: 0.6rem;
}

@media (max-width: 768px) {
  .experience {
    padding: 4rem 6%;
  }

  .experience::before {
    left: 20px;
  }

  .row {
    flex-direction: column;
    gap: 0.5rem;
    padding-left: 40px;
  }

  .row::before {
    left: 10px;
    top: 0.5rem;
  }

  .date {
    text-align: left;
    width: auto;
    margin-bottom: 0.3rem;
  }
}
</style>
<script>
  const experiences = [
    {
      date: "April 2025 — Present",
      org: "Sunway University",
      role: "Bachelor of Software Engineering",
      bullets: [
        "Pursuing a strong foundation in software development, algorithms, and system design.",
        "Developing practical skills in full-stack development and software engineering principles.",
        "Building real-world applications using JavaScript, TypeScript, React and Express.",
        "Strengthening problem-solving and analytical thinking through coursework and projects.",
      ]
    },
    {
      date: "August 2024 - December 2024",
      org: "BASS SDN BHD",
      role: "Software Intern",
      bullets: [
        "Designing and coding Web based software modules.",
        "Perform unit testing to meet quality standard.",
        "Ability to identify and fix bugs within stipulated timeframe.",
        "Ability to provide technical solutions to customer support within SLA period.",
        "Write detailed software module documentations, including design spec, technical user guide, reference manual.",
        "Self-motivated individual with the capability to drive goals in a remote setting."
      ]
    },
    {
      date: "April 2023 — April 2025",
      org: "Sunway College",
      role: "Diploma in Computer Science",
      bullets: [
        "Graduated with Academic Excellence Award.",
        "Developed skills in logical thinking, algorithm design, and debugging.",
        "Gain coding skills on Python, Java, PHP and Scala.",
        "Grew in confidence and openness, building meaningful connections with friends."
      ]
    },
  ];
</script>

<section class="experience">
  <h2>My Experiences</h2>
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
  background: black;
  color: #d9e7ef;
  padding: 5rem 8%;
  position: relative;
}

h2 {
  text-align: center;
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  font-weight: 700;
  margin-bottom: 4rem;
  color: #eaf6ff;
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
  background: #111;
  border-radius: 12px;
  padding: 0.1rem;
}

.date {
  width: 200px;
  font-size: 0.95rem;
  color: #8fb3c9;
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
  color: #9dd7ff;
  margin-bottom: 0.3rem;
}

.content h4 {
  font-size: 1.05rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1rem;
}

ul {
  padding-left: 1.2rem;
  line-height: 1.7;
}

li {
  font-size: 0.95rem;
  color: #c9dce9;
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

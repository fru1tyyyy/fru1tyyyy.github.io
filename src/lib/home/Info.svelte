<style>
  section {
  min-height: 100vh;
  background: black;
  color: #e6f1f5;
  display: flex;
  justify-content: center;
  padding: 5rem 6%;
  font-family: Georgia, "Times New Roman", serif;
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
  color: #9fb4bf;
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
  color: #cfe4f1;
  font-size: 1rem;
}

li::before {
  content: "–";
  position: absolute;
  left: 0;
  color: #7fb9ff;
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

<section id="about">
  <div class="content">
    <h2>About Me</h2>
    <div class="block">
      <div class="block-title">Introduction</div>
      <ul>
        <li>Hi, Im Yu Been — A Software Engineer student at Sunway University</li>
        <li>A self taught programmer that has passion on learning new things and problem solving</li>
        <li>I am a Full-Stack Developer passionate about building Modern Web Applications.</li>
      </ul>
    </div>
    <div class="block">
      <div class="block-title">Hobbies</div>
      <ul>
        <li>Gaming, Cubing, Coding, Tech Stuff</li>
        <li>Watch Shows, Listen to Music, Workout, Sleep</li>
      </ul>
  </div>
    <div class="block">
      <div class="block-title">Technical Skills</div>
      <ul>
        <li>Frontend Development (React.JS, Sveltekit)</li>
        <li>Backend Development (Express.JS, Next.JS, Laravel)</li>
        <li>UI/UX Design and Prototyping (Figma)</li>
        <li>Collaboration Tools (Git, GitHub)</li>
      </ul>
    </div>
    <div class="block">
      <div class="block-title">Soft Skills & Languages</div>
      <ul>
        <li>Problem Solving Skill, Time Management, Creativity</li>
        <li>English (Fluent), Chinese (Fluent), Malay (Conversational)</li>
      </ul>
    </div>
</div>
</section>

<script>
  import { t } from "$lib/i18n.js";
</script>

<section class="volunteer">
  <h2>{$t("volunteer.title")}</h2>
  {#each $t("volunteer.items") as vol}
    <div class="row">
      <div class="date">{vol.date}</div>
      <div class="content">
        <h3>{vol.org}</h3>
        <ul>
          {#each vol.bullets as bullet}
            <li>{bullet}</li>
          {/each}
        </ul>
      </div>
    </div>
  {/each}
</section>

<style>
.volunteer {
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
  .volunteer {
    padding: 4rem 6%;
  }

  .row {
    flex-direction: column;
    gap: 0.5rem;
    padding-left: 40px;
  }

  .date {
    text-align: left;
    width: auto;
    margin-bottom: 0.3rem;
  }
}
</style>

import { skills, tech } from "../data/content";

/**
 * Expertise — section 02 — horizontal-scroll card track.
 */
export default function Expertise() {
  return (
    <section id="expertise" className="expertise-pin">
      <div className="expertise">
        <div className="expertise__header">
          <p className="section-index">02</p>
          <h2>What I lead.</h2>
          <p>
            From fiber routes and optical layers to capacity, resilience and
            rollout strategy.
          </p>
        </div>
        <div className="expertise__track">
          {skills.map((skill, i) => (
            <article className="expertise__card reveal-card" key={skill}>
              <span className="expertise__num">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3>{skill}</h3>
            </article>
          ))}
          <article className="expertise__card expertise__card--tech reveal-card">
            <span className="expertise__num">—</span>
            <h3>Platforms &amp; Technologies</h3>
            <div className="expertise__chips">
              {tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

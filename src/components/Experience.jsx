import { experience } from "../data/content";

/**
 * Experience — section 03 — horizontal-scroll timeline of roles.
 */
export default function Experience() {
  return (
    <section id="experience" className="experience-pin section--light">
      <div className="experience">
        <div className="experience__header">
          <p className="section-index">03</p>
          <h2>Professional journey.</h2>
          <p>Scroll through two decades of telecom leadership.</p>
        </div>
        <div className="timeline__track">
          {experience.map((job) => (
            <article
              className={`timeline__card reveal-card${job.current ? " timeline__card--current" : ""}`}
              key={job.company + job.role}
            >
              <div className="timeline__meta">
                <time>{job.period}</time>
                {job.current && (
                  <span className="timeline__badge">Current</span>
                )}
              </div>
              <h3>{job.role}</h3>
              <h4>{job.company}</h4>
              <ul>
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

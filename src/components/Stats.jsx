import { achievements } from "../data/content";

/**
 * Stats — the animated key-metrics bar displayed below the hero.
 */
export default function Stats() {
  return (
    <section className="stats" aria-label="Key metrics">
      <div className="stats__inner reveal-stagger">
        {achievements.map((a) => (
          <div className="stats__item reveal-item" key={a.label}>
            <span
              className="stat-counter stats__value"
              data-value={a.value}
              data-prefix={a.prefix || ""}
              data-suffix={a.suffix || ""}
            >
              {a.prefix || ""}0{a.suffix || ""}
            </span>
            <span className="stats__label">{a.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

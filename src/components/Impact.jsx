import { achievements } from "../data/content";

/**
 * Impact — section 04 — animated stat counters in a card grid.
 */
export default function Impact() {
  return (
    <section id="impact" className="impact">
      <div className="impact__intro reveal">
        <p className="section-index">04</p>
        <h2>
          Measured in infrastructure,
          <br />
          scale and outcomes.
        </h2>
      </div>
      <div className="impact__grid reveal-stagger">
        {achievements.map((a) => (
          <div className="impact__card reveal-item" key={a.label}>
            <span
              className="stat-counter impact__value"
              data-value={a.value}
              data-prefix={a.prefix || ""}
              data-suffix={a.suffix || ""}
            >
              {a.prefix || ""}0{a.suffix || ""}
            </span>
            <span className="impact__label">{a.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

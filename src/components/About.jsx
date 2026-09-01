import { MapPin } from "lucide-react";

/**
 * About — section 01 — sticky headline + prose content.
 */
export default function About() {
  return (
    <section id="about" className="about section--light">
      <div className="about__sticky">
        <p className="section-index">01</p>
        <h2 className="about__headline">
          Experience built
          <br />
          from the network up.
        </h2>
      </div>
      <div className="about__content">
        <p className="about__lead reveal">
          A career spanning RF, microwave, transmission and optical transport —
          evolving alongside India&apos;s telecom infrastructure.
        </p>
        <p className="about__body reveal">
          Currently Deputy General Manager — Transport Network Planning at
          Vodafone Idea Limited, with a proven record of leading network
          modernization, strategic CAPEX planning, vendor partnerships and
          cross-functional engineering teams.
        </p>
        <div className="about__facts reveal">
          <div>
            <MapPin size={16} />
            <span>Lucknow, Uttar Pradesh</span>
          </div>
          <div>
            <span className="about__fact-dot" />
            <span>22+ years industry experience</span>
          </div>
        </div>
      </div>
    </section>
  );
}

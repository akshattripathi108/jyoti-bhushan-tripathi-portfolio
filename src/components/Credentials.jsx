import { GraduationCap, Award } from "lucide-react";

/**
 * Credentials — Education and Certifications cards.
 */
export default function Credentials() {
  return (
    <section className="credentials">
      <article className="credential reveal">
        <GraduationCap size={28} strokeWidth={1.5} />
        <div>
          <span className="credential__tag">Education</span>
          <h3>B.E. — Communication Engineering</h3>
          <p>
            Madan Mohan Malaviya Government Engineering College, Gorakhpur ·
            2002 · 70.60%
          </p>
        </div>
      </article>
      <article className="credential reveal">
        <Award size={28} strokeWidth={1.5} />
        <div>
          <span className="credential__tag">
            Certifications &amp; Programmes
          </span>
          <h3>CCNA · Wireless Technology · Six Sigma · Leadership</h3>
          <p>
            Diploma in Wireless Technology (2008) · 3G Transmission Optimization
            Principles (2010) · Saksham Leadership Development Programme (2013)
            · Six Sigma Project Completion (2018)
          </p>
        </div>
      </article>
    </section>
  );
}

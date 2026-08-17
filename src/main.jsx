import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  Download,
  Mail,
  Phone,
  MapPin,
  Network,
  BriefcaseBusiness,
  GraduationCap,
  Award,
  ChevronRight,
} from "lucide-react";
import "./styles.css";

const experience = [
  {
    period: "Nov 2019 — Present",
    company: "Vodafone Idea Limited",
    role: "Deputy General Manager — Transport Network Planning",
    current: true,
    bullets: [
      "Lead strategic Optical Fiber Transport Network planning for 4G, 5G and Enterprise services.",
      "Planned 2,000+ km OFC rollout involving ₹100+ Cr CAPEX.",
      "Delivered 395 Fiber POPs and planned 250 additional POPs.",
      "Led 100+ Nokia PSS DWDM nodes, CIENA NLD expansion and aggregation initiatives.",
      "Drive annual CAPEX, rollout strategy, resilient architecture, IP-ification and stakeholder coordination.",
    ],
  },
  {
    period: "Apr 2015 — Oct 2019",
    company: "Vodafone Idea Limited",
    role: "Manager — RF Planning",
    bullets: [
      "Led 2G/3G/LTE planning and Radio CAPEX across UP East.",
      "Planned 1,500+ LTE sites and supported commercial 4G rollout.",
      "Supported Vodafone–Idea integration during the merger.",
    ],
  },
  {
    period: "Oct 2008 — Mar 2015",
    company: "Idea Cellular",
    role: "Manager — Microwave Planning",
    bullets: [
      "Managed Microwave Transport Planning.",
      "Supported 7,200+ GSM and 1,800+ UMTS sites.",
      "Supported annual rollout of approximately 1,000 2G and 300 3G sites.",
      "Worked with Nokia and ECI platforms.",
    ],
  },
  {
    period: "Feb 2008 — Oct 2008",
    company: "Reliance Communications",
    role: "Deputy Manager — Transmission Planning",
    bullets: [
      "Microwave transmission planning, link-budget analysis and path profiling.",
    ],
  },
  {
    period: "Mar 2006 — Jan 2008",
    company: "ADA Cellworks",
    role: "Transmission Engineer",
    bullets: [
      "Transmission deployment for the Nokia–BSNL UP East project and Nokia/BSNL coordination.",
    ],
  },
  {
    period: "Dec 2004 — Mar 2006",
    company: "Telecom Network Solutions",
    role: "RF Engineer",
    bullets: ["GSM RF planning and optimization."],
  },
];
const skills = [
  "Transport Network Planning",
  "Optical Transport",
  "OFC / OPGW",
  "DWDM / OTN",
  "IP/MPLS & IP-ification",
  "Microwave Networks",
  "Traffic & Capacity Planning",
  "4G / 5G Transport",
  "Enterprise Connectivity",
  "CAPEX & Program Management",
  "Vendor Management",
  "Strategic Leadership",
];
const tech = [
  "Nokia",
  "Huawei",
  "CIENA",
  "ECI",
  "SDH",
  "PDH",
  "GSM",
  "UMTS",
  "LTE",
  "5G",
  "MapInfo",
  "Google Earth",
  "LIPTON SI 2.0",
];
const achievements = [
  ["22+", "Years in Telecom"],
  ["₹100+ Cr", "CAPEX Programs"],
  ["2,000+ km", "OFC Planned"],
  ["395", "Fiber POPs Delivered"],
  ["100+", "DWDM Nodes"],
  ["1,500+", "LTE Sites Planned"],
];
const CV_URL = "/Jyoti_Bhushan_Tripathi_Executive_Resume_Final.pdf";
const LINKEDIN_URL = "https://www.linkedin.com/in/jyoti-bhushan-tripathi/";

function LinkedInIcon() {
  return (
    <svg className="linkedin-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.27 2.37 4.27 5.46v6.28ZM5.32 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.54 20.45H7.1V9H3.54v11.45Z"
      />
    </svg>
  );
}
function App() {
  return (
    <div>
      <header className="nav">
        <a className="brand" href="#top">
          JBT<span>.</span>
        </a>
        <nav>
          {["About", "Expertise", "Experience", "Achievements", "Contact"].map(
            (x) => (
              <a key={x} href={"#" + x.toLowerCase()}>
                {x}
              </a>
            ),
          )}
        </nav>
        <div className="navActions">
          <a
            className="navLinkedin"
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon /> LinkedIn
          </a>
          <a className="navCta" href="#contact">
            Contact <ArrowUpRight size={16} />
          </a>
        </div>
      </header>
      <main id="top">
        <section className="hero">
          <div className="gridGlow"></div>
          <div className="heroText">
            <div className="eyebrow">
              <span></span> TELECOM NETWORK STRATEGY & ENGINEERING
            </div>
            <h1>
              Building the <em>transport networks</em> that keep modern telecom
              moving.
            </h1>
            <p className="lead">
              Jyoti Bhushan Tripathi is a telecom executive with 22+ years of
              experience across optical transport, OFC rollout, DWDM, IP/MPLS,
              microwave networks and 4G/5G infrastructure.
            </p>
            <div className="heroActions">
              <a className="primary" href="#experience">
                Explore Career <ArrowUpRight size={18} />
              </a>
              <a className="secondary" href={CV_URL} download>
                <Download size={17} /> Download CV
              </a>
            </div>
          </div>
          <div className="networkVisual">
            <div className="orbit o1"></div>
            <div className="orbit o2"></div>
            <div className="node n1"></div>
            <div className="node n2"></div>
            <div className="node n3"></div>
            <div className="node n4"></div>
            <div className="core">
              <Network size={44} />
              <small>
                OPTICAL
                <br />
                TRANSPORT
              </small>
            </div>
            <div className="line l1"></div>
            <div className="line l2"></div>
            <div className="line l3"></div>
            <div className="line l4"></div>
          </div>
        </section>
        <section className="stats">
          {achievements.map(([n, l]) => (
            <div className="stat" key={l}>
              <strong>{n}</strong>
              <span>{l}</span>
            </div>
          ))}
        </section>
        <section id="about" className="section split">
          <div>
            <div className="sectionTag">01 / PROFILE</div>
            <h2>Experience built from the network up.</h2>
          </div>
          <div className="aboutCopy">
            <p className="big">
              A career spanning RF, microwave, transmission and optical
              transport — evolving with India's telecom infrastructure.
            </p>
            <p>
              Currently Deputy General Manager — Transport Network Planning at
              Vodafone Idea Limited, with a proven record of leading network
              modernization, strategic CAPEX planning, vendor partnerships and
              cross-functional engineering teams.
            </p>
            <div className="facts">
              <div>
                <MapPin size={17} />
                <span>Lucknow, Uttar Pradesh</span>
              </div>
              <div>
                <BriefcaseBusiness size={17} />
                <span>22+ years industry experience</span>
              </div>
            </div>
          </div>
        </section>
        <section id="expertise" className="section dark">
          <div className="sectionTag">02 / EXPERTISE</div>
          <div className="sectionHead">
            <h2>What I lead.</h2>
            <p>
              From fiber routes and optical layers to capacity, resilience and
              rollout strategy.
            </p>
          </div>
          <div className="skillGrid">
            {skills.map((s, i) => (
              <div className="skill" key={s}>
                <span>0{i + 1}</span>
                <b>{s}</b>
                <ChevronRight size={17} />
              </div>
            ))}
          </div>
          <div className="tech">
            <div>
              <span className="muted">PLATFORMS & TECHNOLOGIES</span>
            </div>
            <div className="chips">
              {tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        </section>
        <section id="experience" className="section">
          <div className="sectionTag">03 / CAREER</div>
          <div className="sectionHead">
            <h2>Professional journey.</h2>
            <p>
              Progression from RF engineering to strategic transport-network
              leadership.
            </p>
          </div>
          <div className="timeline">
            {experience.map((e, i) => (
              <article
                className={"job " + (e.current ? "current" : "")}
                key={e.company + e.role}
              >
                <div className="jobRail">
                  <span className="dot"></span>
                  {i < experience.length - 1 && <span className="rail"></span>}
                </div>
                <div className="jobBody">
                  <div className="jobMeta">
                    <span>{e.period}</span>
                    {e.current && <b>CURRENT ROLE</b>}
                  </div>
                  <h3>{e.role}</h3>
                  <h4>{e.company}</h4>
                  <ul>
                    {e.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="achievements" className="section achievementSection">
          <div className="sectionTag">04 / IMPACT</div>
          <div className="impactGrid">
            <div>
              <h2>Measured in infrastructure, scale and outcomes.</h2>
              <p>
                Selected highlights from large-scale telecom transport and
                wireless planning programs.
              </p>
            </div>
            <div className="impactCards">
              {achievements.map(([n, l]) => (
                <div className="impact" key={l}>
                  <strong>{n}</strong>
                  <span>{l}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="section credentials">
          <div className="credential">
            <GraduationCap />
            <div>
              <span>EDUCATION</span>
              <h3>B.E. — Communication Engineering</h3>
              <p>
                Madan Mohan Malaviya Government Engineering College, Gorakhpur ·
                2002 · 70.60%
              </p>
            </div>
          </div>
          <div className="credential">
            <Award />
            <div>
              <span>CERTIFICATIONS & PROGRAMMES</span>
              <h3>CCNA · Wireless Technology · Six Sigma · Leadership</h3>
              <p>
                Diploma in Wireless Technology (2008) · 3G Transmission
                Optimization Principles (2010) · Saksham Leadership Development
                Programme (2013) · Six Sigma Project Completion (2018)
              </p>
            </div>
          </div>
        </section>
        <section id="contact" className="contact">
          <div className="sectionTag">05 / CONTACT</div>
          <div className="contactTop">
            <div>
              <h2>
                Let's connect around
                <br />
                <em>telecom infrastructure.</em>
              </h2>
            </div>
            <a className="cvButton" href={CV_URL} download>
              <Download /> Download Executive CV
            </a>
          </div>
          <div className="contactRow">
            <a href="mailto:jyoti.bhushan2002@gmail.com">
              <Mail />
              jyoti.bhushan2002@gmail.com
            </a>
            <a href="tel:+919889009361">
              <Phone />
              +91 98890 09361
            </a>
            <span>
              <MapPin />
              Lucknow, Uttar Pradesh
            </span>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
              <LinkedInIcon /> LinkedIn
            </a>
          </div>
        </section>
      </main>
      <footer>
        <span>© {new Date().getFullYear()} Jyoti Bhushan Tripathi</span>
        <span>
          Telecom Network Strategy · Transport · Optical Infrastructure
        </span>
      </footer>
    </div>
  );
}
createRoot(document.getElementById("root")).render(<App />);

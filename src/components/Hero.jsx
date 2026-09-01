import { ArrowUpRight, Download, ChevronDown } from "lucide-react";
import NetworkCanvas from "./NetworkCanvas";
import { CV_URL } from "../data/content";

/**
 * Hero — the full-viewport opening section.
 */
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="hero__eyebrow">
          <span className="hero__eyebrow-line" />
          Telecom Network Strategy
        </p>
        <h1 className="hero__title">
          Building the infrastructure
          <br />
          <em>that connects India.</em>
        </h1>
        <p className="hero__lead">
          22+ years leading optical transport, OFC rollout, DWDM, and 4G/5G
          network planning at scale — from RF engineering to strategic CAPEX
          leadership.
        </p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#experience">
            View career
            <ArrowUpRight size={16} />
          </a>
          <a className="btn btn--ghost" href={CV_URL} download>
            <Download size={15} />
            Download CV
          </a>
        </div>
      </div>
      <div className="hero__visual">
        <NetworkCanvas />
      </div>
      <div className="hero__scroll">
        <span>Scroll to explore</span>
        <ChevronDown size={18} />
      </div>
    </section>
  );
}

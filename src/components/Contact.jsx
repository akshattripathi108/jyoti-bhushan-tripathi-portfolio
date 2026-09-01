import { Mail, Phone, MapPin, Download } from "lucide-react";
import LinkedInIcon from "./LinkedInIcon";
import { CV_URL, LINKEDIN_URL } from "../data/content";

/**
 * Contact — section 05 — links, phone, email and CV download.
 */
export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__inner">
        <p className="section-index section-index--light">05</p>
        <h2 className="contact__title reveal">
          Let&apos;s connect around
          <br />
          <em>telecom infrastructure.</em>
        </h2>
        <div className="contact__links reveal">
          <a href="mailto:jyoti.bhushan2002@gmail.com">
            <Mail size={18} />
            jyoti.bhushan2002@gmail.com
          </a>
          <a href="tel:+919889009361">
            <Phone size={18} />
            +91 98890 09361
          </a>
          <span>
            <MapPin size={18} />
            Lucknow, Uttar Pradesh
          </span>
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
            <LinkedInIcon />
            LinkedIn Profile
          </a>
        </div>
        <a
          className="btn btn--primary btn--large reveal"
          href={CV_URL}
          download
        >
          <Download size={18} />
          Download Executive CV
        </a>
      </div>
    </section>
  );
}

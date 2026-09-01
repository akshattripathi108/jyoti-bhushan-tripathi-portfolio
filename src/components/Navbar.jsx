import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import LinkedInIcon from "./LinkedInIcon";
import { LINKEDIN_URL, NAV_LINKS } from "../data/content";

/**
 * Navbar — sticky top navigation with brand, desktop links, CTA, and mobile drawer.
 */
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`nav ${mobileMenuOpen ? "nav--menu-open" : ""}`}>
      <div className="nav__container">
        <a className="nav__brand" href="#top" onClick={closeMenu}>
          Jyoti Bhushan Tripathi
        </a>

        {/* Desktop navigation */}
        <nav className="nav__links" aria-label="Main Navigation">
          {NAV_LINKS.map(({ id, label }) => (
            <a key={id} href={`#${id}`} data-nav={id} className="nav__link">
              {label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <a
            className="nav__linkedin"
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
          >
            <LinkedInIcon />
          </a>
          <a className="nav__cta" href="#contact" onClick={closeMenu}>
            Get in touch
            <ArrowUpRight size={15} />
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            className="nav__toggle"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`nav__mobile-drawer ${mobileMenuOpen ? "nav__mobile-drawer--open" : ""}`}
        aria-hidden={!mobileMenuOpen}
      >
        <nav className="nav__mobile-links">
          {NAV_LINKS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="nav__mobile-link"
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className="nav__mobile-link nav__mobile-link--linkedin"
            onClick={closeMenu}
          >
            <LinkedInIcon />
            <span>LinkedIn Profile</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

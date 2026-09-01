/**
 * App — root component.
 *
 * Responsibilities:
 *  - Boot global hooks (smooth scroll, scroll animations, colour morph)
 *  - Render layout shell (background orbs, progress bar, nav, main, footer)
 *  - Compose page sections from individual components
 *
 * Each section lives in src/components/ for isolation and testability.
 */
import { useLenis } from "./hooks/useLenis";
import { useScrollAnimations } from "./hooks/useScrollAnimations";
import { useColorMorph } from "./hooks/useColorMorph";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Experience from "./components/Experience";
import Impact from "./components/Impact";
import Credentials from "./components/Credentials";
import Contact from "./components/Contact";

export default function App() {
  useLenis();
  useScrollAnimations();
  useColorMorph();

  return (
    <>
      {/* ── Background colour-morph layer ── */}
      <div className="color-morph" aria-hidden="true">
        <div className="color-morph__orb color-morph__orb--1" />
        <div className="color-morph__orb color-morph__orb--2" />
        <div className="color-morph__grain" />
      </div>

      {/* ── Scroll progress bar ── */}
      <div className="scroll-progress" aria-hidden="true">
        <div className="scroll-progress__bar" />
      </div>

      <Navbar />

      <main id="top" className="page-content">
        <Hero />
        <Stats />
        <About />
        <Expertise />
        <Experience />
        <Impact />
        <Credentials />
        <Contact />
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Jyoti Bhushan Tripathi</span>
        <span>
          Telecom Network Strategy · Transport · Optical Infrastructure
        </span>
      </footer>
    </>
  );
}

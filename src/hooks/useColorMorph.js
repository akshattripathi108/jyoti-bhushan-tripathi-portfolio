import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* Warm executive palette — no blue tints */
const GOLD = "rgba(201, 168, 108, ";
const WARM = "rgba(160, 130, 90, ";

const SECTIONS = [
  {
    selector: ".hero",
    bg: "#0c0b0a",
    theme: "dark",
    orb1: { x: 72, y: 38, color: `${GOLD}0.14)` },
    orb2: { x: 18, y: 72, color: `${WARM}0.08)` },
  },
  {
    selector: ".stats",
    bg: "#11100f",
    theme: "dark",
    orb1: { x: 55, y: 50, color: `${GOLD}0.1)` },
    orb2: { x: 85, y: 20, color: "rgba(80, 70, 60, 0.12)" },
  },
  {
    selector: ".about",
    bg: "#f5f2ed",
    theme: "light",
    orb1: { x: 80, y: 30, color: `${GOLD}0.07)` },
    orb2: { x: 10, y: 80, color: "rgba(140, 130, 120, 0.1)" },
  },
  {
    selector: ".expertise-pin",
    bg: "#0c0b0a",
    theme: "dark",
    orb1: { x: 30, y: 45, color: `${GOLD}0.12)` },
    orb2: { x: 75, y: 65, color: `${WARM}0.06)` },
  },
  {
    selector: ".experience-pin",
    bg: "#edeae4",
    theme: "light",
    orb1: { x: 65, y: 25, color: `${GOLD}0.08)` },
    orb2: { x: 15, y: 70, color: "rgba(130, 120, 110, 0.1)" },
  },
  {
    selector: ".impact",
    bg: "#0f0e0d",
    theme: "dark",
    orb1: { x: 50, y: 40, color: `${GOLD}0.11)` },
    orb2: { x: 90, y: 75, color: `${WARM}0.05)` },
  },
  {
    selector: ".credentials",
    bg: "#121110",
    theme: "dark",
    orb1: { x: 25, y: 55, color: `${GOLD}0.08)` },
    orb2: { x: 70, y: 15, color: "rgba(70, 65, 60, 0.1)" },
  },
  {
    selector: ".contact",
    bg: "#0c0b0a",
    theme: "dark",
    orb1: { x: 50, y: 50, color: `${GOLD}0.1)` },
    orb2: { x: 20, y: 30, color: `${WARM}0.06)` },
  },
];

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
}

function setActiveNav(id) {
  document.querySelectorAll("[data-nav]").forEach((link) => {
    link.classList.toggle("nav__link--active", link.dataset.nav === id);
  });
}

export function useColorMorph() {
  useEffect(() => {
    const morph = document.querySelector(".color-morph");
    const orb1 = document.querySelector(".color-morph__orb--1");
    const orb2 = document.querySelector(".color-morph__orb--2");
    if (!morph || !orb1 || !orb2) return;

    const sections = SECTIONS.map((s) => ({
      ...s,
      el: document.querySelector(s.selector),
    })).filter((s) => s.el);

    if (!sections.length) return;

    const state = {
      bg: sections[0].bg,
      o1x: sections[0].orb1.x,
      o1y: sections[0].orb1.y,
      o1c: sections[0].orb1.color,
      o2x: sections[0].orb2.x,
      o2y: sections[0].orb2.y,
      o2c: sections[0].orb2.color,
    };

    const apply = () => {
      morph.style.backgroundColor = state.bg;
      orb1.style.left = `${state.o1x}%`;
      orb1.style.top = `${state.o1y}%`;
      orb1.style.background = state.o1c;
      orb2.style.left = `${state.o2x}%`;
      orb2.style.top = `${state.o2y}%`;
      orb2.style.background = state.o2c;
    };

    apply();
    setTheme(sections[0].theme);

    const ctx = gsap.context(() => {
      sections.forEach((section, index) => {
        if (index === 0) return;

        gsap.to(state, {
          bg: section.bg,
          o1x: section.orb1.x,
          o1y: section.orb1.y,
          o1c: section.orb1.color,
          o2x: section.orb2.x,
          o2y: section.orb2.y,
          o2c: section.orb2.color,
          ease: "none",
          onUpdate: apply,
          scrollTrigger: {
            trigger: section.el,
            start: "top 90%",
            end: "top 20%",
            scrub: 1,
          },
        });

        ScrollTrigger.create({
          trigger: section.el,
          start: "top center",
          end: "bottom center",
          onEnter: () => setTheme(section.theme),
          onEnterBack: () => setTheme(section.theme),
        });
      });

      ScrollTrigger.create({
        trigger: sections[0].el,
        start: "top top",
        end: "bottom center",
        onEnter: () => setTheme(sections[0].theme),
        onEnterBack: () => setTheme(sections[0].theme),
      });

      ["about", "expertise", "experience", "impact", "contact"].forEach(
        (id) => {
          const el = document.getElementById(id);
          if (!el) return;
          ScrollTrigger.create({
            trigger: el,
            start: "top center",
            end: "bottom center",
            onEnter: () => setActiveNav(id),
            onEnterBack: () => setActiveNav(id),
          });
        }
      );
    });

    return () => ctx.revert();
  }, []);
}

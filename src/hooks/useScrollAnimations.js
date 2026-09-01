import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getLenis } from "./useLenis";

gsap.registerPlugin(ScrollTrigger);

function horizontalScrollDistance(track, padding = 0) {
  if (!track) return 0;
  return Math.max(0, track.scrollWidth - window.innerWidth + padding);
}

export function useScrollAnimations() {
  useEffect(() => {
    const onAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute("href");
      if (!href?.startsWith("#")) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const lenis = getLenis();
      if (lenis) {
        lenis.scrollTo(target, { offset: -72, duration: 1.2 });
      } else {
        target.scrollIntoView({ behavior: "smooth" });
      }
    };

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach((link) =>
      link.addEventListener("click", onAnchorClick)
    );

    const mm = gsap.matchMedia();

    // Universal animations (all screens)
    mm.add("all", () => {
      // Hero entrance on load
      const loadTl = gsap.timeline({ defaults: { ease: "power3.out" } });
      loadTl
        .from(".hero__eyebrow", { y: 24, opacity: 0, duration: 0.7 }, 0.15)
        .from(".hero__title", { y: 36, opacity: 0, duration: 0.9 }, 0.3)
        .from(".hero__lead", { y: 24, opacity: 0, duration: 0.8 }, 0.5)
        .from(".hero__actions", { y: 20, opacity: 0, duration: 0.7 }, 0.65)
        .from(".hero__visual", { scale: 0.92, opacity: 0, duration: 1.1 }, 0.4)
        .from(".hero__scroll", { opacity: 0, duration: 0.6 }, 1);

      // Scroll progress bar
      gsap.to(".scroll-progress__bar", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3,
        },
      });

      // Reveal animations
      gsap.utils.toArray(".reveal").forEach((el) => {
        gsap.from(el, {
          y: 24,
          opacity: 0,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 92%",
            toggleActions: "play none none reverse",
          },
        });
      });

      gsap.utils.toArray(".reveal-card").forEach((el, index) => {
        gsap.fromTo(
          el,
          {
            y: 32,
            opacity: 0,
            filter: "blur(8px)",
          },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.9,
            delay: index * 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      gsap.utils.toArray(".reveal-stagger").forEach((container) => {
        const items = container.querySelectorAll(".reveal-item");
        gsap.from(items, {
          y: 20,
          opacity: 0,
          duration: 0.8,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Counter animations
      gsap.utils.toArray(".stat-counter").forEach((el) => {
        const target = parseFloat(el.dataset.value);
        const prefix = el.dataset.prefix || "";
        const suffix = el.dataset.suffix || "";
        const obj = { val: 0 };

        gsap.to(obj, {
          val: target,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 92%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            const display =
              target >= 100
                ? Math.round(obj.val).toLocaleString("en-IN")
                : Math.round(obj.val);
            el.textContent = `${prefix}${display}${suffix}`;
          },
        });
      });

      // Nav background on scroll
      ScrollTrigger.create({
        start: "top -60",
        onUpdate: (self) => {
          const nav = document.querySelector(".nav");
          if (nav) nav.classList.toggle("nav--scrolled", self.scroll() > 60);
        },
      });
    });

    // Mobile animations (width <= 768px)
    mm.add("(max-width: 768px)", () => {
      gsap.utils.toArray(".reveal-card").forEach((el, index) => {
        gsap.fromTo(
          el,
          {
            y: 4,
            opacity: 0,
            filter: "blur(1px)",
          },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.45,
            delay: index * 0.02,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 94%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    });

    // Desktop animations (width > 768px)
    mm.add("(min-width: 769px)", () => {
      // Hero parallax
      gsap.to(".hero__visual", {
        y: 120,
        scale: 0.92,
        opacity: 0.4,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".hero__content", {
        y: -60,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "60% top",
          scrub: true,
        },
      });

      // Horizontal expertise scroll
      const expertiseTrack = document.querySelector(".expertise__track");
      if (expertiseTrack) {
        const getScroll = () => horizontalScrollDistance(expertiseTrack, 120);
        gsap.to(expertiseTrack, {
          x: () => -getScroll(),
          ease: "none",
          scrollTrigger: {
            trigger: ".expertise-pin",
            pin: true,
            anticipatePin: 1,
            scrub: 1,
            end: () => `+=${getScroll() || 1}`,
            invalidateOnRefresh: true,
          },
        });
      }

      // Horizontal experience timeline
      const timelineTrack = document.querySelector(".timeline__track");
      if (timelineTrack) {
        const getScroll = () => horizontalScrollDistance(timelineTrack, 80);
        gsap.to(timelineTrack, {
          x: () => -getScroll(),
          ease: "none",
          scrollTrigger: {
            trigger: ".experience-pin",
            pin: true,
            anticipatePin: 1,
            scrub: 1,
            end: () => `+=${getScroll() || 1}`,
            invalidateOnRefresh: true,
          },
        });
      }

      // About sticky text scale
      gsap.from(".about__headline", {
        scale: 0.95,
        opacity: 0.3,
        ease: "none",
        scrollTrigger: {
          trigger: ".about",
          start: "top bottom",
          end: "center center",
          scrub: true,
        },
      });
    });

    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      anchorLinks.forEach((link) =>
        link.removeEventListener("click", onAnchorClick)
      );
      mm.revert();
    };
  }, []);
}

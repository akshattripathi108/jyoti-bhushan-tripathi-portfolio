import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let lenisInstance = null;

export function getLenis() {
  return lenisInstance;
}

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
      autoRaf: false,
    });

    lenisInstance = lenis;
    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tick);

    // Keep GSAP lagSmoothing enabled to prevent scroll jumping on window blur/focus
    gsap.ticker.lagSmoothing(500, 33);

    const onResize = () => {
      ScrollTrigger.refresh();
    };

    const onVisibilityChange = () => {
      if (!document.hidden) {
        ScrollTrigger.refresh();
      }
    };

    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);
}

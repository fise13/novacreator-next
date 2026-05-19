"use client";

import Lenis from "lenis";
import { useEffect } from "react";

declare global {
  interface Window {
    __novacreatorLenis?: Lenis;
  }
}

export function SmoothScroll() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    if (reduceMotion || isMobile) {
      return undefined;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    window.__novacreatorLenis = lenis;
    lenis.scrollTo(0, { immediate: true, force: true });

    let frame = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);

    return () => {
      if (window.__novacreatorLenis === lenis) {
        window.__novacreatorLenis = undefined;
      }
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
}

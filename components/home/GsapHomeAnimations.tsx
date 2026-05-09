"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function GsapHomeAnimations() {
  const pathname = usePathname();
  const previousPathname = useRef(pathname);

  useEffect(() => {
    if (previousPathname.current !== pathname) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      ScrollTrigger.clearScrollMemory();
      previousPathname.current = pathname;
    }
  }, [pathname]);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const navDuration = isMobile ? 0.36 : 0.7;
    const heroLineDuration = isMobile ? 0.52 : 0.9;
    const heroFadeDuration = isMobile ? 0.38 : 0.72;
    const revealDuration = isMobile ? 0.36 : 0.72;
    const clipDuration = isMobile ? 0.42 : 0.8;
    const driftDuration = isMobile ? 0.42 : 0.82;
    const slideDuration = isMobile ? 0.34 : 0.68;
    const rowDuration = isMobile ? 0.28 : 0.58;
    const lineDuration = isMobile ? 0.36 : 0.75;
    const revealStart = isMobile ? "top 94%" : "top 84%";
    const clipStart = isMobile ? "top 95%" : "top 86%";
    const rowStart = isMobile ? "top 96%" : "top 90%";
    const revealEnd = isMobile ? "top 68%" : "top 58%";
    const clipEnd = isMobile ? "top 66%" : "top 56%";
    const rowEnd = isMobile ? "top 70%" : "top 62%";
    const scrubSpeed = isMobile ? 0.16 : 0.28;
    const cleanups: Array<() => void> = [];

    if (reduceMotion) {
      return undefined;
    }

    const context = gsap.context(() => {
      window.requestAnimationFrame(() => ScrollTrigger.refresh());
      const refreshTimer = window.setTimeout(() => ScrollTrigger.refresh(), 120);
      cleanups.push(() => window.clearTimeout(refreshTimer));

      gsap.fromTo(
        "[data-gsap='nav']",
        { y: -18, opacity: 0 },
        { y: 0, opacity: 1, duration: navDuration, ease: "power3.out" },
      );

      gsap.fromTo(
        "[data-gsap-scroll-progress]",
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: document.documentElement,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.35,
          },
        },
      );

      gsap.fromTo(
        "[data-gsap='hero-line']",
        { yPercent: 80, rotate: 0.6 },
        {
          yPercent: 0,
          rotate: 0,
          duration: heroLineDuration,
          ease: "power4.out",
          stagger: isMobile ? 0.025 : 0.06,
          delay: isMobile ? 0.04 : 0.12,
        },
      );

      gsap.fromTo(
        "[data-gsap='hero-fade']",
        { y: 18, opacity: 0, filter: "blur(6px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: heroFadeDuration,
          ease: "power3.out",
          stagger: isMobile ? 0.025 : 0.06,
          delay: isMobile ? 0.12 : 0.45,
        },
      );

      gsap.utils.toArray<HTMLElement>("[data-gsap='reveal']").forEach((element) => {
        gsap.fromTo(
          element,
          { y: 24, opacity: 0, filter: "blur(5px)" },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: revealDuration,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: revealStart,
              end: revealEnd,
              scrub: scrubSpeed,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-gsap='clip']").forEach((element) => {
        gsap.fromTo(
          element,
          { clipPath: "inset(0 0 100% 0)", y: 14, opacity: 0 },
          {
            clipPath: "inset(0 0 0% 0)",
            y: 0,
            opacity: 1,
            duration: clipDuration,
            ease: "power4.out",
            scrollTrigger: {
              trigger: element,
              start: clipStart,
              end: clipEnd,
              scrub: scrubSpeed,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-gsap='soft-scale']").forEach((element) => {
        gsap.fromTo(
          element,
          { scale: 0.985, y: 20, opacity: 0, filter: "blur(5px)" },
          {
            scale: 1,
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: revealDuration,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: revealStart,
              end: revealEnd,
              scrub: scrubSpeed,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-gsap='drift-up']").forEach((element) => {
        gsap.fromTo(
          element,
          { y: 34, opacity: 0, rotate: -0.35 },
          {
            y: 0,
            opacity: 1,
            rotate: 0,
            duration: driftDuration,
            ease: "power4.out",
            scrollTrigger: {
              trigger: element,
              start: isMobile ? "top 94%" : "top 82%",
              end: revealEnd,
              scrub: scrubSpeed,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-gsap='slide-stack']").forEach((element) => {
        const children = Array.from(element.children);

        gsap.fromTo(
          children.length > 0 ? children : element,
          { y: 22, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: slideDuration,
            ease: "power3.out",
            stagger: isMobile ? 0.03 : 0.08,
            scrollTrigger: {
              trigger: element,
              start: revealStart,
              end: revealEnd,
              scrub: scrubSpeed,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-gsap='stagger-row']").forEach((element) => {
        gsap.fromTo(
          element,
          { y: 16, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: rowDuration,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: rowStart,
              end: rowEnd,
              scrub: scrubSpeed,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-gsap='draw-line']").forEach((element) => {
        gsap.fromTo(
          element,
          { scaleX: 0, scaleY: 0, transformOrigin: "left top" },
          {
            scaleX: 1,
            scaleY: 1,
            duration: lineDuration,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: rowStart,
              end: rowEnd,
              scrub: scrubSpeed,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-gsap='pin-label']").forEach((element) => {
        gsap.to(element, {
          yPercent: -6,
          ease: "none",
          scrollTrigger: {
            trigger: element.closest("section") ?? element,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      const matchMedia = gsap.matchMedia();
      cleanups.push(() => matchMedia.revert());

      matchMedia.add("(min-width: 1024px)", () => {
        gsap.utils.toArray<HTMLElement>("[data-gsap-pin-sidebar]").forEach((element) => {
          const trigger = element.closest<HTMLElement>("[data-gsap-pin-wrap]") ?? element.parentElement ?? element;

          ScrollTrigger.create({
            trigger,
            start: element.dataset.pinStart ?? "top 110px",
            end: element.dataset.pinEnd ?? "bottom bottom",
            pin: element,
            pinSpacing: false,
          });
        });
      });

      gsap.utils.toArray<HTMLDetailsElement>("[data-gsap-faq-detail]").forEach((element) => {
        const answer = element.querySelector<HTMLElement>("[data-gsap-faq-answer]");
        const summary = element.querySelector<HTMLElement>("summary");

        if (!answer || !summary) {
          return;
        }

        let isAnimating = false;

        gsap.set(answer, {
          opacity: element.open ? 1 : 0,
          y: element.open ? 0 : -6,
        });

        const openAnswer = () => {
          element.open = true;
          isAnimating = true;

          gsap.fromTo(
            answer,
            { height: 0, opacity: 0, y: -6 },
            {
              height: "auto",
              opacity: 1,
              y: 0,
              duration: 0.42,
              ease: "power3.out",
              onComplete: () => {
                gsap.set(answer, { clearProps: "height" });
                isAnimating = false;
              },
            },
          );
        };

        const closeAnswer = () => {
          isAnimating = true;

          gsap.to(answer, {
            height: 0,
            opacity: 0,
            y: -6,
            duration: 0.32,
            ease: "power2.inOut",
            onComplete: () => {
              element.open = false;
              gsap.set(answer, { clearProps: "height" });
              isAnimating = false;
            },
          });
        };

        const onSummaryClick = (event: MouseEvent) => {
          event.preventDefault();

          if (isAnimating) {
            return;
          }

          if (element.open) {
            closeAnswer();
          } else {
            openAnswer();
          }
        };

        summary.addEventListener("click", onSummaryClick);
        cleanups.push(() => summary.removeEventListener("click", onSummaryClick));
      });

      gsap.utils.toArray<HTMLElement>("[data-gsap-parallax]").forEach((element) => {
        const depth = Number(element.dataset.depth ?? 22);

        gsap.to(element, {
          y: depth,
          ease: "none",
          scrollTrigger: {
            trigger: element.closest("section") ?? element,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-gsap-speed]").forEach((element) => {
        const speed = Number(element.dataset.gsapSpeed ?? 1);
        const offset = Number.isFinite(speed) ? (1 - speed) * (isMobile ? 70 : 150) : 0;

        gsap.fromTo(
          element,
          { y: offset },
          {
            y: -offset,
            ease: "none",
            scrollTrigger: {
              trigger: element.closest("section") ?? element,
              start: "top bottom",
              end: "bottom top",
              scrub: isMobile ? 0.25 : 0.6,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-gsap-bar]").forEach((element) => {
        gsap.fromTo(
          element,
          { scaleY: 0.08, transformOrigin: "bottom" },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: element.closest("section") ?? element,
              start: isMobile ? "top 92%" : "top 82%",
              end: isMobile ? "top 62%" : "top 52%",
              scrub: scrubSpeed,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-gsap-counter]").forEach((element) => {
        const target = Number(element.dataset.gsapCounter);
        const suffix = element.dataset.counterSuffix ?? "";

        if (!Number.isFinite(target)) {
          return;
        }

        const counter = { value: 0 };
        gsap.to(counter, {
          value: target,
          ease: "none",
          onUpdate: () => {
            element.textContent = `${Math.round(counter.value)}${suffix}`;
          },
          scrollTrigger: {
            trigger: element,
            start: isMobile ? "top 94%" : "top 86%",
            end: isMobile ? "top 72%" : "top 64%",
            scrub: scrubSpeed,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-gsap-tilt]").forEach((element) => {
        const rotateX = gsap.quickTo(element, "rotationX", { duration: 0.45, ease: "power3.out" });
        const rotateY = gsap.quickTo(element, "rotationY", { duration: 0.45, ease: "power3.out" });
        const y = gsap.quickTo(element, "y", { duration: 0.45, ease: "power3.out" });

        gsap.set(element, {
          transformPerspective: 1000,
          transformStyle: "preserve-3d",
          willChange: "transform",
        });

        const onMove = (event: PointerEvent) => {
          const rect = element.getBoundingClientRect();
          const xRatio = (event.clientX - rect.left) / rect.width - 0.5;
          const yRatio = (event.clientY - rect.top) / rect.height - 0.5;

          rotateX(yRatio * -2.5);
          rotateY(xRatio * 2.5);
          y(-2);
        };

        const onLeave = () => {
          rotateX(0);
          rotateY(0);
          y(0);
        };

        element.addEventListener("pointermove", onMove);
        element.addEventListener("pointerleave", onLeave);
        cleanups.push(() => {
          element.removeEventListener("pointermove", onMove);
          element.removeEventListener("pointerleave", onLeave);
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-gsap-magnetic]").forEach((element) => {
        const x = gsap.quickTo(element, "x", { duration: 0.35, ease: "power3.out" });
        const y = gsap.quickTo(element, "y", { duration: 0.35, ease: "power3.out" });

        const onMove = (event: PointerEvent) => {
          const rect = element.getBoundingClientRect();
          const xOffset = event.clientX - (rect.left + rect.width / 2);
          const yOffset = event.clientY - (rect.top + rect.height / 2);

          x(xOffset * 0.1);
          y(yOffset * 0.1);
        };

        const onLeave = () => {
          x(0);
          y(0);
        };

        element.addEventListener("pointermove", onMove);
        element.addEventListener("pointerleave", onLeave);
        cleanups.push(() => {
          element.removeEventListener("pointermove", onMove);
          element.removeEventListener("pointerleave", onLeave);
        });
      });

      gsap.utils.toArray<HTMLElement>("a, button").forEach((element) => {
        if (
          element.hasAttribute("data-gsap-magnetic") ||
          element.closest("[data-no-button-motion]")
        ) {
          return;
        }

        const scale = gsap.quickTo(element, "scale", { duration: 0.22, ease: "power2.out" });
        const y = gsap.quickTo(element, "y", { duration: 0.22, ease: "power2.out" });

        const onEnter = () => {
          scale(1.015);
          y(-1);
        };
        const onLeave = () => {
          scale(1);
          y(0);
        };

        element.addEventListener("pointerenter", onEnter);
        element.addEventListener("pointerleave", onLeave);
        cleanups.push(() => {
          element.removeEventListener("pointerenter", onEnter);
          element.removeEventListener("pointerleave", onLeave);
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-gsap='float']").forEach((element, index) => {
        gsap.to(element, {
          y: index % 2 === 0 ? -14 : 14,
          rotate: index % 2 === 0 ? 0.8 : -0.8,
          duration: 3.4 + index * 0.2,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      });
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
      context.revert();
    };
  }, [pathname]);

  return null;
}

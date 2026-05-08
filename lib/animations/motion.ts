import type { Variants } from "framer-motion";

export const easeOutExpo = [0.16, 1, 0.3, 1] as const;
export const softSpring = {
  type: "spring",
  stiffness: 120,
  damping: 22,
  mass: 0.8,
} as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 34, filter: "blur(14px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: easeOutExpo },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

export const scaleReveal: Variants = {
  hidden: { opacity: 0, scale: 0.94, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: easeOutExpo },
  },
};

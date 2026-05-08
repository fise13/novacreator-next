"use client";

import { motion, useMotionValue, useSpring, type HTMLMotionProps } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { softSpring } from "@/lib/animations/motion";

type MagneticButtonProps = HTMLMotionProps<"a"> & {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export function MagneticButton({
  children,
  variant = "primary",
  className = "",
  ...props
}: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, softSpring);
  const springY = useSpring(y, softSpring);

  return (
    <motion.a
      {...props}
      style={{ x: springX, y: springY }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.left - rect.width / 2) * 0.18);
        y.set((event.clientY - rect.top - rect.height / 2) * 0.18);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      whileTap={{ scale: 0.98 }}
      className={`group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3.5 text-sm font-semibold transition ${
        variant === "primary"
          ? "bg-white text-black shadow-[0_0_60px_rgba(255,255,255,0.18)]"
          : "border border-white/15 bg-white/[0.04] text-white hover:border-white/30"
      } ${className}`}
    >
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      <span className="relative">{children}</span>
      <ArrowUpRight className="relative h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </motion.a>
  );
}

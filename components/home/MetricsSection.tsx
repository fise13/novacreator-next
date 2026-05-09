"use client";

import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { fadeUp, staggerContainer } from "@/lib/animations/motion";

const metrics = [
  { value: 40, suffix: "+", label: "legacy pages mapped into a modern App Router structure" },
  { value: 6, suffix: "", label: "core services unified into one premium acquisition story" },
  { value: 2, suffix: "x", label: "languages prepared for RU and EN growth journeys" },
  { value: 90, suffix: "+", label: "target Lighthouse quality across performance and SEO" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toString());

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, { duration: 1.6, ease: [0.16, 1, 0.3, 1] });
    return controls.stop;
  }, [count, inView, value]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export function MetricsSection() {
  return (
    <section id="results" className="relative overflow-hidden bg-[#050509] px-4 py-28 text-white">
      <div className="absolute bottom-0 left-1/2 h-80 w-[44rem] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        className="relative mx-auto max-w-7xl"
      >
        <motion.h2
          variants={fadeUp}
          className="max-w-4xl text-balance font-radio text-5xl font-black tracking-[-0.06em] sm:text-7xl"
        >
          Built for the numbers clients actually care about.
        </motion.h2>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <motion.div
              key={metric.label}
              variants={fadeUp}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6"
            >
              <p className="font-radio text-5xl font-black tracking-[-0.06em]">
                <Counter value={metric.value} suffix={metric.suffix} />
              </p>
              <p className="mt-6 text-sm leading-6 text-white/78">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

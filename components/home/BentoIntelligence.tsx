"use client";

import { motion } from "framer-motion";
import { Activity, Bot, Gauge, Layers3 } from "lucide-react";
import { fadeUp, scaleReveal, staggerContainer } from "@/lib/animations/motion";

const bento = [
  {
    icon: Layers3,
    title: "Strategy-first websites",
    body: "Landing pages, corporate sites and commerce flows are shaped around demand, positioning and measurable lead quality.",
    className: "md:col-span-2",
  },
  {
    icon: Gauge,
    title: "Performance by default",
    body: "Fast interfaces, App Router architecture and motion that supports attention instead of stealing it.",
    className: "",
  },
  {
    icon: Activity,
    title: "SEO + paid loops",
    body: "Organic search, Google Ads and analytics work as one acquisition system.",
    className: "",
  },
  {
    icon: Bot,
    title: "Automation-ready",
    body: "Lead capture, Telegram routing, CRM logic and dashboards are designed to scale past manual operations.",
    className: "md:col-span-2",
  },
];

export function BentoIntelligence() {
  return (
    <section id="work" className="relative overflow-hidden bg-[#050509] px-4 py-28 text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        className="mx-auto max-w-7xl"
      >
        <motion.div variants={fadeUp} className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
            The new operating layer
          </p>
          <h2 className="mt-5 text-balance font-radio text-5xl font-black tracking-[-0.06em] sm:text-7xl">
            A studio website should behave like a product.
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {bento.map((item) => (
            <motion.article
              key={item.title}
              variants={scaleReveal}
              whileHover={{ y: -8 }}
              className={`group relative min-h-72 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-[0_30px_100px_rgba(0,0,0,0.28)] ${item.className}`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(139,92,246,0.25),transparent_36%)] opacity-0 transition duration-500 group-hover:opacity-100" />
              <item.icon className="relative h-6 w-6 text-violet-200" />
              <h3 className="relative mt-16 max-w-md text-2xl font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="relative mt-4 max-w-xl leading-7 text-white/56">
                {item.body}
              </p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

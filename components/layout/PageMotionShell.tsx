"use client";

import dynamic from "next/dynamic";

const GsapHomeAnimations = dynamic(
  () => import("@/components/home/GsapHomeAnimations").then((mod) => mod.GsapHomeAnimations),
  { ssr: false },
);
const SmoothScroll = dynamic(
  () => import("@/components/home/SmoothScroll").then((mod) => mod.SmoothScroll),
  { ssr: false },
);

type PageMotionShellProps = {
  children: React.ReactNode;
  className?: string;
};

export function PageMotionShell({ children, className = "" }: PageMotionShellProps) {
  return (
    <div
      className={`min-h-screen overflow-hidden bg-[#f7f4ed] text-black dark:bg-[#07080b] dark:text-white ${className}`.trim()}
    >
      <SmoothScroll />
      <GsapHomeAnimations />
      {children}
    </div>
  );
}

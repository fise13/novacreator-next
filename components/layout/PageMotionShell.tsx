"use client";

import { GsapHomeAnimations } from "@/components/home/GsapHomeAnimations";
import { SmoothScroll } from "@/components/home/SmoothScroll";

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

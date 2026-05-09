"use client";

import { AnimatePresence, motion, type Transition } from "framer-motion";
import { useId, useMemo, useState, type KeyboardEvent, type ReactNode } from "react";

export type PremiumTabItem = {
  value: string;
  label: string;
  eyebrow?: string;
  description?: string;
  content: ReactNode;
};

type PremiumTabsProps = {
  items: PremiumTabItem[];
  defaultValue?: string;
  ariaLabel?: string;
  className?: string;
};

const springTransition: Transition = {
  type: "spring",
  stiffness: 420,
  damping: 36,
  mass: 0.8,
};

const contentTransition: Transition = {
  type: "spring",
  stiffness: 360,
  damping: 34,
  mass: 0.7,
};

export function PremiumTabs({
  items,
  defaultValue,
  ariaLabel = "Content tabs",
  className = "",
}: PremiumTabsProps) {
  const generatedId = useId();
  const initialValue = defaultValue ?? items[0]?.value;
  const [activeValue, setActiveValue] = useState(initialValue);
  const activeIndex = Math.max(
    0,
    items.findIndex((item) => item.value === activeValue),
  );
  const activeItem = items[activeIndex];
  const namespace = useMemo(
    () => generatedId.replace(/:/g, ""),
    [generatedId],
  );

  if (!activeItem) {
    return null;
  }

  const focusTab = (index: number) => {
    const nextItem = items[index];

    if (!nextItem) {
      return;
    }

    setActiveValue(nextItem.value);
    window.requestAnimationFrame(() => {
      document.getElementById(`${namespace}-tab-${nextItem.value}`)?.focus();
    });
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      focusTab((activeIndex + 1) % items.length);
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      focusTab((activeIndex - 1 + items.length) % items.length);
    }

    if (event.key === "Home") {
      event.preventDefault();
      focusTab(0);
    }

    if (event.key === "End") {
      event.preventDefault();
      focusTab(items.length - 1);
    }
  };

  return (
    <div className={`w-full ${className}`}>
      <div
        role="tablist"
        aria-label={ariaLabel}
        onKeyDown={handleKeyDown}
        className="flex w-full gap-1 overflow-x-auto rounded-full border border-black/10 bg-white/70 p-1 shadow-[0_18px_60px_rgba(0,0,0,0.06)] backdrop-blur-xl scrollbar-none dark:border-white/10 dark:bg-[#171a22] dark:shadow-[0_22px_80px_rgba(0,0,0,0.32)] sm:inline-flex sm:w-auto"
      >
        {items.map((item) => {
          const isActive = activeValue === item.value;

          return (
            <button
              key={item.value}
              id={`${namespace}-tab-${item.value}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`${namespace}-panel-${item.value}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveValue(item.value)}
              className={`relative min-h-11 shrink-0 overflow-hidden rounded-full px-4 py-2.5 text-left text-sm font-bold tracking-[-0.02em] outline-none transition-colors duration-200 focus-visible:ring-4 focus-visible:ring-[#ff5a45]/20 sm:px-5 ${
                isActive
                  ? "text-white dark:text-black"
                  : "text-black/60 hover:text-black dark:text-white/90 dark:hover:text-white"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId={`${namespace}-premium-tabs-pill`}
                  className="absolute inset-0 rounded-full bg-black shadow-[0_10px_30px_rgba(0,0,0,0.14)] dark:bg-white dark:shadow-[0_12px_36px_rgba(255,255,255,0.08)]"
                  transition={springTransition}
                />
              )}
              <motion.span
                className="relative z-10 block"
                animate={{ y: isActive ? 0 : 1 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              >
                {item.label}
              </motion.span>
            </button>
          );
        })}
      </div>

      <motion.div
        layout
        transition={springTransition}
        className="mt-5 overflow-hidden rounded-[1.6rem] border border-black/10 bg-white/80 shadow-[0_24px_90px_rgba(0,0,0,0.07)] backdrop-blur-xl dark:border-white/10 dark:bg-[#11141b] dark:shadow-[0_24px_100px_rgba(0,0,0,0.38)] sm:mt-6 sm:rounded-[2rem]"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeItem.value}
            id={`${namespace}-panel-${activeItem.value}`}
            role="tabpanel"
            aria-labelledby={`${namespace}-tab-${activeItem.value}`}
            tabIndex={0}
            layout
            initial={{ opacity: 0, y: 8, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -8, filter: "blur(6px)" }}
            transition={contentTransition}
            className="outline-none"
          >
            {activeItem.content}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

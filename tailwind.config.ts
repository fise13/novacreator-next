import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  safelist: ["font-radio", "font-serif", "font-geist"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "var(--color-bg)",
          lighter: "var(--color-bg-lighter)",
        },
        surface: {
          DEFAULT: "var(--color-surface)",
          lighter: "var(--color-surface-lighter)",
          hover: "#1A1A24",
        },
        border: {
          DEFAULT: "var(--color-border)",
          lighter: "var(--color-border-lighter)",
          hover: "#3A3A50",
        },
        text: {
          DEFAULT: "var(--color-text)",
          secondary: "var(--color-text-secondary)",
        },
        neon: {
          purple: {
            DEFAULT: "#8B5CF6",
            light: "#A78BFA",
            dark: "#6D28D9",
            darker: "#5B21B6",
          },
          blue: {
            DEFAULT: "#06B6D4",
            light: "#22D3EE",
            dark: "#0891B2",
            darker: "#0E7490",
          },
        },
        semantic: {
          success: "#10B981",
          error: "#EF4444",
          warning: "#F59E0B",
          info: "#3B82F6",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-sans)", "system-ui", "sans-serif"],
        radio: ["var(--font-radio)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
        geist: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        "neon-purple":
          "0 0 20px rgba(139,92,246,0.5), 0 0 40px rgba(139,92,246,0.3)",
        "neon-blue":
          "0 0 20px rgba(6,182,212,0.5), 0 0 40px rgba(6,182,212,0.3)",
        "neon-purple-lg":
          "0 0 30px rgba(139,92,246,0.4), 0 0 60px rgba(139,92,246,0.2)",
        "neon-blue-lg":
          "0 0 30px rgba(6,182,212,0.4), 0 0 60px rgba(6,182,212,0.2)",
      },
      animation: {
        "fade-in": "fadeIn 0.4s cubic-bezier(0.4,0,0.2,1)",
        "slide-up": "slideUp 0.4s cubic-bezier(0.4,0,0.2,1)",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(139,92,246,0.35)" },
          "50%": { boxShadow: "0 0 38px rgba(6,182,212,0.45)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

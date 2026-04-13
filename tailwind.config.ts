import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // "Warm Precision" Brand Palette
        sand: "#F7F5F0",       // Base / Background (60%)
        slate: "#2F4858",      // Text / Structural Anchor (30%)
        terra: "#DE6B48",      // Primary Brand / CTA (10%)
        ochre: "#EAB24A",      // Accent / Secondary (10%)
        // Utility shades
        "sand-dark": "#ECEAE3",
        "slate-light": "#4A6580",
        "slate-muted": "#8FA3B0",
        "terra-dark": "#C55A38",
        "terra-light": "#F08060",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Syne", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "float-mid": "float 6s ease-in-out 1s infinite",
        "float-fast": "float 5s ease-in-out 2s infinite",
        "slide-up": "slideUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        marquee: "marquee 28s linear infinite",
        "spin-slow": "spin 12s linear infinite",
        pulse: "pulse 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-12px) rotate(1deg)" },
          "66%": { transform: "translateY(-6px) rotate(-1deg)" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(40px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      boxShadow: {
        "card": "0 4px 24px rgba(47,72,88,0.08), 0 1px 4px rgba(47,72,88,0.04)",
        "card-hover": "0 12px 40px rgba(47,72,88,0.14), 0 2px 8px rgba(47,72,88,0.06)",
        "terra": "0 8px 32px rgba(222,107,72,0.3)",
        "phone": "0 32px 80px rgba(47,72,88,0.2), 0 8px 24px rgba(47,72,88,0.12)",
      },
    },
  },
  plugins: [],
};

export default config;

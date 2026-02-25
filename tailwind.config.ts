import type { Config } from "tailwindcss";

export default {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--bg) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        "surface-2": "rgb(var(--surface-2) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",
        text: "rgb(var(--text) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        "muted-2": "rgb(var(--muted-2) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        "accent-2": "rgb(var(--accent-2) / <alpha-value>)",
        "accent-3": "rgb(var(--accent-3) / <alpha-value>)",
        "accent-4": "rgb(var(--accent-4) / <alpha-value>)",
        "accent-5": "rgb(var(--accent-5) / <alpha-value>)",
      },
      borderRadius: {
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },
      boxShadow: {
        card: "var(--shadow)",
        modal: "var(--shadow-2)",
        glow: "0 0 0 1px rgba(var(--glow), .22), 0 10px 30px rgba(var(--glow), .12)",
        "glow-strong":
          "0 0 0 1px rgba(var(--glow), .28), 0 18px 55px rgba(var(--glow), .18)",
      },
      backgroundImage: {
        "gradient-sunset":
          "radial-gradient(80% 80% at 30% 20%, rgba(var(--accent), .42) 0%, rgba(var(--accent-2), .3) 32%, rgba(var(--accent-4), .26) 58%, rgba(var(--accent-3), .22) 72%, transparent 82%)",
        "gradient-edge":
          "linear-gradient(90deg, rgba(var(--accent), .75), rgba(var(--accent-3), .6), rgba(var(--accent-4), .55), rgba(var(--accent-5), .5))",
      },
      animation: {
        drift: "drift 10s ease-in-out infinite",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(10px,-12px,0) scale(1.03)" },
        },
      },
      maxWidth: {
        container: "var(--container)",
      },
    },
  },
  plugins: [],
} satisfies Config;

import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Brand colors - these can be easily changed to rebrand the entire site
        brand: {
          // Primary brand color (forest green)
          primary: {
            50: "#f0fdf4",
            100: "#dcfce7",
            200: "#bbf7d0",
            300: "#86efac", // light forest green
            400: "#4ade80", // medium forest green
            500: "#16a34a", // main forest green brand color
            600: "#15803d", // darker forest green
            700: "#166534", // deep forest green
            800: "#14532d", // very dark forest green
            900: "#14532d",
            950: "#052e16",
          },
          // Secondary brand color (sage/mint green)
          secondary: {
            50: "#f0fdf9",
            100: "#ccfbf1",
            200: "#99f6e4",
            300: "#5eead4", // light sage green
            400: "#2dd4bf", // medium sage green
            500: "#14b8a6", // main sage green
            600: "#0d9488",
            700: "#0f766e",
            800: "#115e59",
            900: "#134e4a",
            950: "#042f2e",
          },
          // Accent colors
          accent: {
            emerald: {
              300: "#6ee7b7",
              400: "#34d399", // emerald accent
              500: "#10b981",
            },
            teal: {
              300: "#5eead4",
              400: "#2dd4bf", // teal accent
              500: "#14b8a6",
            },
            lime: {
              300: "#bef264",
              400: "#a3e635", // lime accent
              500: "#84cc16",
            },
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

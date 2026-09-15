import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: "#460080",
        mint: "#5fdc9b",
        ink: "#17131f",
        muted: "#6e6876",
        line: "#e8e4ec",
        white: "#f2fcf7",
        black: "#06000a",
        gray: "#746d78",
      },
      borderRadius: { site: "28px" },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "sans-serif"],
        display: ["var(--font-manrope)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        bebas: ["var(--font-bebas)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

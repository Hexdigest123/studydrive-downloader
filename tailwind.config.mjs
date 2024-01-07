/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "#020203",
        primary: "#0E1015",
        second: "#22232B",
        accent: "#213BF9",
        primary_text: "#FFFFFF",
        secondary_text: "rgba(255,255,255,0.6)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

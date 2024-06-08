const { config } = require("@charcoal-ui/tailwind-config");

/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  darkMode: false,
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [config],
};

import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
/** @type {import('tailwindcss').Config} */
export default defineConfig({
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],

  theme: {
    extend: {},
  },

  plugins: [],

  vite: {
    plugins: [tailwindcss()],
  },
});
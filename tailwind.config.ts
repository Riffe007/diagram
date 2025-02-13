import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class', // Enable dark mode via a class on the root element
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Add your customizations here
    },
  },
  plugins: [],
};

export default config;

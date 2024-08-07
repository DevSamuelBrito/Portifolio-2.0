import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "custom-color": "0px 0px 20px rgba(0, 0, 255, 0.75)",
      },
      backgroundImage:{
        'custom-gradient': 'linear-gradient(to bottom, #0d1224, #1d1537)',
      }
    },
  },
  plugins: [],
};

export default config;

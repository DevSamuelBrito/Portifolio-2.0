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
      keyframes: {
        'gradient-animation': {
          '0%': { backgroundPosition: '100% 0' },
          '100%': { backgroundPosition: '0 0' },
        },
      },
      animation: {
        'gradient-once': 'gradient-animation 3s linear forwards',
      },
      backgroundSize: {
        '300%': '300%',
      },
      backgroundImage: {
        'gradient-text': 'linear-gradient(90deg, #1e3a8a, #3b82f6, #60a5fa, #3b82f6, #1e3a8a)',
      },
    },
  },
  plugins: [],
};

export default config;

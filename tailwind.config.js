// tailwind.config.js (v4.0)
import tailwindcss from 'tailwindcss';

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    tailwindcss({
      theme: {
        extend: {
          colors: {
            primary: '#6366f1',
            secondary: '#8b5cf6',
          },
        },
      },
    }),
  ],
};

// tailwind.config.js (Next.js 14)
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Priorize a pasta app/
    "./app/pages/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',
        secondary: '#8b5cf6',
      },
    },
  },
  plugins: [],
};
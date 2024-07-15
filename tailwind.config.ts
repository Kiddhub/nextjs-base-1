import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        main: '1320px',
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        main: '1440px',
      },
      backgroundColor:{
        'primary': 'rgba(255, 255, 255, 1)',
        'green': 'rgba(10, 191, 172, 1)',
        'secondary': 'rgba(247, 247, 247, 1)',
      },
      colors:{
        'primary': 'rgba(255, 255, 255, 1)',
        'grey-300':'rgba(161, 171, 178, 1)',
        'grey-400':'rgba(82, 97, 107, 1)',
        'blue-300': 'rgba(1, 87, 155, 1)',
        'dark-500': 'rgba(44, 47, 51, 1)'
      },

      fontFamily: {
        inter: ['var(--font-inter)'],
        unbounded: ['var(--font-unbounded)'],
        roboto: ['var(--font-roboto)'],
        poppins: ['var(--font-poppins)'],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
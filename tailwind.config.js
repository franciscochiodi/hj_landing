/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores existentes
        "azul-profundo": "#0F2F45", // RGB 15,47,69 (exact match)
        "azul-grisaceo": "#3A657B", // RGB 58,101,123 (exact match)
        "gris-claro": "#D2D2D2",
        "terracota": "#C57156", // RGB 197,113,86 (exact match)
        "white": "#FFFFFF",
        
        // Nuevos colores para About Us
        "primary-dark": "#0F2F45", // Mismo que azul-profundo
        "primary-darker": "#050C14",
        "action-blue": "#4F7DFF",
      },
      fontFamily: {
        sans: ["Helvetica Neue", "Arial", "sans-serif"],
        // Agregamos Monument para los títulos
        "monument": ['"Monument Extended"', "Helvetica Neue", "Arial", "sans-serif"],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        bold: 700,
        heavy: 800,
      },
      borderRadius: {
        default: "0.375rem", // Matching the clean, rounded buttons from guidelines
      },
      boxShadow: {
        'button': '0 2px 6px rgba(0,0,0,.4)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.15)',
      },
      animation: {
        'ticker': 'ticker 25s linear infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"), // Optional for better typography control
  ],
};

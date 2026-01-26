/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
    },
    extend: {
      colors: {
        border: "rgba(0, 0, 0, 0.1)",
        input: "transparent",
        ring: "oklch(0.708 0 0)",
        background: "#ffffff",
        foreground: "oklch(0.145 0 0)",
        primary: {
          DEFAULT: "#030213",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "oklch(0.95 0.0058 264.53)",
          foreground: "#030213",
        },
        destructive: {
          DEFAULT: "#d4183d",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#ececf0",
          foreground: "#717182",
        },
        accent: {
          DEFAULT: "#e9ebef",
          foreground: "#030213",
        },
        popover: {
          DEFAULT: "oklch(1 0 0)",
          foreground: "oklch(0.145 0 0)",
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "oklch(0.145 0 0)",
        },
      },
      borderRadius: {
        lg: "0.625rem",
        md: "calc(0.625rem - 2px)",
        sm: "calc(0.625rem - 4px)",
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
}

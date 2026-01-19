/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#020314",
        surface: "#0b0f2a",
        accent: "#7c3aed",
        "text-primary": "#f8fafc",
        "text-muted": "#cbd5f5"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "float-slow": {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
          "100%": { transform: "translateY(0px)" }
        }
      },
      animation: {
        "fade-up": "fade-up 0.8s ease-out forwards",
        "float-slow": "float-slow 10s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

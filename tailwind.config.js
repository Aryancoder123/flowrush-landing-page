module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        secondary: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "bounce-slow": "bounce-slow 3s infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 12s ease-in-out infinite",
        "spin-slow": "spin-slow 8s linear infinite",
        marquee: "marquee 30s linear infinite",
        "marquee-fast": "marquee-fast 10s linear infinite",
        "slide-left": "slide-left 20s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-10px) rotate(2deg)" },
          "66%": { transform: "translateY(-5px) rotate(-1deg)" },
        },
        "float-slow": {
          "0%, 100%": {
            transform: "translateY(0px) translateX(0px) rotate(0deg)",
          },
          "25%": {
            transform: "translateY(-15px) translateX(5px) rotate(1deg)",
          },
          "50%": {
            transform: "translateY(-8px) translateX(-3px) rotate(-0.5deg)",
          },
          "75%": {
            transform: "translateY(-12px) translateX(8px) rotate(1.5deg)",
          },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "bounce-slow": {
          "0%, 100%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(-25%)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-33.333%)" },
        },
        "marquee-fast": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-33.333%)" },
        },
        "slide-left": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

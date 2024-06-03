/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        card: "0px 0px 4px 3px rgba(255, 255, 255, 0.3)",
      },
      colors: {
        "blue-night": "rgb(13, 13, 61)",
      },
      transitionDuration: {
        2000: "2000ms",
      },
      backgroundImage: {
        snowflake: "url('./snow-pattern.webp')"
      },
      keyframes: {
        falling: {
          '0%': { "background-position": "0% 0%" },
          '100%': { "background-position": "0% 83%" },
        }
      },
      animation: {
        falling: "falling 15s linear infinite"
      }

    },
  },
  plugins: [],
};

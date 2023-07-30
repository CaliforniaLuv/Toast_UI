/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%": { opacity: "1" },
          "50%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        twinkle: "wiggle 1.5s infinite",
      },
    },
    colors: {
      "text-color": {
        primary: "#111111",
        secondary: "#888888",
        disabled: "#AEAEAE",
      },
      "border-color": {
        dividers: "#CFCFCF",
      },
      "main-color": {
        primary: "#4B77E6",
        secondary: "#9CBDF4",
        sub: "#DEE7FB",
      },
      general: {
        white: "#FFFFFF",
        red: "#D7260D",
        blue: "#0066FF",
        yellow: "#F1E83C",
        lightGray: "#F5F5F5",
        successLight: "#F0FAEE",
        lightRed: "#ef6253",
        lightGreen: "#41b979",
      },
    },

    fontSize: {
      mainTitle: "2.75rem", // 44px
      subTitle: "2rem", // 32px
      subValue: "1.5rem", //24px
      listTitle: "1.25rem", // 20px
      listFirst: "1.125rem", // 18px
      listSecond: "1rem", // 16px
      default: "0.875rem", // 14px
      footer: "0.8125rem", // 13px
      smallExplanation: "0.75rem", // 12px
    },
    screens: {
      "2xl": "1536px",
      xl: "1280px",
      lg: "1025px",
      md: "769px",
      sm: "480px",
      xs: "321px",
    },
  },
  plugins: [],
};

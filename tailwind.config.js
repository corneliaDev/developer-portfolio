/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      tablet: "48.01rem", // 768px = md = min width
      desktop: "90.01rem", // 1440px
    },
    fontFamily: {
      spaceGrotesk: ["Space Grotesk", "san-serif"],
    },
    fontSize: {
      h1: [
        "5.5rem",
        {
          lineHeight: 1,
          letterSpacing: "-0.15625rem",
          fontWeight: "700",
        },
      ],
      h1Tablet: [
        "4.5rem",
        {
          lineHeight: 1,
          letterSpacing: "-0.128125rem",
          fontWeight: "700",
        },
      ],
      h1Mobile: [
        "2.5rem",
        {
          lineHeight: 1,
          letterSpacing: "-0.07125rem",
          fontWeight: "700",
        },
      ],
      h2: [
        "3rem",
        {
          lineHeight: "3.5rem",
          letterSpacing: "-0.09375rem",
          fontWeight: "700",
        },
      ],
      h2Mobile: [
        "2rem",
        {
          lineHeight: "2.5rem",
          letterSpacing: "-0.0625rem",
          fontWeight: "700",
        },
      ],
      h3: [
        "1.5rem",
        {
          lineHeight: "2rem",
          letterSpacing: "-0.018125rem",
          fontWeight: "700",
        },
      ],
      body: [
        "1.125rem",
        {
          lineHeight: "1.75rem",
          fontWeight: "400",
        },
      ],
      bodyMobil: [
        "1rem",
        {
          lineHeight: "1.625rem",
          fontWeight: "400",
        },
      ],
      small: [
        "1rem",
        {
          lineHeight: "1.625rem",
          letterSpacing: "0.143125rem",
          fontWeight: "500",
        },
      ],
      logoName: [
        "2rem",
        {
          lineHeight: 1,
          letterSpacing: "-0.0275rem",
          fontWeight: "700",
        },
      ],
      logoNameMobil: [
        "1.5rem",
        {
          lineHeight: "2rem",
          letterSpacing: "-0.020625rem",
          fontWeight: "700",
        },
      ],

      contactForm: [
        "1rem",
        {
          lineHeight: "1.625rem",
          letterSpacing: "-0.01375rem",
          fontWeight: "500",
        },
      ],
    },
    extend: {
      colors: {
        primBlack: "#151515",
        primDGreen: "#0891b2",
        darkGray: "#242424",
        lightGray: "#D9D9D9",
        textLightWhite: "#FFFFFF",
        errRed: "#FF6F5B",
      },
    },
  },
  plugins: [],
};

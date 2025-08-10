/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // or 'media' for OS preference
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      tablet: "48rem", // 768px = md = min width
      desktop: "90rem", // 1440px
    },
    extend: {
      fontFamily: {
        space: ['"Space Grotesk"', "sans-serif"],
      },
    },
    fontSize: {
      "heading-xl": [
        "clamp(2.5rem, 6vw, 5.5rem)", // ~40px to 88px
        {
          lineHeight: 1,
          letterSpacing: "-0.15625rem",
          fontWeight: "700",
        },
      ],
      "heading-lg": [
        "clamp(1.8rem, 4vw, 2.5rem)", // ~28.8px to 40px
        {
          lineHeight: "3.5rem",
          letterSpacing: "-0.09375rem",
          fontWeight: "700",
        },
      ],
      "heading-md": [
        "clamp(1.25rem, 2.5vw, 1.5rem)", // ~20px to 24px
        {
          lineHeight: "2rem",
          letterSpacing: "-0.018125rem",
          fontWeight: "700",
        },
      ],
      body: [
        "clamp(1rem, 1.5vw, 1.125rem)", // ~16px to 18px
        {
          lineHeight: "1.75rem",
          fontWeight: "400",
        },
      ],
      small: [
        "clamp(0.875rem, 1.2vw, 1rem)", // ~14px to 16px
        {
          lineHeight: "1.625rem",
          letterSpacing: "0.143125rem",
          fontWeight: "500",
        },
      ],
      "logo-name": [
        "clamp(1.5rem, 3vw, 2rem)", // ~24px to 32px
        {
          lineHeight: 1,
          letterSpacing: "-0.0275rem",
          fontWeight: "700",
        },
      ],
      "contact-form": [
        "clamp(0.95rem, 1.2vw, 1rem)", // ~15.2px to 16px
        {
          lineHeight: "1.625rem",
          letterSpacing: "-0.01375rem",
          fontWeight: "500",
        },
      ],
    },
    extend: {
      colors: {
        black: "#151515",
        primary: "#0BBDEA", // 0891b2
        dark: "#242424",
        light: "#D9D9D9",
        error: "#FF5252", //FF6F5B
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        35: "8.75rem", // from desktop:mt-[8.75rem]
        39: "2.4375rem", // name it meaningfully if reused
        66: "16.5rem", // e.g. desktop:bottom-[16.5rem]
        72: "18rem",
      },
    },
  },
  plugins: [],
};

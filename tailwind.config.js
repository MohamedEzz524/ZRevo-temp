/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // screens: {
    //   sm: "576px",
    //   md: "768px",
    //   lg: "992px",
    //   xl: "1200px",
    //   "2xl": "1400px",
    // },
    extend: {
      fontFamily: {
        Poppins: ["var(--font-body)"],
        Roboto: ["var(--font-header)"],
      },
      colors: {
        btnPrimary: "var(--btn-primary)",
        btnSecondary: "var(--btn-secondary)",
        navBg: "var(--bg-nav)",
        bgPrimary: "var(--bg-primary)",
        bgSecondary: "var(--bg-secondary)",
        textPrimary: "var(--text-primary)",
        textSecondary: "var(--text-secondary)",
        textBody: "var(--text-body)",
        textTitle: "var(--text-title)",
        textCompany: "var(--text-company)",
        borderPrimary: "var(--border-primary)",
        borderBg: "var(--border-bg)",
      },
      backgroundImage: { textGrad: "var(--text-grad)" },
      animation: {
        fadeOutMsg: "fadeOut 1s ease-out 2s",
        fadeBottom: "fadeBottom 0.5s ease-out",
      },
      backgroundColor: {
        navTrans: "rgba(0,0,0,0.8)",
      },
      fontSize: {
        sizeTitle: "var(--title-text)",
        sizeSubtitle: "var(--subtitle-text)",
        sizeBody: "var(--body-text)",
      },
    },
  },
  plugins: [],
};

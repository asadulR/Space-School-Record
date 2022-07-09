module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#2CA4D8",
          "secondary": "#FFBF3F",
          "accent": "#242424",
          "neutral": "#F3F4F6",
          "base-100": "#FFFFFF",
          "success": "#2CBF6E",
          "warning": "#F24643",
        },
      }
    ],
  },
  plugins: [require("daisyui")],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: {
      light: {
        ...require("daisyui/src/theming/themes")["light"],
        "text-color": "black",
      },
      dark: {
        ...require("daisyui/src/theming/themes")["dark"],
        "color": "#fff",
      },
    },
  },
};

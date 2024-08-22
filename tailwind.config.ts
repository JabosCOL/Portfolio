import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mh: {
          raw : "(max-height: 740px)"
        }
      },
      colors: {
        primary: "#0b2021",
        secondary: "#529471",
      },
      spacing: {
        header: "150px",
        nav: "90px"
      },
      backgroundImage: {
        "gradientGreen": "linear-gradient(to bottom, rgb(11, 32, 33), rgb(14, 16, 19))"
      }
    },
  },
  plugins: [],
};
export default config;

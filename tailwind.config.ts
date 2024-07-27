import daisyui from "daisyui";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0088de",

          secondary: "#0000ff",

          accent: "#009aff",

          neutral: "#120e11",

          "base-100": "#fffdfa",

          info: "#0090ff",

          success: "#00da89",

          warning: "#ff8800",

          error: "#ff6e94",
        },
      },
    ],
  },
};
export default config;

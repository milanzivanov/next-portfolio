/** @type {import('tailwindcss').Config} */
export const content = [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}"
];
export const theme = {
  extend: {
    keyframes: {
      rotate: {
        to: { transform: "rotate(1turn)" }
      }
    },
    animation: {
      rotate: "rotate 1.5s linear infinite"
    }
  }
};
export const plugins = [];

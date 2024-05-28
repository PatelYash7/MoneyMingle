/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors:{
          blueMain:"#7132f5",
          bgMain:"#f6f5f9"
        }
      },
    },
    plugins: [],
  };
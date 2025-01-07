/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        sm: "40px",
        lg: "80px",
        xl: "150px",
        "2xl": "250px",
      },
    },
    extend: {
      colors:{
         MyBlue:"#0c73fe",
      }
    },
  },
  plugins: [],
};

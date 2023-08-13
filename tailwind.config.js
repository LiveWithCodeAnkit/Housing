/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      colors: {
        gray:{
          400:"#7C8893"
        },
        blue:{
          400:"#0061E0"
        }
       
      },
      fontFamily: {
        "roboto": "Roboto",
        "inter" : "Inter"
      
       },
     
    },
  },
  plugins: [],
};

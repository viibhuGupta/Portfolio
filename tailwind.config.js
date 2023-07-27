/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],

  theme: {
    extend: {
      
        colors:{
          dark: "#1b1b1b",
          light: "#f5f5f5",
          primary: "#B63E96", // 240,86,199
          primaryDark: "#58E6D9", // 80,230,217
        
      },
      
      fontFamily:{
        sans: ['var(--font-mont)']
      },

      animation:{
        'spin-slow': 'spin 8s linear infinite',
      }
      
    },
  },
  
}


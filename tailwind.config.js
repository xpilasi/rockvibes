/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'rift-bold': ['rift-bold', 'sans-serif'],
        'rift-bold-italic': ['rift-bold-italic', 'sans-serif'],
        'rift-demi': ['rift-demi', 'sans-serif'],
        'rift-demi-italic': ['rift-demi-italic', 'sans-serif'],
        'rift-italic': ['rift-italic', 'sans-serif'],
        'rift-light': ['rift-light', 'sans-serif'],
        'rift-light-italic': ['rift-light-italic', 'sans-serif'],
        'rift-light-medium': ['rift-light-medium', 'sans-serif'],
        'rift-medium': ['rift-medium', 'sans-serif'],
        'rift-medium-italic': ['rift-medium-italic', 'sans-serif'],
        'rift-regular': ['rift-regular', 'sans-serif'],
        
        'soleil-bold': ['soleil-bold', 'sans-serif'],
        'soleil-book': ['soleil-book', 'sans-serif'],
        'soleil-light': ['soleil-light', 'sans-serif'],
        'soleil-regular': ['soleil-regular', 'sans-serif'],
      },
      colors: {
        'pink-500': '#FF469D',
        background: "var(--background)",
        foreground: "var(--foreground)",
        mainGray: '#2D2D2D',
        CustomGray: '#EEEEEE',
        CustomPink: '#E5427B',
        CustomDarkPink:'#B32A5A'
      },
      backgroundImage:{
        'woman-climber-rocks-bn': "url('/assets/img/fondos/fondo-rocas-bn.jpg')",
        'pink-ropes': "url('/assets/img/fondos/ropes-pink.jpg')",
        'rocks-sunset': "url('/assets/img/fondos/rocks-sunset.jpg')",
      },
      backgroundColor:{
        bgCustomGray: '#EEEEEE',
        bgCustomPink: '#E5427B',
        bgCustomDarkPink:'#B32A5A',
      },
      textColor: {
        'textBigTitleGraphite':'#2D2D2D',
        'textBigTitlePink': '#E5427B',
        'textMainText':'#4C4C4C '
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    backgroundImage:theme =>({
      
      'woman-climber-rocks-bn': "url('/assets/img/fondos/fondo-rocas-bn.jpg')",
     

    }),
   
    
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        mainGray: '#2D2D2D',
        CustomGray: '#EEEEEE',
        CustomPink: '#E5427B',
        CustomDarkPink:'#B32A5A'
        
      },

      // backgroundImage:{
        
      //   'woman-climber-rocks-bn': "url('/assets/img/fondos/fondo-rocas-bn.jpg')",
      // },

      backgroundColor:{

        bgCustomGray: '#EEEEEE',
        bgCustomPink: '#E5427B',
        bgCustomDarkPink:'#B32A5A',
        
      },

     
      textColor:
        {
          'textBigTitleGraphite':'#2D2D2D',
          'textBigTitlePink': '#E5427B',
          'textMainText':'#4C4C4C '

        }
      ,
      fontFamily:
        {
          riftBold:'rift-bold',
          riftBoldItalic:'rift-bold-italic',
          riftDemiItalic:'rift-demi-italic',
          riftDemi:'rift-demi',
          rifttalic:'rift-italic',
          riftLightItalic:'rift-light-italic',
          riftLight:'rift-light',
          riftLightMedium:'rift-light-medium',
          riftMedium:'rift-medium',
          riftMediumItalic:'rift-medium-italic',
          riftRegular:'rift-regular',

          soleilBold:'soleil-bold',
          soleilBook:'soleil-book',
          soleilLight:'soleil-light',
          soleilRegular:'soleil-regular',
        }
      
    },
  },
  plugins: [],
};

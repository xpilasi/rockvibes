/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      backgroundColor:{

        'bgCustomGray': '#EEEEEE',
        'bgCustomPink': '#E5427B',
        'bgCustomDarkPink':'#B32A5A'
      }
        
      ,
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

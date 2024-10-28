import defaultTheme from 'tailwindcss/defaultTheme';
import tailwindAnimate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '369px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    
    extend: {
      fontFamily: {
        specialFont: ['Nunito Sans', ...defaultTheme.fontFamily.serif],
        primaryFont: ['Inter', ...defaultTheme.fontFamily.sans],
        secondaryFont: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primaryForeground: '#323234', //jet to dark grey
        secondaryForeground: 'white', 
        primaryBackground: '#502613', 
        secondaryBackground: '#FDE8E9',
        
        hoverForeground: '#DD5B2C', //flame
        activeForeground: '#ec663e', //to pale orange
        accent: '#ec663e', //to pale orange
      }
    },
  },
  plugins: [],
}


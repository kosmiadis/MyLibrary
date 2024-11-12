import { nextui } from '@nextui-org/react';
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
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
        pageContentBackground: '#D9E5FA',

        hoverForeground: '#7A94E8', //flame
        activeForeground: '#5E7CE2', //to pale orange
        /**accent: '#5E7CE2', //to pale orange*/
        accent: '#7A94E8',
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}


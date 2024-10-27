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
        activeForeground: '#1A2A36', //gunmetal (to dark blue with grey)
        primaryForeground: '#2C3E50', //charcoal (to dark blue)
        secondaryForeground: '#3C4A57', //charcoal (to grey)
        primaryBackground: '#191308', //alice blue
        secondaryBackground: '#C8D6E5', //columbian blue
        accent: '#8395A7', //cadet-grey for buttons, highlights...etc.
      }
    },
  },
  plugins: [
    tailwindAnimate,
  ],
}


/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    // "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // theme: {
  //   extend: {},
  // },
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
        // mono: ['var(--font-roboto-mono)'],
      },
      colors: {
        dark: '#1b1b1b',
        light: '#f5f5f5',
        primary: '#B63E96', // 240,86,199
        primaryDark: '#58E6D9', // 80,230,217
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        blink: 'blink 1s step-start infinite',
      },
      // backgroundImage: {
      //   circularLight:
      //     ' repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px, #f5f5f5 100px);',
      // },
      backgroundImage: {
        circularLight:
          'repeating-radial-gradient(ellipse 130% 100% at center, rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 100px);',
        circularDark:
          'repeating-radial-gradient(ellipse 130% 100% at center, rgba(255,255,255,0.5) 2px, #1b1b1b 8px, #1b1b1b 100px);',
        circularLightLg:
          'repeating-radial-gradient(ellipse 130% 100% at center, rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 100px);',
        circularDarkLg:
          'repeating-radial-gradient(ellipse 130% 100% at center, rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 100px);',

        circularLightMd:
          'repeating-radial-gradient(ellipse 130% 100% at center,rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 60px)',

        circularDarkMd:
          'repeating-radial-gradient(ellipse 130% 100% at center,rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 60px)',

        circularLightSm:
          'repeating-radial-gradient(ellipse 130% 100% at center,rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 40px)',

        circularDarkSm:
          'repeating-radial-gradient(ellipse 130% 100% at center,rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 40px)',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      // animation: {
      //   blink: 'blink 1s step-start infinite',
      // },
    },

    screens: {
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }

      xs: { max: '479px' },
      // => @media (max-width: 479px) { ... }
    },
  },
  plugins: [],
};

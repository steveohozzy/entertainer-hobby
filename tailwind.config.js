/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"Fredoka", sans-serif'],
    },
    fontWeight: {
      'bold': '600',
      'semibold': '500'
    },
    extend: {
      colors: {
        brandBlue: "#0D5D9C",
        brandLightBlue: "#DBE3FF",
        brandVLightBlue: "#deeeee",
        brandNeonBlue: "#00BBDC",
        textBlue: "#407EC9",
        brandRed: "#EE3224",
        brandLightRed: "#FF4B4B",
        brandGreen: "#009E44",
        brandLightGreen: "#C4D600",
        brandMediumGreen: "#AFCB17",
        brandBeige: "#C4D600",
        brandPink: "#FF7BAC",
        brandPinkDark: "#EF426F",
        eee: "#eeeeee",
      },
      animation: {
        'bigheart': 'bigheart 0.6s ease-in-out',
        'miniheartleft': 'miniheartleft 0.8s ease-in-out',
        'miniheartright': 'miniheartright 0.8s ease-in-out',
        'wave': 'wave 0.8s 5 ease-in-out',
        'fadeIn' : 'fadeIn 0.3s ease-out',
        'borderGradient' : 'borderGradient 0.5s ease-in-out forwards'
      },
      keyframes: {
        bigheart: {
          '0%, 100%': {
            transform: 'rotate(0deg) translateY(0) translateX(0)',
          },
          '50%': {
            transform: 'rotate(-20deg) translateY(-7px) translateX(4px) scale(1.1)',
          }
        },
        miniheartleft: {
          '0%, 100%': {
            transform: 'rotate(-10deg) translateY(0) translateX(8px)',
            opacity: '0'
          },
          '50%': {
            transform: 'rotate(-30deg) translateY(-20px) translateX(4px) scale(1.2)',
            opacity: '0.6'
          },
          '75%': {
            opacity: '0'
          }
        },
        miniheartright: {
          '0%, 100%': {
            transform: 'rotate(15deg) translateY(0) translateX(-8px)',
            opacity: '0'
          },
          '50%': {
            transform: 'rotate(20deg) translateY(-20px) translateX(0) scale(1.2)',
            opacity: '0.6'
          },
          '70%': {
            opacity: '0'
          }
        },
        wave: {
          '0%, 100%': {
            transform: 'rotate(10deg) translateX(2px) translateY(-3px)',
          },
          '50%': {
            transform: 'rotate(-40deg)',
          }
        },
        fadeIn: {
          'from': { 
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        borderGradient: {
          'to': {
            transform: 'rotate(180deg)',
          }
         },
      },
    },
  },
  plugins: [
    plugin(({ addVariant, e }) => {
      addVariant("label-checked", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          const eClassName = e(`label-checked${separator}${className}`); // escape class
          const yourSelector = 'input[type="radio"]'; // your input selector. Could be any
          return `${yourSelector}:checked ~ .${eClassName}`; // ~ - CSS selector for siblings
        });
      });
    }),
  ],
};

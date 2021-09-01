const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ['./src/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}', './src/**/**/*.{js,jsx,ts,tsx}'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          lightest: "#F5FDFF",
          light: '#00bdf6',
          DEFAULT: '#003d60',
          cc: "#002663",
          dark: '#272f3e',
          fb: '#3b5998',
        },
        gray: {
          light: '#f5f5f5',
          DEFAULT: '#cccccc',
          dark: '#333333',
        },
        red: {
          goog: '#ea4335'
        }
      },
      fontFamily: ["Poppins", ...defaultTheme.fontFamily.sans],
      spacing: {
        '100': '25rem',
        '120': '30rem',
        '140': '35rem',
        '160': '40rem',
        '200': "50rem",
        '240': "60rem",
        'full-minus-panel': "calc(100% - 42rem)"
      },
      maxWidth: {
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '40': '10rem'
      },
      fontSize: {
        '0': '0rem'
      },
      height: {
        "1.9vh": 'calc(190vh)'
      },
      rotate: {
        '9.5': '9.5deg'
      },
      height: {
        "1.9vh": 'calc(190vh)'
      },
      transitionProperty: {
        'size': 'height, width'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

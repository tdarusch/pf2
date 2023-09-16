/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ['Inter', 'system-ui', 'sans-serif'],
      body: ['Inter', 'system-ui', 'sans-serif'],
    },
    colors: {
      primary: {
        50: '#4d6c99',
        100: '#446088',
        200: '#3c5477',
        300: '#334866',
        400: '#2b3c55',
        500: '#27374D',
        600: '#223044',
        700: '#1a2433',
        800: '#111822',
        900: '#090c11'
      },
      secondary: {
        50: '#91a8ba',
        100: '#829cb0',
        200: '#7290a7',
        300: '#62839d',
        400: '#58768d',
        500: '#526D82',
        600: '#4f697d',
        700: '#455c6e',
        800: '#3b4f5e',
        900: '#31424e'
      },
      tertiary: {
        50: '#e0e7eb',
        100: '#d1dbe1',
        200: '#c1ced7',
        300: '#b2c2cd',
        400: '#a2b6c3',
        500: '#9DB2BF',
        600: '#93aab8',
        700: '#849eae',
        800: '#7492a4',
        900: '#65869a'
      },
      quarternary: {
        300: '#ffffff',
        400: '#eef3f6',
        500: '#DDE6ED',
        600: '#cddae5',
        700: '#bccedc',
        800: '#abc2d3',
        900: '#9bb6ca'
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        black: 'var(--black)',
        white: 'var(--white)',
        darkGray: 'var(--darkGray)',
        gray: 'var(--gray)',
        extraLightGreen: 'var(--extraLightGreen)',
        lightGreen: 'var(--lightGreen)',
        darkGreen: 'var(--darkGreen)',
        greenPormade: 'var(--greenPormade)',
        lightBlue: 'var(--lightBlue)',
        darkBlue: 'var(--darkBlue)',
        red: 'var(--red)',
        lightOrange: 'var(--lightOrange)',
        orange: 'var(--orange)',
        yellow: 'var(--yellow)',
        backgroundLight: 'var(--backgroundLight)',
        backgroundDark: 'var(--backgroundDark)',
        borderGray: 'var(--borderGray)',
        borderGreen: 'var(--borderGreen)',
        borderInput: 'var(--borderInput)',
        fontGray: 'var(--fontGray)',
        cardLight: 'var(--cardLight)',
        cardBackgroundDark: 'var(--cardBackgroundDark)',
        grayImageilustrative: 'var(--grayImageilustrative)',
        grayGradient: 'var(--grayGradient)',
        placeholderDark: 'var(--placeholderDark)',
        navbar: 'var(--navbar)',
      }
    },
  },
  plugins: [],
}

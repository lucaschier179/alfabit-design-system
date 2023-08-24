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
        example: 'var(--example)',
        greenPormade: 'var(--greenPormade)',
        darkGreen: 'var(--darkGreen)',
        extraLightGreen: 'var(--extraLightGreen)',
        lightGreen: 'var(--lightGreen)',
        white: 'var(--white)',
        fontGray: 'var(--fontGray)',
        orange: 'var(--orange)',
        yellow: 'var(--yellow)',
        red: 'var(--red)',
        black: 'var(--black)',
        navbar: 'var(--navbar)',
        borderGray: 'var(--borderGray)',
        borderGreen: 'var(--borderGreen)',
        grayImageillustrative: 'var(--grayImageillustrative)',
        placeholderDark: 'var(--placeholderDark)',
        grayGradient: 'var(--grayGradient)',
        cardLight: 'var(--cardLight)',
        backgroundDark: 'var(--backgroundDark)',
        backgroundLight: 'var(--backgroundLight)',
        cardBackgroundDark: 'var(--cardBackgroundDark)',
        borderInput: 'var(--borderInput)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      primary: '#F3F2EC',
      secondary: '#232323',
      tertiary: '#C0C0C0',
      tertiaryAlpha: '#C0C0C050',
      quaternary: '#74642F',
      quintenary: '#EDEBE4',
      sextenary: '#7A7A7A',
      septenary: '#EFEEE8',
      septenaryStroke: '#EAE8DF',
      octonary: '#E0E0E0'
    },
    fontFamily: {
      cormorant_unicase: ['Cormorant Unicase'],
      plus_jakarta_sans: ['Plus Jakarta Sans'],
      prata: ['Prata']
    }
  },
  plugins: []
}

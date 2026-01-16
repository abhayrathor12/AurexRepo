/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Aurex Ventures theme
        aurex: {
          primary: '#223258', // 30%
          accent: '#a8042b', // 10%
          background: '#ffffff', // 60%
          // supporting tones
          primarySoft: '#2c3c66',
          primaryLight: '#3a4a74',
          accentSoft: '#c12640',
          accentLight: '#f0d0d5',
        },
      },
    },
  },
  plugins: [],
};

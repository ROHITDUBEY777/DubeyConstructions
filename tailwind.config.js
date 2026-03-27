/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#011E41',
        secondary: '#F89B29',
        light: '#F8FAFC',
        dark: '#0F172A',
        muted: '#64748B',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1.5rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1200px',
        },
      },
      boxShadow: {
        'glow': '0 0 15px rgba(248, 155, 41, 0.4)',
      }
    },
  },
  plugins: [],
}

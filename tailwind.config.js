/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        murmin: {
          cream: '#fbf7f4',
          blush: '#f3e3e8',
          rose: '#e8b9c5',
          mauve: '#c89bb2',
          plum: '#8a6a86',
          ink: '#4a3f54',
          mist: '#e6e0ec',
          sky: '#cdd8ec',
          sage: '#cfe0d4',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        border: 'hsl(var(--border))',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'murmin-gradient': 'linear-gradient(135deg, #fbf7f4 0%, #f3e3e8 40%, #e6e0ec 100%)',
        'murmin-hero': 'linear-gradient(160deg, #f3e3e8 0%, #e6e0ec 50%, #cdd8ec 100%)',
      },
      boxShadow: {
        soft: '0 10px 40px -10px rgba(138, 106, 134, 0.25)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
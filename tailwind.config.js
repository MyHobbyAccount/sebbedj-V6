/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon': {
          pink: '#ff0080',
          purple: '#bc13fe',
          blue: '#0000ff',
        },
        'party': {
          dark: '#000000',
          light: '#ffffff',
          accent: '#7928ca',
        },
      },
      fontFamily: {
        'sans': ['Poppins', 'system-ui', 'sans-serif'],
        'display': ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-party': 'linear-gradient(45deg, #ff0080, #7928ca, #ff0080)',
        'gradient-dark': 'linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.95))',
      },
      boxShadow: {
        'neon': '0 0 30px rgba(188, 19, 254, 0.3)',
        'glow': '0 0 20px rgba(255, 0, 128, 0.5)',
      },
    },
  },
  plugins: [],
}
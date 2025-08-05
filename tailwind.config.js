/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'hacker-bg': '#0A0A0A',
        'hacker-surface': '#1A1A1A',
        'hacker-green': '#00FFAB',
        'hacker-red': '#FF0055',
        'hacker-cyan': '#00FFFF',
        'hacker-gray': '#333333',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'neon-green': '0 0 20px rgba(0, 255, 171, 0.3)',
        'neon-red': '0 0 20px rgba(255, 0, 85, 0.3)',
        'neon-cyan': '0 0 20px rgba(0, 255, 255, 0.3)',
      },
    },
  },
  plugins: [],
};

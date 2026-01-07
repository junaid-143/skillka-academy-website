import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // Sophisticated dark chess academy palette
        primary: '#10b981',   // Emerald green
        secondary: '#06b6d4', // Teal
        accent: '#f59e0b',    // Amber
        support: '#0f172a',   // Dark navy
        background: '#ffffff', // white
        dark: '#000000' // black
      }
    }
  },
  plugins: []
};

export default config;

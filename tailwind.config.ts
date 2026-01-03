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
        // Exact brand palette (only these four + neutrals)
        primary: '#F4F754',   // Yellow
        secondary: '#E9D484', // Soft yellow
        accent: '#CFADC1',    // Mauve
        support: '#4E61D3',   // Periwinkle
        background: '#ffffff', // white
        dark: '#000000' // black
      }
    }
  },
  plugins: []
};

export default config;

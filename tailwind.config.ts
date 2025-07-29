import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#262626',
        fireorange: '#ff4500',
        emberred: '#cc2d2d',
        softwhite: '#f5f5f5',
      },
    },
  },
  plugins: [],
};

export default config;
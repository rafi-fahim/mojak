import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "theme-1": "#363062",
        "theme-2": "#435585",
        "theme-3": "#818FB4",
        "theme-4": "#F5E8C7",
      },
      fontFamily: {
        "cabin-sketch" : "'Cabin Sketch', sans-serif",
        "delius" : "'Delius Unicase', cursive",
        "kdam-pro" : "'Kdam Thmor Pro', sans-serif",
        "road-rage" : "'Road Rage', sans-serif",
        "rubik" : "Rubik, 'sans-serif'"
      },
      backgroundImage: {
        'home-page' : '../public/images/home-bg.png'
      }
    },
  },
  plugins: [],
}
export default config

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
        "theme-1": "#7071E8",
        "theme-2": "#C683D7",
        "theme-3": "#ED9ED6",
        "theme-4": "#FFC7C7",
      },
      fontFamily: {
        "cabin-sketch" : "'Cabin Sketch', sans-serif",
        "delius" : "'Delius Unicase', cursive",
        "kdam-pro" : "'Kdam Thmor Pro', sans-serif",
        "road-rage" : "'Road Rage', sans-serif"
      },
      backgroundImage: {
        'home-page' : '../public/images/home-bg.png'
      }
    },
  },
  plugins: [],
}
export default config

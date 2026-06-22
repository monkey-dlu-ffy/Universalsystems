/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#0F4C81',
          secondary: '#2D6EA3',
          accent: '#F97316',
          surface: '#FFFFFF',
          background: '#F8FAFC',
          text: '#111827',
          muted: '#6B7280',
          border: '#E5E7EB',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Assuming you import Inter in app.css
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        corporate: {
          "primary": "#0F4C81",
          "secondary": "#2D6EA3",
          "accent": "#F97316",
          "neutral": "#111827",
          "base-100": "#F8FAFC",
        },
      },
    ],
  },
}
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#123A5A',
          secondary: '#00A8E8',
          accent: '#F97316',
          surface: '#FFFFFF',
          background: '#F5F7FA',
          text: '#111827',
          muted: '#64748B',
          border: '#D8E0EA',
          success: '#16A34A',
          warning: '#F59E0B',
          error: '#DC2626',
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        corporate: {
          "primary": "#123A5A",
          "secondary": "#00A8E8",
          "accent": "#F97316",
          "neutral": "#111827",
          "base-100": "#F5F7FA",
          "success": "#16A34A",
          "warning": "#F59E0B",
          "error": "#DC2626",
        },
      },
    ],
  },
}
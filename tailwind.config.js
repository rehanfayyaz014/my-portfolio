/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        glass: {
          dark: 'rgba(13, 27, 42, 0.8)',
          light: 'rgba(255, 255, 255, 0.1)',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #20c997 0%, #6366f1 100%)',
        'gradient-accent': 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)',
      },
      backdropBlur: {
        sm: '4px',
        md: '10px',
        lg: '16px',
      },
      boxShadow: {
        glow: '0 0 20px rgba(32, 201, 151, 0.3)',
        'glow-blue': '0 0 20px rgba(99, 102, 241, 0.3)',
      },
    },
  },
  plugins: [],
}

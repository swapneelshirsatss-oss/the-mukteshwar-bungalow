/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        himalayan: {
          50: '#fbf4f5',
          100: '#f6e7e9',
          200: '#edd1d5',
          300: '#dfb0b7',
          400: '#ca838d',
          500: '#b15a67',
          600: '#963f4e',
          700: '#7B1E2D', // PRIMARY BRAND RED
          800: '#671c28',
          900: '#581b25',
          950: '#310a11',
        },
        charcoal: {
          50: '#f4f6f7',
          100: '#e5e9ec',
          200: '#cbd4d9',
          300: '#a4b4bd',
          400: '#778e9c',
          500: '#58707e',
          600: '#465965',
          700: '#3b4a54',
          800: '#343f47',
          900: '#1F2A2E', // SECONDARY BRAND CHARCOAL
          950: '#131c20',
        },
        ivory: {
          50: '#faf8f5',
          100: '#F2EDE1', // SUPPORTING BRAND WARM IVORY
          200: '#eae0cc',
          300: '#dfceb1',
          400: '#cdb28c',
          500: '#bd9a6e',
          600: '#af8558',
          700: '#926a47',
          800: '#77573d',
          900: '#614734',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        'widest-plus': '0.25em',
        'super-wide': '0.35em',
      },
      boxShadow: {
        'subtle': '0 2px 8px -2px rgba(31, 42, 46, 0.05)',
        'editorial': '0 10px 30px -10px rgba(31, 42, 46, 0.08), 0 4px 10px -4px rgba(31, 42, 46, 0.04)',
        'luxury': '0 20px 40px -15px rgba(31, 42, 46, 0.12), 0 0 1px 1px rgba(31, 42, 46, 0.05)',
        'himalayan': '0 10px 25px -5px rgba(123, 30, 45, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.92', transform: 'scale(1.03)' },
        }
      }
    },
  },
  plugins: [],
}

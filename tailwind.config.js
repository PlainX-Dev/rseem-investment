/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Premium color palette
        rseem: {
          dark: '#0F1419',
          navy: '#1a2a4a',
          teal: '#1B5E5C',
          emerald: '#0D7C66',
          gold: '#D4AF6E',
          light: '#F8FAFB',
          gray: '#6B7280',
          border: '#E5E7EB',
        },
        luxury: {
          950: '#04060D',
          900: '#070A12',
          800: '#101725',
          700: '#141F31',
          600: '#1D2940',
          500: '#24344E',
          gold: '#D3B26C',
          emerald: '#00A98E',
          cyan: '#22B7FF',
          silver: '#D6DFEC',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'SF Pro Display', 'Clash Display', 'Inter', 'sans-serif'],
        body: ['var(--font-body)', 'Inter', 'SF Pro Text', 'Plus Jakarta Sans', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'counter': 'counter 2s ease-out forwards',
        'float-slow': 'floatSlow 10s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2.8s ease-in-out infinite',
        'border-shift': 'borderShift 5s linear infinite',
        'shine-sweep': 'shineSweep 1.5s ease forwards',
        'drift-y': 'driftY 7s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        slideInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(40px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-40px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        counter: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.95)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        floatSlow: {
          '0%, 100%': {
            transform: 'translateY(0px) rotate(0deg)',
          },
          '50%': {
            transform: 'translateY(-14px) rotate(3deg)',
          },
        },
        pulseSoft: {
          '0%, 100%': {
            opacity: '0.55',
          },
          '50%': {
            opacity: '1',
          },
        },
        borderShift: {
          '0%': {
            backgroundPosition: '0% 50%',
          },
          '100%': {
            backgroundPosition: '200% 50%',
          },
        },
        shineSweep: {
          '0%': {
            transform: 'translateX(-140%) skewX(-16deg)',
            opacity: '0',
          },
          '35%': {
            opacity: '0.8',
          },
          '100%': {
            transform: 'translateX(260%) skewX(-16deg)',
            opacity: '0',
          },
        },
        driftY: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-18px)',
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
  // Support for RTL with logical properties
  future: {
    respectDefaultRingColorOpacity: true,
  },
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'fox': {
          DEFAULT: '#FF6B35',
          50: '#FFF4F0',
          100: '#FFE9E1',
          200: '#FFD3C2',
          300: '#FFB8A3',
          400: '#FF9269',
          500: '#FF6B35', // Main brand color - warmer, more sophisticated
          600: '#FF4A0D',
          700: '#D63A00',
          800: '#A32C00',
          900: '#701E00',
          950: '#3D1000'
        },
        'matrix': {
          DEFAULT: '#1A1F2C',
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#1A1F2C', // Deeper, more sophisticated blue-black
          950: '#0F1219'
        },
        'modern': {
          DEFAULT: '#F7F8F9',
          50: '#FFFFFF',
          100: '#F7F8F9',
          200: '#E8EAED',
          300: '#D9DCE0',
          400: '#BCC1C7',
          500: '#9FA5AE',
          600: '#828995',
          700: '#666D78',
          800: '#4A505A',
          900: '#2E323C',
          950: '#1F2228'
        },
        'neon': {
          DEFAULT: '#35D0FF',
          50: '#F0FBFF',
          100: '#E1F7FF',
          200: '#C2EFFF',
          300: '#A3E7FF',
          400: '#69D9FF',
          500: '#35D0FF', // Sophisticated cyan
          600: '#0DC2FF',
          700: '#00A3D6',
          800: '#007CA3',
          900: '#005670',
          950: '#002E3D'
        },
        'accent': {
          DEFAULT: '#8B5CF6',
          50: '#F5F3FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#8B5CF6', // Elegant purple
          600: '#7C3AED',
          700: '#6D28D9',
          800: '#5B21B6',
          900: '#4C1D95',
          950: '#2E1065'
        }
      },
      fontFamily: {
        'space': ['Space Grotesk Variable', 'system-ui', 'sans-serif'],
        'geist': ['Geist Sans', 'system-ui', 'sans-serif']
      },
      animation: {
        'gradient': 'gradient 8s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'dash': 'dash 3s ease-out forwards infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        dash: {
          to: {
            'stroke-dashoffset': '0',
          },
        },
        glow: {
          'from': {
            'box-shadow': '0 0 20px theme(colors.neon.500 / 15%)',
          },
          'to': {
            'box-shadow': '0 0 40px theme(colors.neon.500 / 30%)',
          }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
        'mesh-pattern': 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v20h2v2H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20z\' fill=\'%23F7F8F9\' fill-opacity=\'0.03\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")'
      }
    },
  },
  plugins: [],
}
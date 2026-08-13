/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Design tokens — see design handoff. `ink` is the primary text
        // colour; opacity variants are expressed with Tailwind's /[.NN] modifier
        // (e.g. text-ink/[.62], border-ink/[.09], bg-ink/[.025]).
        bg: '#0b0a12',
        'bg-deep': '#08070d',
        ink: '#eceaf3',
        violet: '#5013e3',
        magenta: '#e518ff',
        lilac: '#cfa6ff',
        periwinkle: '#c4b0ff',
        'pink-badge': '#e9a8ff',
        'signal-green': '#86c58a',
      },
      fontFamily: {
        sans: ['var(--font-public-sans)', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['var(--font-ibm-plex-mono)', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        // Signature brand gradient (violet → magenta) and its reverse.
        brand: 'linear-gradient(96deg, #5013e3, #e518ff)',
        'brand-rev': 'linear-gradient(96deg, #e518ff, #5013e3)',
      },
      boxShadow: {
        'sb-card': '0 8px 26px rgba(80,19,227,.22)',
        'nw-card': '0 8px 26px rgba(229,24,255,.14)',
        'dot-halo': '0 0 0 4px rgba(229,24,255,.18)',
      },
      keyframes: {
        kzDrift: {
          '0%, 100%': { opacity: '.75' },
          '50%': { opacity: '1' },
        },
        sbFlow: {
          '0%': { transform: 'translateY(0)', opacity: '0' },
          '14%': { opacity: '1' },
          '86%': { opacity: '1' },
          '100%': { transform: 'translateY(40px)', opacity: '0' },
        },
        sbOut: {
          '0%': { transform: 'translateY(0)', opacity: '0' },
          '18%': { opacity: '1' },
          '82%': { opacity: '1' },
          '100%': { transform: 'translateY(28px)', opacity: '0' },
        },
        nwFlow: {
          '0%': { transform: 'translateY(0)', opacity: '0' },
          '16%': { opacity: '1' },
          '84%': { opacity: '1' },
          '100%': { transform: 'translateY(30px)', opacity: '0' },
        },
        nwIn: {
          '0%, 4%': { opacity: '.2', transform: 'translateY(5px)' },
          '14%, 74%': { opacity: '1', transform: 'none' },
          '100%': { opacity: '.2', transform: 'translateY(5px)' },
        },
      },
      animation: {
        kzDrift: 'kzDrift 9s ease-in-out infinite',
        sbFlow: 'sbFlow 2.6s linear infinite',
        sbOut: 'sbOut 2.6s linear infinite',
        nwFlow: 'nwFlow 2.6s linear infinite',
        nwIn: 'nwIn 7.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

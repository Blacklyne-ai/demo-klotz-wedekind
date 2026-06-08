/** @type {import('tailwindcss').Config} */
// Mr. Wash Hamburg Wandsbek - Orange-Rot + Gelb + warmes Cream.
// Source of truth: CSS Custom Properties in src/styles/global.css :root.
// Brand-Werte 1:1 pixel-extrahiert aus offiziellem Mr. Wash Logo (480x200 PNG).
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: 'rgb(var(--rgb-paper) / <alpha-value>)',
          50:  'rgb(var(--rgb-paper-50) / <alpha-value>)',
          100: 'rgb(var(--rgb-paper-100) / <alpha-value>)',
          200: 'rgb(var(--rgb-paper-200) / <alpha-value>)',
        },
        ink: {
          DEFAULT: 'rgb(var(--rgb-ink) / <alpha-value>)',
          soft:    'rgb(var(--rgb-ink-soft) / <alpha-value>)',
          700:     'rgb(var(--rgb-ink-700) / <alpha-value>)',
          muted:   'rgb(var(--rgb-muted) / <alpha-value>)',
          light:   'rgb(var(--rgb-muted-light) / <alpha-value>)',
        },
        brand: {
          DEFAULT: 'rgb(var(--rgb-brand) / <alpha-value>)',
          deep:    'rgb(var(--rgb-brand-deep) / <alpha-value>)',
          soft:    'rgb(var(--rgb-brand-soft) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'rgb(var(--rgb-accent) / <alpha-value>)',
          deep:    'rgb(var(--rgb-accent-deep) / <alpha-value>)',
        },
        anthracite: {
          DEFAULT: 'rgb(var(--rgb-anthracite) / <alpha-value>)',
          deep:    'rgb(var(--rgb-anthracite-deep) / <alpha-value>)',
          soft:    'rgb(var(--rgb-anthracite-soft) / <alpha-value>)',
        },
        line: 'rgb(var(--rgb-line) / <alpha-value>)',
        'line-dark': 'rgb(var(--rgb-line-dark) / <alpha-value>)',
      },
      fontFamily: {
        sans:     ['Manrope Variable', 'Manrope', '-apple-system', 'BlinkMacSystemFont', 'Helvetica Neue', 'Arial', 'sans-serif'],
        headline: ['Manrope Variable', 'Manrope', '-apple-system', 'BlinkMacSystemFont', 'Helvetica Neue', 'sans-serif'],
        display:  ['Manrope Variable', 'Manrope', '-apple-system', 'BlinkMacSystemFont', 'Helvetica Neue', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
      borderRadius: {
        pill: '999px',
      },
    },
  },
  plugins: [],
};

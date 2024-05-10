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
        bgPrimary: 'var(--bg-primary)',
        bgSecondary: 'var(--bg-secondary)',
        bgTertiary: 'var(--bg-tertiary)',
        bgCuaternary: 'var(--bg-cuaternary)',
        primary: 'var(--primary)',
        accent: 'var(--accent)',
        accentDarker: 'var(--accent-darker)',
        muted: 'var(--muted)',
      },
      screens: {
        '4xl': '2560px',
      },
    },
  },
  plugins: [],
}

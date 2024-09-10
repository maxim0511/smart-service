import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}', '!src/**/*.test.{ts,tsx}', './index.html'],
  theme: {
    screens: {
      desktop: '768px',
      tablet: '990px',
      main: '1440px',
    },
    colors: {
      transparent: 'transparent',
      currentColor: 'currentColor',
      white: 'rgb(var(--white))',
      black: 'rgb(var(--black))',
      gray: 'rgb(var(--gray))',
    },
    extend: {
      height: {
        small: '10px',
      },
      minHeight: {
        content: '100vh',
      },
      width: {
        small: '10px',
      },
      margin: {
        'extra-small': '5px',
        small: '10px',
        base: '15px',
        medium: '25px',
        large: '30px',
      },
      padding: {
        'extra-small': '5px',
        small: '10px',
        base: '15px',
        medium: '25px',
        large: '30px',
      },
      gap: {
        'extra-small': '5px',
        small: '10px',
        base: '15px',
        medium: '25px',
        large: '30px',
      },
      borderRadius: {
        base: '10px',
        large: '20px',
      },
      cursor: {
        inherit: 'inherit',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
export default config

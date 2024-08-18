import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#687641',
        secondary: '#FFE27D',
        softWhite: '#F3F4EC',
        creamy: '#BFC2AD',
        textBlack: '#1E1E1E',
        textGray: '#454545',
        textSoftWhite: '#EEEEEE',
        textWhite: '#FFFFFF'
      },
      fontSize: {
        tiny: '12px',
        small: '14.5px',
        xs: '16px',
        sm: '18px',
        base: '20px',
        g: '24px',
        xl: '26px',
        xl2: '28px',
        xl3: '42px',
        super: '64px'
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        bold: '600'
      },
      screens: {
        xsm: '320px', // Custom extra-small screen
        sm: '480px', // Custom small screen
        md: '768px', // Custom medium screen
        lg: '1024px', // Custom large screen
        xl: '1200px', // Custom extra-large screen
        xl2: '1400px'
      },
      boxShadow: {
        common: '0px 4px 4px 0px rgba(0, 0, 0, 0.25);'
      }
    }
  },
  plugins: []
}
export default config

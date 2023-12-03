import { nextui } from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            primary: {
              DEFAULT: "#7d5a50",
            },
            secondary: {
              DEFAULT: "#2f221e",
            },
            tertiary: {
              DEFAULT: "#000",
            },
            background: {
              DEFAULT: "#000",
            },
            keyword: {
              DEFAULT: "#fff"
            }
          },
        },
        light: {
          colors: {
            primary: {
              DEFAULT: "#7d5a50",
            },
            secondary: {
              DEFAULT: "#ba9b93",
            },
            tertiary: {
              DEFAULT: "#ebe3e1",
            },
            background: {
              DEFAULT: "#fff",
            },
            keyword: {
              DEFAULT: "#000"
            }
          },
        },
      },
    }),
  ],
};

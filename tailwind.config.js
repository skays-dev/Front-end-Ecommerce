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
  plugins: [nextui({
    prefix: "nextui",
    addCommonColors: false,
    defaultTheme: "light",
    defaultExtendTheme: "light",
    layout: {},
    themes: {
      light: {
        layout: {
          // Update with your dark theme layout tokens
          // Example:
          backgroundColor: '#1a1a1a',
          textColor: '#ffffff',
          // ... other layout tokens
        },
        colors: {
          // Update with your dark theme colors
          // Example:
          primary: '#3498db',      // Change to your primary color
          secondary: '#e74c3c',    // Change to your secondary color
          // ... other color tokens
        },
      },
      dark: {
        layout: {
          // Update with your dark theme layout tokens
          // Example:
          backgroundColor: '#1a1a1a',
          textColor: '#ffffff',
          // ... other layout tokens
        },
        colors: {
          // Update with your dark theme colors
          // Example:
          primary: '#3498db',      // Change to your primary color
          secondary: '#e74c3c',    // Change to your secondary color
          // ... other color tokens
        },
      },
    },
  }),
  ],
}

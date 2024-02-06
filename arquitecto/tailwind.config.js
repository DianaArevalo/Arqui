/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        animate: {
          '0%,10%,100%': {
            width: '100%'
          },
          '70%,80%,90%': {
            width: '100%'
          },
        }

      },
      animation: {
        animate: 'animate 6s linear infinite',
      },
      colors: {
        gray: {
          default: "#D5DAE1"
        },
        green: {
          default: "#96ae59"
        },
        greenL: {
          default: "#e3ffb3"
        },
        blue: {
          default: "#669966"
        },
        orange: {
          default: "#f69100"
        },
        corbeau: {
          default: "#0c1c22ff"
        }
      },
      fontFamily: {
        // normal
        primary: 'Open Sans',
        // anuncios especiales
        secondary: 'Mooli',
        // titulos
        tertiary: 'sans-serif',
      },
    },
    container: {
      center: true

    },

    plugins: [],
  },
}

// font-family: 'Aldrich', sans-serif;
// font-family: 'Fontdiner Swanky', serif;
// font-family: 'Montserrat Alternates', sans-serif;
// font-family: 'Mooli', sans-serif;
// font-family: 'Open Sans', sans-serif
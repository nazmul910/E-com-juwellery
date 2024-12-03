/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**",
    "*",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily:{
        unna:['Unna'],
      },
      animation:{
        "loop-scroll":"loop-scroll 20s linear infinite",
      },
      keyframes:{
        "loop-scroll":{
          from:{transform:"translateX(0)"},
          to:{transform:"translateX(-100%)"},
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}


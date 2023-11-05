/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        "main" : {
            "light" : "#e6e9ec",
            "light-hover" : "#d9dde2",
            "light-active" : "#b0bac3",
            "normal" : "#001f3e",
            "normal-hover" : "#001c38",
            "normal-active" : "#001932",
            "dark" : "#00172f",
            "dark-hover" : "#001325",
            "dark-active" : "#000e1c",
            "darker" : "#000b16",
        },
        "secondary" : {
            "light" : "#effbff",
            "light-hover" : "#e7f9fe",
            "light-active" : "#cef4fe",
            "normal" : "#61dafb",
            "normal-hover" : "#57c4e2",
            "normal-active" : "#4eaec9",
            "dark" : "#49a4bc",
            "dark-hover" : "#3a8397",
            "dark-active" : "#2c6271",
            "darker" : "#224c58",
        },
        "tertiary" :{
            "light" : "#fefdec",
            "light-hover" : "#fdfce2",
            "light-active" : "#fbf9c3",
            "normal" : "#f1ed3d",
            "normal-hover" : "#d9d537",
            "normal-active" : "#c1be31",
            "dark" : "#b5b22e",
            "dark-hover" : "#918e25",
            "dark-active" : "#6c6b1b",
            "darker" : "#545315",
        }
      },
    },
  },
  plugins: [],
}
 
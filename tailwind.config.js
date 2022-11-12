/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: '#0FCFEC',
          secondary: '#19D3AE',
          accent: "#3A4256",
          neutral: "#191D24",
          "base-100": "#fff",
        }
      }
    ]
  },
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('/src/assets/images/bg.png')",
        'appoinment': "url('/src/assets/images/appointment.png')"
      }
    },
  },
  plugins: [require("daisyui")],
}

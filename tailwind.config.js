/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-insight":
          "linear-gradient(101.86deg, rgba(91, 83, 249, 0.6) -1.51%, rgba(172, 113, 214, 0.6) 39.1%, rgba(255, 142, 87, 0.6) 100%)",
        "custom-image": "url('./src/assets/waves.png')",
        "custom-gradient":
          "linear-gradient(93.05deg, #FF66C4 5.8%, rgba(242, 74, 177, 0) 98.1%)",
        "custom-gradient-hero":
          "linear-gradient(102.26deg, #5B53F9 -13.11%, #AC71D6 36.24%, #FF8E57 110.26%)",
        "custom-p-gradient":
          "linear-gradient(103.47deg, #5B53F9 22.39%, #AC71D6 46.68%, #FF8E57 83.1%);",
      },
      backgroundColor: {
        "darket-purple": "#1C0C26",
        "dark-purple": "#5B53F9",
      },
    },
  },
  plugins: [],
};

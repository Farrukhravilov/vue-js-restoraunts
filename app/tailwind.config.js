// tailwind.config.js
module.exports = {
  content: [
    "./index.html", // главный HTML файл
    "./src/app/**/*.{vue,js,ts}", // все vue и js файлы в папке app
    "../components/**/*.{vue,js,ts}",
    "./src/views/**/*.{vue,js,}",
    "./src/**/*.{html,js,vue}",
    // все vue и js файлы в папке components
  ],
  mode: 'jit',
  theme: {
    extend: {
      screens: {
        "max-1600": { max: "1600px" },
        "max-1365": { max: "1365px" },
        "max-1165": { max: "1165px" },
        "max-1100": { max: "1100px" },
        "max-830": { max: "830px" },
        "max-780": { max: "780px" },
        "max-630": { max: "630px" },
        "max-520": { max: "520px" },
        "max-460": { max: "460px" },
        "max-370": { max: "370px" },
        "max-380": { max: "380px" },
        "max-480": { max: "480px" },
      },
    },
  },
  variants: {
    extend: {
      textColor: ["hover"],
    },
  },
  plugins: [],
};

import autoprefixer from "autoprefixer";

export default {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [autoprefixer],
};

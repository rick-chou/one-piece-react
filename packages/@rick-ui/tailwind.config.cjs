module.exports = {
  ...require('../@rick-css').tailwindcss,
  content: [
    './index.html',
    './components/**/*.{js,ts,jsx,tsx}',
    './docs/**/*.{js,ts,jsx,tsx}',
  ],
};

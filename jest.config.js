// eslint-disable-next-line no-undef

module.exports = {
  // ...другие настройки Jest...
  moduleNameMapper: {
    "\\.(png|jpg|jpeg|gif|svg)$": "<rootDir>/empty-module.js",
  },

  testEnvironment: "jsdom",
};

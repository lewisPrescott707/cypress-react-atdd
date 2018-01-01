module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "plugins": [
    "cypress",
  ],
  "env": {
    "cypress/globals": true,
    "jest": true,
  },
  "rules": {
    "no-use-before-define": 0,
    "react/jsx-filename-extension": 0,
    "react/prop-types": 0,
  }
};

module.exports = {
  root: true,
  env: {
    es2022: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "eslint-config-google",
  ],
  rules: {
    "quotes": ["error", "double"],
    "linebreak-style": 0,
    "max-len": 0,
  },
};

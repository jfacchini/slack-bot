module.exports = {
  env: {
    es2021: true,
    "jest/globals": true,
  },
  extends: ["standard", "prettier", "prettier/@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "jest"],
  rules: {},
};
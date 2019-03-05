module.exports = {
  root: true,
  env: {
    node: true,
    es6: true
  },
  parser: "vue-eslint-parser",
  plugins: ["gridsome"],
  rules: {
    "gridsome/format-query-block": "error",
  },
};

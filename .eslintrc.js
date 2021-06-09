const RULES = {
  OFF: "off",
  WARN: "warn",
  ERROR: "error",
};

module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "babel"],
  rules: {
    "no-invalid-this": 0,
    "babel/no-invalid-this": 1,
    "react/prop-types": RULES.OFF,
    "react/react-in-jsx-scope": RULES.OFF,
    "import/prefer-default-export": RULES.OFF,
    "import/no-unresolved": RULES.OFF,
    "arrow-body-style": RULES.OFF,
    "react/jsx-wrap-multilines": RULES.OFF,
    "no-unused-expressions": RULES.OFF,
    "jsx-a11y/no-static-element-interactions": RULES.OFF,
    "jsx-a11y/click-events-have-key-events": RULES.OFF,
    "no-underscore-dangle": RULES.OFF,
    "no-unused-vars": RULES.OFF,
    "no-console": RULES.OFF,
    "jsx-a11y/anchor-is-valid": RULES.OFF,
    "react/jsx-props-no-spreading": RULES.OFF,
    "jsx-a11y/label-has-associated-control": RULES.OFF,
    "react/jsx-filename-extension": [1, { extensions: [".js"] }],
  },
};

module.exports = {
  env: {
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["@typescript-eslint", "react"],
  root: true,
  ignorePatterns: [
    "dist/**/*",
    "*.d.ts",
    "webpack.*",
    "*.scss",
    ".eslintrc.cjs",
    ".husky/**/*",
    "jest.config.js",
    "__mocks__/**/*"
  ],
  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
  },
};

module.exports = {
  testEnvironment: "jsdom",
  verbose: true,
  preset: "ts-jest",
  roots: ["<rootDir>/src"],
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": require.resolve(
      "./__mocks__/assets.ts"
    ),
    "\\.(scss)$": require.resolve("./__mocks__/style.ts"),
  },
};

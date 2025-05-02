// eslint-disable-next-line @typescript-eslint/no-require-imports
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jsdom",
  coveragePathIgnorePatterns: ["/pages/_document.tsx"],
  collectCoverageFrom: [
    "pages/**/*.ts(x)?",
    "src/**/*.ts(x)?",
    "!**/*.stories.tsx",
    "!**/*.stories.ts",
    "!**/stories/**",
    "!**/*.d.ts",
  ],
  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/src/components/$1",
    "^@/assets$": "<rootDir>/src/assets/index.ts",
    "^@/utils/(.*)$": "<rootDir>/src/utils/$1",
    "^@/app/(.*)$": "<rootDir>/src/app/$1",
  },
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
};

module.exports = createJestConfig(customJestConfig);

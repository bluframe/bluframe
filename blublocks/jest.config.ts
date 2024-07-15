import type { Config } from "jest"

const cacheDirectory = "../.jest/cache"
const clearMocks = true
const collectCoverageFrom = ["src/**/*.(ts|tsx)"]
const coverageDirectory = "coverage"
const coveragePathIgnorePatterns = [
  "serviceWorker.js",
  "src/components/Typography/.*",
  "src/config",
  "src/styles",
  "src/index.ts",
  ".*stories.*"
]
const coverageReporters: Config["coverageReporters"] = [
  "html",
  "text-summary",
  "lcovonly"
]
const moduleNameMapper = {
  "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
  "react-markdown": "<rootDir>/src/__mocks__/react-markdown.tsx",
  "strip-markdown": "<rootDir>/src/__mocks__/strip-markdown.tsx"
}
const moduleDirectories = ["node_modules", "src"]
const moduleFileExtensions = ["js", "ts", "tsx"]
const modulePaths = ["src"]
const reporters = ["default"]
const roots = ["<rootDir>/src"]
const setupFiles = ["react-app-polyfill/jsdom"]
const testEnvironment = "jsdom"
const testMatch = ["<rootDir>/src/**/*.test.(ts|tsx)"]
const testPathIgnorePatterns = [
  "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
  "^.+\\.module\\.(css|sass|scss)$"
]
const transform: Config["transform"] = {
  "^.+\\.(js|jsx|ts|tsx)$": [
    "ts-jest",
    {
      tsconfig: "tsconfig.jest.json"
    }
  ],
  "^.+\\.css$": "<rootDir>/config/jest/cssTransform.ts"
}
const transformIgnorePatterns = ["/node_modules/", ".pnp.*"]
const watchPlugins = [
  "jest-watch-typeahead/filename",
  "jest-watch-typeahead/testname"
]

const config: Config = {
  cacheDirectory,
  clearMocks,
  collectCoverageFrom,
  coverageDirectory,
  coveragePathIgnorePatterns,
  coverageReporters,
  moduleDirectories,
  moduleFileExtensions,
  moduleNameMapper,
  modulePaths,
  reporters,
  roots,
  setupFiles,
  testEnvironment,
  testMatch,
  testPathIgnorePatterns,
  transform,
  transformIgnorePatterns,
  watchPlugins
}

export default config

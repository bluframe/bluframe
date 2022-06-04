const cacheDirectory = "../.jest/cache"
const clearMocks = true
const collectCoverageFrom = ["src/**/*.js"]
const coverageDirectory = "coverage"
const coveragePathIgnorePatterns = [
  "serviceWorker.js",
  "src/config",
  "src/styles",
  "src/index.js",
  ".*stories.*"
]
const coverageReporters = ["html", "text-summary", "lcovonly"]
const moduleNameMapper = {
  "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
  "^react-native$": "react-native-web"
}
const moduleDirectories = ["node_modules", "src"]
const moduleFileExtensions = ["js"]
const modulePaths = ["src"]
const reporters = ["default"]
const resolver = "<rootDir>/config/jest/resolver.js"
const roots = ["<rootDir>/src"]
const setupFiles = ["react-app-polyfill/jsdom"]
const setupFilesAfterEnv = []
const snapshotSerializers = []
const testEnvironment = "jsdom"
const testMatch = ["<rootDir>/src/**/*.test.js"]
const testPathIgnorePatterns = [
  "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
  "^.+\\.module\\.(css|sass|scss)$"
]
const testURL = "http://localhost"
const transform = {
  "^(?!.*\\.(js|jsx|css|json)$)": "<rootDir>/config/jest/fileTransform.js",
  "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
  "^.+\\.js$": "babel-jest"
}
const transformIgnorePatterns = ["<rootDir>/node_modules/"]
const watchPlugins = [
  "jest-watch-typeahead/filename",
  "jest-watch-typeahead/testname"
]

module.exports = {
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
  resolver,
  roots,
  setupFiles,
  setupFilesAfterEnv,
  snapshotSerializers,
  testEnvironment,
  testMatch,
  testPathIgnorePatterns,
  testURL,
  transform,
  transformIgnorePatterns,
  watchPlugins
}

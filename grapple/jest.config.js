const cacheDirectory = "../.jest/cache"
const clearMocks = true
const collectCoverageFrom = ["src/**/*.js"]
const coverageDirectory = "coverage"
const coveragePathIgnorePatterns = ["src/config", "src/index.js", "src/queries"]
const coverageReporters = ["html", "text-summary", "lcovonly"]
const moduleDirectories = ["node_modules", "src"]
const moduleFileExtensions = ["js"]
const reporters = ["default"]
const roots = ["<rootDir>/src"]
const testEnvironment = "jsdom"
const testMatch = ["<rootDir>/src/**/*.test.js"]
const testPathIgnorePatterns = [
  "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$"
]
const testURL = "http://localhost"
const transform = {
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
  reporters,
  roots,
  testEnvironment,
  testMatch,
  testPathIgnorePatterns,
  testURL,
  transform,
  transformIgnorePatterns,
  watchPlugins
}

module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.css$': '<rootDir>/cssTransform.js',
  },
  preset: null,
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  testPathIgnorePatterns: [
    "/node_modules/",
    "/example/",
    "/src"
  ],
  moduleFileExtensions: ['js', 'jsx'],
};

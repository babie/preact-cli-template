module.exports = {
  moduleNameMapper: {
    '^react$': '<rootDir>/node_modules/preact/compat',
    '^react-dom$': '<rootDir>/node_modules/preact/compat'
  },
  transformIgnorePatterns: ['/node_modules/(?!preact-head)']
}

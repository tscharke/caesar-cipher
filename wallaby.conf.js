module.exports = wallaby => ({
  files: ['src/**/*.js', '!src/**/*.test.js', 'package.json',],
  tests: ['src/**/*.test.js'],
  env: {
    type: 'node'
  },
  testFramework: 'jest',
  compilers: {
    '**/*.js': wallaby.compilers.babel()
  },
});

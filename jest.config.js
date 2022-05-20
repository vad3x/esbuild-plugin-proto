/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  collectCoverage: false,
  reporters: ['default'],
  collectCoverageFrom: ['**/src/**/*.ts'],
  coverageDirectory: path.resolve(__dirname, './coverage'),
  coverageReporters: ['text', 'cobertura', 'lcov'],
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
};

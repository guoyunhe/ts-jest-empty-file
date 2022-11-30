module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!<rootDir>/src/**/*.d.ts',
    '!<rootDir>/src/mockApi.ts',
    '!<rootDir>/src/setupDocs.ts',
    '!<rootDir>/src/setupTests.ts',
  ],
  coveragePathIgnorePatterns: ['/build/', '/dist/', '/es/', '/lib/', '/node_modules/'],
  coverageReporters: ['html', 'json-summary', 'text'],
  modulePathIgnorePatterns: ['/build/', '/dist/', '/es/', '/lib/', '/node_modules/'],
  moduleNameMapper: {
    'lodash-es': 'lodash',
    'fetch-mock/esm/client': 'fetch-mock/cjs/client',
  },
  //setupFilesAfterEnv,
  testEnvironment: 'jsdom',
  transform: { '^.+\\.[tj]sx?$': 'ts-jest' },
  transformIgnorePatterns: [
    '/node_modules/',
    '!/node_modules/@alifd/biz-anchor/', // 在 index.js 直接引用了 *.scss，已建议维护者修正
    '!/node_modules/lodash-es/', // 只有 esm 没有 cjs
  ],
};


module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ['dotenv/config'],
  coverageReporters: ['text', 'cobertura', 'json', 'lcov', 'clover'],
  coveragePathIgnorePatterns: [
    '.impl.ts',
    '<rootDir>/src/application/config/',
    '<rootDir>/src/application/domain/entities/',
    '<rootDir>/src/application/domain/exceptions/',
    '<rootDir>/src/infraestructure/driven-adapters/',
    '<rootDir>/src/infraestructure/entry-points/',
    '<rootDir>/src/infraestructure/gateways/',
    '<rootDir>/test/mocks/',
  ],
  roots: [
    '<rootDir>/src',
    '<rootDir>/test',
  ]
};

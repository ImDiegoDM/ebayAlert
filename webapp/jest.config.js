module.exports = {
  roots: ['src'],
  displayName: 'web',
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.js'
  ],
  collectCoverageFrom: ['<rootDir>/**/*.{ts,tsx}'],
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)']
};
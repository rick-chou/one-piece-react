module.exports = {
  ...require('../@rick-test').jest,
  moduleNameMapper: {
    ...require('@rickzhou/react-test').jest.moduleNameMapper,
    '^@/(.*)$': '<rootDir>/$1',
  },
};

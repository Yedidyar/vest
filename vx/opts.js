module.exports = {
  dir: {
    COMMANDS: 'commands',
    CONFIG: 'config',
    DIST: 'dist',
    EXPORTS: 'exports',
    JEST: 'jest',
    PACKAGES: 'packages',
    ROLLUP: 'rollup',
    SCRIPTS: 'scripts',
    SRC: 'src',
    TESTS: '__tests__',
    TYPES: 'types',
    VX: 'vx',
  },
  env: {
    PRODUCTION: 'production',
    DEVELOPMENT: 'development',
    TEST: 'test',
  },

  fileNames: {
    CHANGELOG: 'CHANGELOG.md',
    JEST_CONFIG: 'jest.config.js',
    JEST_SETUP: 'jest.setup.ts',
    JEST_SETUP_AFTER_ENV: 'jest.setupAfterEnv.ts',
    MAIN_EXPORT: 'index.js',
    NPM_IGNORE: '.npmignore',
    PACKAGE_JSON: 'package.json',
    ROLLUP_CONFIG: 'rollup.config.cjs',
    TSCONFIG_JSON: 'tsconfig.json',
    VX_BUILD: 'vx.build.js',
  },
  format: {
    UMD: 'umd',
    CJS: 'cjs',
    ES: 'es',
  },
};

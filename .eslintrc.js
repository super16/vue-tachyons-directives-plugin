module.exports = {
  env: {
    browser: true,
    node: true,
    es2022: true,
  },
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json',
    sourceType: 'module',
  },
  rules: {
    "import/no-extraneous-dependencies": [
      "error", { devDependencies: true }
    ]
  },
};

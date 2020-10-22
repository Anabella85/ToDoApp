module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: [
      'plugin:vue/essential',
      '@vue/airbnb',
      '@vue/typescript',
    ],
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'indent': ['error', 4],
      'space-before-function-paren': 'off',
      'no-console': ['error'],
      'semi': [2, 'never'],
      'lines-between-class-members': ['error', 'always', { 'exceptAfterSingleLine': true }],
      'quotes': ['error', 'single'],
      'import/no-named-as-default-member': 0,
      'import/no-named-as-default': 0,
      'func-names': ['error', 'never'],
      'no-console': ['error', { allow: ['warn', 'error', 'log'] }],
      'import/no-extraneous-dependencies': ['error', 'always', {ignorePackages: true} ],
      'class-methods-use-this': ['off'],
      'no-useless-escape': 'off',
      'no-return-assign': 'off',
      'global-require': 'off',
      'arrow-body-style': 'off',
      'prefer-destructuring': 'off',
      'no-plusplus': 'off',
      'import/order': 'off',
      'no-param-reassign': ['error', { 'props': false }],
    },
    parserOptions: {
      parser: '@typescript-eslint/parser',
    },
    overrides: [
      {
        files: [
          '**/__tests__/*.{j,t}s?(x)',
          '**/tests/unit/**/*.spec.{j,t}s?(x)',
        ],
        env: {
          jest: true,
        },
      },
    ],
  };
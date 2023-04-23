/**@type {import('eslint-define-config').ESLintConfig} */
module.exports = {
  env: {
    browser: true,
    es2022: true,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'xo',
        'xo-typescript',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
      ],
      rules: {
        '@typescript-eslint/naming-convention': [
          'error',
          // interface must startwith I
          {
            selector: ['interface'],
            format: ['PascalCase'],
            custom: {
              regex: '^I[A-Z]',
              match: true,
            },
          },
          {
            selector: ['typeAlias'],
            format: ['PascalCase'],
            custom: {
              regex: '^I[A-Z]',
              match: false,
            },
          },
          // Generics params must startwith T
          {
            selector: 'typeParameter',
            format: ['PascalCase'],
            prefix: ['T'],
          },
        ],
        '@typescript-eslint/object-curly-spacing': 'off',
        // use @emotion/react css props
        'react/no-unknown-property': ['error', { ignore: ['css'] }],
        'capitalized-comments': 'off',
        'no-warning-comments': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
    },
  ],
  ignorePatterns: ['*.[m|c]js', '*.json', 'vite-env.d.ts', 'vite.config.ts'],
};

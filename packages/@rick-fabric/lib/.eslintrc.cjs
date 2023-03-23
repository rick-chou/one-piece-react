/**@type {import('eslint-define-config').ESLintConfig} */
module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['plugin:react/recommended', 'xo', 'plugin:prettier/recommended', 'plugin:react-hooks/recommended'],
	overrides: [
		{
			extends: ['xo-typescript'],
			files: ['*.ts', '*.tsx'],
			rules: {
				'@typescript-eslint/naming-convention': [
					'error',
					{
						selector: ['interface'],
						format: ['PascalCase'],
						custom: {
							regex: '^I[A-Z]',
							match: true,
						},
					},
					{
						selector: 'typeParameter',
						format: ['PascalCase'],
						prefix: ['T'],
					},
				],
				'@typescript-eslint/object-curly-spacing': 'off',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	ignorePatterns: ['*.[c]js', '*.json', 'vite-env.d.ts', 'vite.config.ts'],
	plugins: ['react', 'prettier'],
	rules: {
		'react/react-in-jsx-scope': 'off',
		'react/prop-types': 'off',
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};

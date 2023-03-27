module.exports = {
	postcss: require('./postcss.config.cjs'),
	tailwindcss: require('./tailwind.config.cjs'),
	emotion: {
		jsxImportSource: '@emotion/react',
		babel: {
			plugins: ['@emotion/babel-plugin'],
		},
	},
};

module.exports = {
	parser: '@typescript-eslint/parser',
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
	],
	plugins: ['prettier'],
	settings: {
		react: {
			version: 'latest',
		},
	},
	rules: {
		'prettier/prettier': ['error', require('./.prettierrc.js')],
	},
};

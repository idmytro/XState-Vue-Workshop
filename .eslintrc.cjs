module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:vue/vue3-essential',
		'xo',
	],
	overrides: [
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'vue',
	],
	rules: {
		'capitalized-comments': 'off',
		'no-unused-vars': 'warn',
		'space-before-function-paren': ['error', 'always'],
		'vue/multi-word-component-names': 'off',
	},
};

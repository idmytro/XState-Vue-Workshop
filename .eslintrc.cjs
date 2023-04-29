module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:vue/vue3-recommended',
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
		curly: ['error', 'multi-line'],
		'no-unused-vars': 'warn',
		'space-before-function-paren': ['error', 'always'],

		'vue/html-indent': ['error', 'tab'],
		'vue/multi-word-component-names': 'off',
		'vue/padding-line-between-tags': [1, [
			{blankLine: 'always', prev: '*', next: '*'},
		]],
	},
};

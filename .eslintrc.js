module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: ["eslint:recommended", "plugin:vue/vue3-recommended", "@vue/typescript/recommended", "@vue/prettier"],
	parserOptions: {
		ecmaVersion: 2020,
	},
	rules: {
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
		"vue/multi-word-component-names": "off",
		"vue/no-v-html": 0,
		"prettier/prettier": [
			"error",
			{
				endOfLine: "auto",
			},
		],
	},
};

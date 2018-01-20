const path = require('path');

module.exports = {
	entry: {
		'v-chip': './src/vue-chip.js',
		'v-chip-input': './src/vue-chip-input.js',
		//test: './test/app.js'
	},

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},

	module: {
		rules: [
			{test : /\.(vue)$/, use: 'vue-loader'}
		]
	}
}
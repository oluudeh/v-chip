const path = require('path');

module.exports = {
	entry: {
		'v-chip': './src/v-chip.js',
		'v-chip-input': './src/v-chip-input.js',
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
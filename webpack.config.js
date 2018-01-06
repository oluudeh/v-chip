const path = require('path');

module.exports = {
	entry: {
		chip: './src/vue-chip.js',
		chipinput: './src/vue-chip-input.js',
		chipautocomplete: './src/vue-chip-autocomplete.js'
	},

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},

	module: {
		rules: [
			{test : /\.(vue)$/, use: 'html-loader'}
		]
	}
}
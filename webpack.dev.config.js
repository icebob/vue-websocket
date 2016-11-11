var path = require("path");
var webpack = require("webpack");

module.exports = {
	devtool: "eval-source-map",
	
	entry: {
		app: path.resolve("dev", "main.js")
	},

	output: {
		path: path.resolve("dev"),
		filename: "[name].js",
		publicPath: "/"
	},

	plugins: [
	],

	module: {
		loaders: [
			{
				"test": /\.js?$/,
				"exclude": /node_modules/,
				"loader": "babel"
			},
			{
				"test": /\.vue?$/,
				"loader": "vue"
			}
		]
	}
};

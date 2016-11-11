var webpack = require("webpack");
var version = require("./package.json").version;
var banner = "/**\n" + " * vue-websocket v" + version + "\n" + " * https://github.com/icebob/vue-websocket\n" + " * Released under the MIT License.\n" + " */\n";

module.exports = [
	{
		devtool: "source-map",
		entry: "./src/index",
		output: {
			path: "./dist",
			filename: "vue-websocket.js",
			library: "VueWebsocket",
			libraryTarget: "umd"
		},

		plugins: [
			new webpack.DefinePlugin({
				"process.env" : {
					NODE_ENV : JSON.stringify("production")
				}
			}),
			new webpack.optimize.UglifyJsPlugin({
				compress: {
					warnings: false
				}
			}),
			new webpack.optimize.DedupePlugin(),
			new webpack.BannerPlugin(banner, {
				raw: true
			})
		],

		module: {
			loaders: [
				{
					"test": /\.js?$/,
					"exclude": /node_modules/,
					"loader": "babel"
				},
				{
					"test": /\.vue$/,
					"loader": "vue"
				}	
			]
		}
	}

];
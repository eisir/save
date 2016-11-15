var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var pathToReact = path.join(__dirname, "./node_modules/react/dist/react.js");
var pathToReactDOM = path.join(__dirname, "./node_modules/react-dom/dist/react-dom.js");

module.exports = {
    entry: [
    	'webpack/hot/dev-server',
      	'webpack-dev-server/client?http://localhost:3010',
    	path.resolve(__dirname, 'src/index.js')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    devServer: {
    	hot:true,
    	port: 3010,
    	contentBase: 'build',
    	inline: true,
      	stats: { colors: true }
    },
    resolve: {
    	extensions: ["", ".js", ".jsx", ".json"]
    },
    externals: [],
    module:{
    	loaders: [
    		{
		      test: /\.js$/,
		      loaders: ['react-hot', 'babel'],
		      exclude: path.resolve(__dirname, 'node_modules')
		    },
		    {
		      test: /\.css/,
		      loader: 'style!css'
		    },
		    {
		      test: /\.less/,
		      loader: 'style!css!less'
		    },
		    {
			  test: /\.(woff|woff2|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
			  loader: "url?limit=8192"
			}
    	],
    	noParse: [pathToReact, pathToReactDOM]
    },
    plugins: [
    	new webpack.HotModuleReplacementPlugin(),
    	new OpenBrowserPlugin({ url: 'http://localhost:3010' }),
    	new HtmlWebpackPlugin({
	      	title: 'learn-react',
	      	template: './src/index.html'
    	}),
    	new webpack.NoErrorsPlugin()
    ]
};
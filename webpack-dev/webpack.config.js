var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var openBrowserWebpackPlugin = require('open-browser-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

/**
 * 标识开发环境和生产环境
 * @type {webpack.DefinePlugin}
 */
// definePlugin 会把定义的string 变量插入到Js代码中。
var definePlugin = new webpack.DefinePlugin({
  	__DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
  	__PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
});

module.exports = {
	entry: [
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:3010',
      path.resolve(__dirname, 'app/index.js')
    ],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath:'/ming',
    },
    resolve: {
      extension: ['', '.js', '.jsx', '.json']
    },
    devServer: {
    	publicPath:'/static/',
    	contentBase: './public',
    	hot: true,
	    inline: true,
	    port: 3010
    },
    module: {
      loaders: [
        {
          test: /\.js[x]?$/,
          loaders: ['react-hot', 'babel'],
          exclude: path.resolve(__dirname, 'node_modules')
        },
        {
          test: /\.css/,
          loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        },
        {
          test: /\.less/,
          loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
        }
      ]
    },
    plugins: [
    	new webpack.HotModuleReplacementPlugin(),
    	new HtmlWebpackPlugin({
	      	title: 'learn-react',
	      	template: './app/index.html'
    	}),
    	new openBrowserWebpackPlugin({
			url: 'http://localhost:3010/static/index.html'
		}),
		new ExtractTextPlugin("bundle.css",{
			allChunks: true,
          	disable: false
		}),
		definePlugin,		
    	new webpack.NoErrorsPlugin(),
    ]
}

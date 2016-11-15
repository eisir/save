'use strict';

var path = require('path');
var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
// 产出html模板
var HtmlWebpackPlugin = require("html-webpack-plugin");
// 单独样式文件
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
	devServer: {
      	historyApiFallback: true,
      	hot: true,
      	inline: true,
      	contentBase: './public',
      	port: 8080,
      	stats: { colors: true }
    },
	entry: {		
		index: [
			   	'webpack/hot/dev-server',
			  	'webpack-dev-server/client?http://localhost:8080',
			  	path.resolve(__dirname, 'app/index.js')
		    ],
		vendor: ['react', 'react-dom']
	}
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },
    resolve: {
      extension: ['', '.js', '.jsx', '.json']
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
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
    	new webpack.NoErrorsPlugin(),
		new ExtractTextPlugin("bundle.css")
		definePlugin,		
    ]
}

var path = require('path');
var webpack = require('webpack');
// 编译后自动打开浏览器
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
// 产出html模板
var HtmlWebpackPlugin = require("html-webpack-plugin");
// 单独样式文件
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var node_modules = path.resolve(__dirname, 'node_modules');

module.exports = {
   	entry: {
   		index:[
   			path.resolve(__dirname, './src/js/page/index.js'),
   		]
   	},
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
    },
    devServer: {
		publicPath: "/static/",
	  	historyApiFallback: true,
	  	hot: true,
	  	inline: true,
	  	contentBase: '/build',
	  	port: 3000,
	  	stats: { colors: true }
    },
    resolve: {
    	extensions: ["", ".js", ".jsx", ".json"]
    },
    module: {
    	noParse: [
	        path.resolve(node_modules, 'react/dist/react.min.js'),
	        path.resolve(node_modules, 'react-dom/dist/react-dom.min.js')
	    ],
        loaders: [
        	{
	          test: /\.js[x]?$/,
	          loaders: ['react-hot', 'babel'],
	          exclude: path.resolve(__dirname, 'node_modules')
	        },
	        {
	          test: /\.css/,
	          loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer")
	        },
	        { 
	        	test: /\.scss$/,
	        	loader:  ExtractTextPlugin.extract('style-loader','css-loader!sass')
	        },
	        {
	          test: /\.less/,
	          loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
	        },
	        {
	          	test: /\.(svg|jpe?g|png|gif|ico)$/,
	          	loader: 'url-loader?limit=8192&name=img/[name]-[hash].[ext]'
	        },
	        {
	          test: /\.(woff|woff2|ttf||eot)(\?v=\d+\.\d+\.\d+)?$/,
	          loader: "url?limit=10000&name=font/[name]-[hash].[ext]"
	        }            
        ]        
    },
    plugins: [
   	 	new webpack.HotModuleReplacementPlugin(),
   	 	new webpack.NoErrorsPlugin(),
//      new webpack.ProvidePlugin({
//          jQuery: "jquery",
//          $: "jquery"
//      }),
        new HtmlWebpackPlugin({
	        title: 'your app title',
	        template: './src/views/index.html'
      	}),
      	new OpenBrowserPlugin({ url: 'http://localhost:3000/static/index.html' }),
      	new webpack.NoErrorsPlugin(),
      	new ExtractTextPlugin("css/[name].css", {
          allChunks: true,
          disable: true
      	})
    ]    
};

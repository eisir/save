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
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/'
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
	          loader: ExtractTextPlugin.extract("style-loader", "css-loader")
	        },
	        { 
	        	test: /\.scss$/,
	        	loader: 'style!css!sass'
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
   	 	new webpack.NoErrorsPlugin(),
//      new webpack.ProvidePlugin({
//          jQuery: "jquery",
//          $: "jquery"
//      }),
        new HtmlWebpackPlugin({
	        title: 'your app title',
	        template: './src/views/index.html'
      	}),
		new ExtractTextPlugin("css/[name].css", {
          allChunks: true,
          disable: false
      	}),
      	new webpack.NoErrorsPlugin(),
      	new webpack.optimize.UglifyJsPlugin({
		    compress: {
		    warnings: true
		    }
		}),
      	new webpack.optimize.MinChunkSizePlugin({
		    compress: {
		      warnings: false
		    }
		}),
		// 查找相等或近似的模块，避免在最终生成的文件中出现重复的模块
		new webpack.optimize.DedupePlugin(),
		  // 按引用频度来排序 ID，以便达到减少文件大小的效果
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.AggressiveMergingPlugin({
		    minSizeReduce: 1.5,
		    moveToParents: true
		})
    ]    
};

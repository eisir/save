var path = require('path');

module.exports = {
    entry: {
      a: './src/a.js',
      b: './src/b.js',
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
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
	      loader: 'style!css'
	    },
	    {
	      test: /\.less/,
	      loader: 'style!css!less'
	    }
      ]
    }
};
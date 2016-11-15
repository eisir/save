// fis.match('::packager', {
//   spriter: fis.plugin('csssprites')
// });

// fis.match('*', {
//   useHash: false
// });

// fis.match('*.js', {
//   optimizer: fis.plugin('uglify-js')
// });

// fis.match('*.css', {
//   useSprite: true,
//   optimizer: fis.plugin('clean-css')
// });

// fis.match('*.png', {
//   optimizer: fis.plugin('png-compressor')
// });


 //  fis.match('*.js', {
	//   // fis-optimizer-uglify-js 插件进行压缩，已内置
	//   optimizer: fis.plugin('uglify-js')
	// });


// fis.set('new date', Date.now());
//   fis.match('*.{js,css}', {
//       query: '?=t' + fis.get('new date')
//   });
//   fis.match('*.js', {
// 	  // fis-optimizer-uglify-js 插件进行压缩，已内置
// 	  optimizer: fis.plugin('uglify-js')
// 	}); 

fis.media('prod')
	.match('*', {
	  release: false
	})
	.match('/tmp/**', {
	  release: '/prd/$0'
	})
	.match('/static/**', {
	  release: '/prd/$0'
	})
	.match('*.{js,css}', {
	  useHash: true
	})
	.match('**/layer/**.css', {
	  useHash: false
	})
	.match('/tmp/*.js', {
	    //发布到/static/js/xxx目录下
	    release : '/prd/js/$0'
	});
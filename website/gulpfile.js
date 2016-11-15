'use strict';
let gulp = require('gulp')
let webpack = require('webpack')

let gutil = require('gulp-util')
let webpackConfig= require('./webpack.config');
let webpackProdConfig= require('./webpack.prod.config');
let del = require('del')

gulp.task('default');
gulp.task('clean', (done) => {
  del([`${webpackConfig.output.path}`], done);
});
gulp.task('clean-dist', (done) => {
  del([`${webpackProdConfig.output.path}`], done);
});
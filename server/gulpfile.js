const {src,dest,parallel,series} = require('gulp');
const webpack = require('webpack-stream');
const del = require('del');
const nodemon = require('gulp-nodemon');

const webpackConfig = require('./webpack.config.js')

function build(){
  return src('./src/app.ts')
    .pipe(webpack(webpackConfig)).pipe(dest("./dist"))
}

function run(){
  return nodemon({
    script:'./dist/app.js',
    ignore:['node_modules/']
  })
}

exports.build = build;
exports.run = run;
exports.default = parallel(build,run)
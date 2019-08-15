const {src,dest,parallel,series} = require('gulp');
const webpack = require('webpack-stream');
const nodemon = require('gulp-nodemon');

const MongoClient = require('mongodb').MongoClient;
const url = process.env.MONGO_URL;
const dbName = 'ebay_alert_db';

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

function setupMongo(cp){
  MongoClient.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}, function(err, client) {
    if (err) throw err;
    var dbo = client.db(dbName);
    dbo.createCollection("search_phrases", function(err, res) {
      if (err) throw err;

      client.close();
      cp()
    });
  });
}

exports.build = build;
exports.run = run;
exports.setupMongo = setupMongo;
exports.default = series(setupMongo,parallel(build,run))
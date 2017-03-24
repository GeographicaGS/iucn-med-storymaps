var gulp = require('gulp');
var shell = require('gulp-shell');
var clean = require('gulp-clean');
var htmlreplace = require('gulp-html-replace');
var runSequence = require('run-sequence');
var Builder = require('systemjs-builder');
var builder = new Builder('', 'src/systemjs.config.js');

var bundleHash = new Date().getTime();
var mainBundleName = bundleHash + '.main.bundle.js';
var vendorBundleName = bundleHash + '.vendor.bundle.js';

// This is main task for production use
gulp.task('dist', function(done) {
  runSequence('clean', 'compile_ts', 'bundle', 'copy_assets', function() {
    done();
  });
});

gulp.task('bundle', ['bundle:app'], function () {
  return gulp.src('index.html')
      .pipe(htmlreplace({
        'app': mainBundleName,
      }))
      .pipe(gulp.dest('./dist'));
});

gulp.task('bundle:vendor', function () {
  return builder
      .buildStatic('app/vendor.js', './dist/' + vendorBundleName)
      .catch(function (err) {
        console.log('Vendor bundle error');
        console.log(err);
      });
});

gulp.task('bundle:app', function () {
  return builder
      .buildStatic('src/app/NgModule.js', './public/' + mainBundleName)
      .catch(function (err) {
        console.log('App bundle error');
        console.log(err);
      });
});

gulp.task('compile_ts', shell.task([
  'tsc'
]));

gulp.task('copy_assets', function() {
  return gulp.src(['./src/assets/**/*', './src/css/**/*'], {base:"."})
      .pipe(gulp.dest('./public'));
});

gulp.task('clean', ['clean:public']);

gulp.task('clean:public', function () {
  return gulp.src(['./public'], {read: false})
      .pipe(clean());
});
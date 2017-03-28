var gulp = require('gulp');
var shell = require('gulp-shell');
var clean = require('gulp-clean');
var htmlreplace = require('gulp-html-replace');
var runSequence = require('run-sequence');
var Builder = require('systemjs-builder');
var builder = new Builder('', 'src/systemjs.config.js');
var sourcemaps = require('gulp-sourcemaps');
var typescript = require('gulp-typescript');
var uglify = require('gulp-uglifyjs');
var bundleHash = new Date().getTime();
var mainBundleName = bundleHash + '.main.bundle.js';
var vendorBundleName = bundleHash + '.vendor.bundle.js';
var rename = require("gulp-rename");
var pump = require('pump');

// This is main task for production use
gulp.task('dist', function (done) {
  runSequence('clean', 'compile_ts', 'bundle', 'copy:assets', 'minify:dist', function () {
    done();
  });
});

gulp.task('bundle', ['bundle:vendor', 'bundle:app'], function () {
  return gulp.src('src/index.public.html')
      .pipe(htmlreplace({
        'app': mainBundleName,
        'vendor': vendorBundleName
      }))
      .pipe(rename('index.html'))
      .pipe(gulp.dest('./public'));
});

gulp.task('bundle:vendor', function () {
  return builder
      .buildStatic('src/vendor.js', './public/' + vendorBundleName)
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
gulp.task('compile_ts', ['clean:ts'], function () {
      return gulp
          .src([
            "src/**/*.ts"
          ])
          .pipe(sourcemaps.init())
          .pipe(typescript({
            "module": "system",
            "moduleResolution": "node",
            "target": "ES5",
            "sourceMap": true,
            "emitDecoratorMetadata": true,
            "experimentalDecorators": true,
            "removeComments": true,
            "typeRoots": [
              "./node_modules/@types"
            ],
            "lib": [
              "es2016",
              "dom"
            ]
          }))
    }
);

gulp.task('copy:assets', function () {
  return gulp.src([
    './src/assets/**/*',
    './src/css/styles.css',
    './src/data/**/*',
    './src/templates/**/*',
  ], {base: "./src"})
      .pipe(gulp.dest('./public'));
});


gulp.task('copy:app', function () {
  return gulp.src([
    './src/**/*.js',
    './src/index.html',
  ], {base: "./src"})
      .pipe(gulp.dest('./public'));
});
gulp.task('copy:dependencies', function () {
  return gulp.src([
    './node_modules/@angular/**/*.js',
    './node_modules/mapbox-gl/dist/**/*.js',
    './node_modules/rxjs/**/*.js',
    './node_modules/core-js/client/shim.min.js',
    './node_modules/zone.js/dist/zone.js',
    './node_modules/reflect-metadata/Reflect.js',
    './node_modules/systemjs/dist/system.src.js',
  ], {base: "."})
      .pipe(gulp.dest('./public'));
});
gulp.task('clean', ['clean:ts', 'clean:dist']);

gulp.task('clean:dist', function () {
  return gulp.src(['./public'], {read: false})
      .pipe(clean());
});

gulp.task('minify:dist', function (cb) {
  pump([
        gulp.src('./public/**/*.js'),
        uglify({

        }),
        gulp.dest('./public')
      ],
      cb
  );
});

gulp.task('clean:ts', function () {
  return gulp.src(['./public/**/*.js', './public/**/*.js.map'], {read: false})
      .pipe(clean());
});

// This is main task for production use
gulp.task('dist_uncompressed', function (done) {
  runSequence('compile_ts', 'copy:app', 'copy:assets', 'copy:dependencies', function () {
    done();
  });
});
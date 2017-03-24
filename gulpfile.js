var gulp = require('gulp');
const sysBuilder = require('systemjs-builder');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const tsc = require('gulp-typescript');
const uglify = require('gulp-uglify');
const tsconfig = require('tsconfig-glob');

// Bundle dependencies into vendors file
gulp.task('bundle:libs', function () {
  return gulp.src([
    'node_modules/core-js/client/shim.min.js',
    'node_modules/zone.js/dist/zone.js',
    'node_modules/reflect-metadata/Reflect.js',
    'node_modules/systemjs/dist/system.src.js',
    'src/systemjs.config.js',
  ])
      .pipe(concat('vendors.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('./public'));
});

// Copy static assets
gulp.task('copy:assets', function() {
  return gulp.src(['./src/assets/**/*','./src/css/styles.css','./src/index.html'], {base:"./src"})
      .pipe(gulp.dest('./public'));
});

// Compile TypeScript to JS
gulp.task('compile:ts', function () {
  return gulp
      .src([
        "src/**/*.ts",
        "typings/*.d.ts"
      ])
      .pipe(sourcemaps.init())
      .pipe(tsc({
        "module": "system",
        "moduleResolution": "node",
        "experimentalDecorators": true,
        "outDir": "public/dist/js",
        "target": "ES5"
      }))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('compile'));
});

// Generate systemjs-based builds
gulp.task('bundle:js', function () {
  var builder = new sysBuilder('src', './src/systemjs.config.js');
  return builder.buildStatic('app', 'compile/app.min.js');
});

// Minify JS bundle
gulp.task('minify:js', function () {
  return gulp
      .src('compile/app.min.js')
      .pipe(uglify())
      .pipe(gulp.dest('public'));
});

gulp.task('dist', ['bundle:libs', 'bundle:js', 'minify:js', 'copy:assets']);
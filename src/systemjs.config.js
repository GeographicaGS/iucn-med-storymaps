(function (global) {
  System.config({
    path: {
      'app ': 'src',
      'assets': 'app:/assets',
      'guard': 'app:/guard',
      'templates': 'app:/templates',
      'node_modules/': '../../node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      // app: 'app',
      // angular bundles
      '@angular/core': 'node_modules/@angular/core/bundles/core.umd.js',
      '@angular/common': 'node_modules/@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'node_modules/@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'node_modules/@angular/http/bundles/http.umd.js',
      '@angular/router': 'node_modules/@angular/router/bundles/router.umd.js',
      '@angular/forms': 'node_modules/@angular/forms/bundles/forms.umd.js',
      'mapbox-gl': 'node_modules/mapbox-gl/dist',
      'rxjs': 'node_modules/rxjs',
      'traceur': 'node_modules/traceur/bin/traceur.js',
        'ng-simple-slideshow': 'node_modules/ng-simple-slideshow/',
        'ngx-perfect-scrollbar': 'node_modules/ngx-perfect-scrollbar/',
      'resize-observer-polyfill': 'node_modules/resize-observer-polyfill/',
      'perfect-scrollbar': 'node_modules/perfect-scrollbar/',
      'core-js-shim': 'node_modules/core-js/client/shim.js',
      'zone': 'node_modules/zone.js/dist/zone.js',
      'core-js': 'node_modules/core-js/',
      'reflect': 'node_modules/reflect-metadata/Reflect.js',
      'system-polyfills': 'node_modules/systemjs/dist/system-polyfills.js',
      'es6-promise': 'node_modules/es6-promise/dist/es6-promise.js'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './NgModule.js',
        defaultExtension: 'js'
      },
      src: {
        defaultExtension: 'js'
      },
      services: {
        defaultExtension: 'js'
      },
      routes: {
        defaultExtension: 'js'
      },
      guard: {
        defaultExtension: 'js'
      },
      shared: {
        defaultExtension: 'js'
      },
      rxjs: {
        main: './Rx.js',
        defaultExtension: 'js'
      },
      'ng-simple-slideshow': {
        main: './ng-simple-slideshow.js',
        defaultExtension: 'js'
      },
      'ngx-perfect-scrollbar': {
        main: './dist/index.js',
        defaultExtension: 'js'
      },
      'resize-observer-polyfill': {
        main: './dist/ResizeObserver.js',
        defaultExtension: 'js'
      },
      'perfect-scrollbar': {
        main: './src/index.js',
        defaultExtension: 'js'
      },
      'system-polyfills': {
        defaultExtension: 'js'
      },
      'es6-promise': {
        defaultExtension: 'js'
      },
      'core-js-shim': {
        defaultExtension: 'js'
      },
      'core-js': {
        defaultExtension: 'js'
      },
      'mapbox-gl': {
        main: './mapbox-gl.js',
        defaultExtension: 'js'
      }
    }
  });
})(this);

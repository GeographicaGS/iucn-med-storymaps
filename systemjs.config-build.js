var map = {
  'app':                                './',
  'rxjs':                               '/',
  'zonejs':                             '/',
  'reflect-metadata':                   '/',
  '@angular':                           '/'
};

var packages = {
  'app':                                { main: 'app.bundle', defaultExtension: 'js' },
  'rxjs':                               { main: 'vendor',defaultExtension: 'js' },
  'zonejs':                             { main: 'app.bundle', defaultExtension: 'js' },
  'reflect-metadata':                   { main: 'app.bundle', defaultExtension: 'js' }
};

var packageNames = [
  '@angular/common',
  '@angular/compiler',
  '@angular/core',
  '@angular/http',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',
  '@angular/router',
  '@angular/router-deprecated',
  '@angular/testing',
  '@angular/upgrade',
];

packageNames.forEach(function(pkgName) {
  packages[pkgName] = { main: 'app.bundle.js', defaultExtension: 'js' };
});

System.config({
  map: map,
  packages: packages
});
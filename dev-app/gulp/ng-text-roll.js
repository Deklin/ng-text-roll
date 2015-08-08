/**
 * Build (minify, etc.) ngTextRoll directive and
 *  copy into distribution folders
 */

'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var greplace = require('gulp-replace');

var paths = {
  dist: path.join('../', conf.paths.dist),
  src: path.join(conf.paths.src, '/app/components/ngTextRoll/')
};

gulp.task('ng-text-roll', ['ng-text-roll-copy'], function() {
  return gulp.src(path.join(paths.src, '*.js'))
    .pipe(greplace('app/components/ngTextRoll/', conf.paths.dist + '/'))
    .pipe(gulp.dest(path.join(paths.dist)));
});

gulp.task('ng-text-roll-copy', function() {
  return gulp.src(
      [
        path.join(paths.src, '*'),
        '!' + path.join(paths.src, '*.js')
      ])
    .pipe(gulp.dest(path.join(paths.dist)));
});

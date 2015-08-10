/**
 * Process template for ngTextRoll directive and
 *  copy into distribution folders
 */

'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var template = require('gulp-angular-templatecache');
var greplace = require('gulp-replace');
var inject = require('gulp-inject');
var del = require('del');

var paths = {
  dist: path.join('../', conf.paths.dist),
  src: path.join(conf.paths.src, '/app/components/ngTextRoll/')
};
var templateFilename = 'ng-text-roll.template';
var directiveFilename = 'ngtextroll.js';

gulp.task('ng-text-roll', ['ng-text-roll-inject'], function() {
  gulp.start('ng-text-roll-del-template');
});

gulp.task('ng-text-roll-inject', ['ng-text-roll-template'], function() {
  var target = gulp.src(path.join(paths.dist, directiveFilename));
  var sources = gulp.src(path.join(paths.dist, templateFilename));
  var options = {
    starttag: '// template:js',
    endtag: '// endinject',
    transform: function(filePath, file) {
      return file.contents.toString('utf8');
    }
  };
  return target.pipe(inject(sources, options))
    .pipe(gulp.dest(paths.dist))
});

gulp.task('ng-text-roll-template', ['ng-text-roll-rename'], function() {
  return gulp.src(paths.dist + '/*.html')
    .pipe(template(templateFilename, {
      module: 'ui.ngTextRoll.template',
      standalone: true,
      root: 'template'
    }))
    .pipe(gulp.dest(paths.dist))
});

gulp.task('ng-text-roll-rename', ['ng-text-roll-copy'], function() {
      return gulp.src(path.join(paths.src, '*.js'))
        .pipe(greplace('app/components/ngTextRoll/', 'template/'))
        .pipe(greplace('[]', '[\'ui.ngTextRoll.template\']'))
          .pipe(gulp.dest(path.join(paths.dist)));
        });

    gulp.task('ng-text-roll-copy', ['ng-text-roll-clean'], function() {
      return gulp.src(
          [
            path.join(paths.src, '*'),
            '!' + path.join(paths.src, '*.js')
          ])
        .pipe(gulp.dest(paths.dist));
    });

    gulp.task('ng-text-roll-clean', function() {
      del(path.join(paths.dist, '*'), {
        force: true
      });
    });

    gulp.task('ng-text-roll-del-template', function() {
      del(path.join(paths.dist, templateFilename), {
        force: true
      });
      del(path.join(paths.dist, '*.html'), {
        force: true
      });
    });

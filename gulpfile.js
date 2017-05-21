/**
 * Created by xiangge on 2017/3/16.
 */

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var gzip = require('gulp-gzip');

gulp.task('deployScripts', function() {
  gulp.src('./dist/*.js')
    .pipe(uglify())
    .pipe(gzip())
    .pipe(gulp.dest('./dest'));
});

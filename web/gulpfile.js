var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('default', function  () {
	connect.server({root: ".", livereload: true, port: 8088});
})
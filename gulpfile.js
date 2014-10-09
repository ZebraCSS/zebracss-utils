var gulp = require('gulp'),
	less = require('gulp-less'),
	rename = require('gulp-rename'),
	csscomb = require('gulp-csscomb'),
	path = require('path');

gulp.task('less', function () {
	return gulp.src(path.join('.', 'index.less'))
		.pipe(less())
		.pipe(rename('zebra.css'))
		.pipe(gulp.dest(path.join('.', 'build')));
});

gulp.task('csscomb-lib', function() {
	return gulp.src(path.join('.', 'lib', '**', '*.less'))
		.pipe(csscomb())
		.pipe(gulp.dest(path.join('.', 'lib')));
});

gulp.task('csscomb-src', function() {
	return gulp.src(path.join('.', 'src', '**', '*.less'))
		.pipe(csscomb())
		.pipe(gulp.dest(path.join('.', 'src')));
});

gulp.task('csscomb-other', function() {
	return gulp.src(['index.less', 'libs.less'])
		.pipe(csscomb())
		.pipe(gulp.dest(path.join('.')));
});

gulp.task('csscomb', ['csscomb-lib', 'csscomb-src', 'csscomb-other']);

gulp.task('build', ['less']);
gulp.task('default', ['build']);
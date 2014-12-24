var gulp = require('gulp'),
	gutil = require('gulp-util'),
	coffee = require('gulp-coffee'),
	concat = require('gulp-concat'),
	transform = require('vinyl-transform'),
	browserify = require('browserify'),
	compass = require('gulp-compass'),
	connect = require('gulp-connect');

var coffeeSources = ["components/coffee/*.coffee"];
var jsSources = ["components/scripts/*.js"];
var sassSources = ["components/sass/styles.scss"];

gulp.task('coffee', function() {
	gulp.src(coffeeSources)
		.pipe(coffee({ bare: true })
			.on('error', gutil.log))
		.pipe(gulp.dest('components/scripts'))
});

gulp.task('browserify', function() {
	var browserified = transform(function(filename) {
		var b = browserify(filename);
		return b.bundle();
	});

	return gulp.src(jsSources)
			.pipe(browserified)
			.pipe(concat('bundle.js'))
			.pipe(gulp.dest('builds/development/js'))
			.pipe(connect.reload());
});

gulp.task('compass', function() {
	gulp.src(sassSources)
		.pipe(compass({
			sass: 'components/sass',
			image: 'builds/development/images',
			style: 'expanded',
			require: ['susy', 'breakpoint']
		})
			.on('error', gutil.log))
		.pipe(gulp.dest("builds/development/css"))
		.pipe(connect.reload());
});

gulp.task('watch', function() {
	gulp.watch(coffeeSources, ['coffee']);
	gulp.watch(jsSources, ['browserify']);
	gulp.watch("components/sass/*.scss", ['compass']);
});

gulp.task('connect', function() {
	connect.server({
		root: 'builds/development/',
		livereload: true
	});
});

gulp.task('default', ['coffee', 'browserify', 'compass', 'connect', 'watch']);
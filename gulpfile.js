var gulp = require('gulp'),
	gutil = require('gulp-util'),
	coffee = require('gulp-coffee'),
	concat = require('gulp-concat'),
	transform = require('vinyl-transform'),
	browserify = require('browserify'),
	compass = require('gulp-compass');

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
			.pipe(gulp.dest('builds/development/js'));
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
});

gulp.task('watch', function() {
	gulp.watch(coffeeSources, ['coffee']);
	gulp.watch(jsSources, ['browserify']);
	gulp.watch("components/sass/*.scss", ['compass']);
});

gulp.task('default', ['coffee', 'browserify', 'compass', 'watch']);
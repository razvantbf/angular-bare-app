var gulp = require('gulp'),
	gutil = require('gulp-util'),
	coffee = require('gulp-coffee'),
	concat = require('gulp-concat'),
	transform = require('vinyl-transform'),
	browserify = require('browserify'),
	compass = require('gulp-compass'),
	connect = require('gulp-connect');

var env, 
	coffeeSources, 
	jsSources, 
	sassSources,
	outputDir,
	sassStyle;

// --------------------------------------------------------------------------------------
// set the enviorment and change the way we process based on that
// --------------------------------------------------------------------------------------

env = "development";
// env = "production";

if (env === "development") {
	outputDir = "builds/development";
	sassStyle = "expanded";
} else {
	outputDir = "builds/production";
	sassStyle = "compressed";
}

// --------------------------------------------------------------------------------------
// code sources
// --------------------------------------------------------------------------------------

coffeeSources = ['components/coffee/*.coffee'];
jsSources = ['components/scripts/*.js'];
sassSources = ['components/sass/styles.scss'];

// --------------------------------------------------------------------------------------
// gulp tasks
// --------------------------------------------------------------------------------------

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
			.pipe(gulp.dest(outputDir + '/js'));
});

gulp.task('compass', function() {
	gulp.src(sassSources)
		.pipe(compass({
			sass: 'components/sass',
			image: outputDir + '/images',
			style: sassStyle,
			require: ['susy', 'breakpoint']
		})
			.on('error', gutil.log))
		.pipe(gulp.dest(outputDir + '/css'));
});

gulp.task('watch', function() {
	gulp.watch(coffeeSources, ['coffee']);
	gulp.watch(jsSources, ['browserify']);
	gulp.watch("components/sass/*.scss", ['compass']);
});

gulp.task('connect', function() {
	connect.server({
		root: outputDir + '/',
		livereload: false
	});
});

gulp.task('default', ['coffee', 'browserify', 'compass', 'connect', 'watch']);
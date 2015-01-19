var gulp = require('gulp'),
	gutil = require('gulp-util'),
	coffee = require('gulp-coffee'),
	concat = require('gulp-concat'),
	compass = require('gulp-compass'),
	uglify = require('gulp-uglify'),
	minifyhtml = require('gulp-minify-html'),
	connect = require('gulp-connect');

var coffeeSources, 
	jsSources, 
	sassSources.
	htmlSources;

// --------------------------------------------------------------------------------------
// code sources
// --------------------------------------------------------------------------------------

coffeeSources = ['components/coffee/*.coffee', 'components/coffee/**/*.coffee'];
jsSources = ['components/scripts/*.js', 'components/scripts/**/*.js'];
sassSources = ['components/sass/styles.scss'];
htmlSources = ['build/*.html', 'build/partials/*.html'];

// --------------------------------------------------------------------------------------
// gulp tasks
// --------------------------------------------------------------------------------------

gulp.task('coffee', function() {
	gulp.src(coffeeSources)
		.pipe(coffee({ bare: true })
			.on('error', gutil.log))
		.pipe(gulp.dest('components/scripts'))
});

gulp.task('javascript', function() {
	gulp.src(jsSources)
		.pipe(concat('custom.js'))
		// .pipe(uglify())
		.pipe(gulp.dest('build/js'));
});

gulp.task('compass', function() {
	gulp.src(sassSources)
		.pipe(compass({
			sass: 'components/sass',
			image: 'build/images',
			// require: ['susy', 'breakpoint'],
			style: 'expanded'
			// style: 'compressed'
		})
			.on('error', gutil.log))
		.pipe(gulp.dest('build/css'));
});

gulp.task('watch', function() {
	gulp.watch(coffeeSources, ['coffee']);
	gulp.watch(jsSources, ['javascript']);
	gulp.watch("components/sass/*.scss", ['compass']);
	gulp.watch(htmlSources, ['html']);
});

gulp.task('connect', function() {
	connect.server({
		root: outputDir + '/',
		livereload: false
	});
});

gulp.task('default', ['coffee', 'javascript', 'compass', 'html', 'connect', 'watch']);
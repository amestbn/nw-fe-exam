var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var bs = require('browser-sync').create();

var config = {
  bulmaDir: './node_modules/bulma',
  assetsDir: './assets'
};

// Reload browser on change
gulp.task('serve', ['sass'], function() {
	bs.init({
		server: '.'
	});

	gulp.watch('assets/scss/**/*.scss', ['sass']);
	gulp.watch('*.html').on('change', bs.reload);
});

// Compile CSS
gulp.task('sass', function () {
  return gulp.src(config.assetsDir + '/scss/**/*.scss')
    .pipe(sourcemaps.init())
		.pipe(sass({
        outputStyle: 'compressed', 
        includePaths: [config.bulmaDir, config.assetsDir + '/scss']
      }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.assetsDir + '/css'))
    .pipe(bs.stream());
});

gulp.task('default', ['serve']);
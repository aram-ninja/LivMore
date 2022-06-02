var gulp = require('gulp'),
	browserSync = require('browser-sync').create(),
	less = require('gulp-less'),
	sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    notify = require("gulp-notify")

gulp.task('serve', function()
{
	browserSync.init({server: {baseDir: "./app/"}})

    gulp.watch("./app/**/*.html").on('change', browserSync.reload)

    gulp.watch("./app/less/**/*.less", gulp.series('less'))

    gulp.watch("./app/sass/**/*.scss", gulp.series('sass'))
})

gulp.task('less', function()
{
	return gulp.src('./app/less/main.less')
        .pipe(plumber({
            errorHandler: notify.onError(function (err) {
                return {
                    title: 'Styles',
                    message: err.message
                }
            })
        }))
    	.pipe(less())
    	.pipe(gulp.dest('./app/css'))
    	.pipe(browserSync.stream())
})

gulp.task('sass', function()
{
	return gulp.src('./app/sass/style.scss')
    	.pipe(sass())
    	.pipe(gulp.dest('./app/css'))
    	.pipe(browserSync.stream())
})

gulp.task('default', gulp.series('serve'))

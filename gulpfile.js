'use strict';

var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    sourcemaps   = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
    return gulp.src('./frontend/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 15 versions']
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./frontend/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./frontend/scss/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'sass:watch']);
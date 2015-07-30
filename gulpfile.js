'use strict';

var gulp = require('gulp');
var g = require('gulp-load-plugins')();
var del = require('del');

var DIST = 'dist';
var SRC = 'scss';

gulp.task('clean', function(done){
  del(DIST+'/burgermeister.css',done);
});

gulp.task('sass', ['clean'],function(){
  return gulp.src(SRC + '/burgermeister.scss')
    .pipe(g.plumber({errorHandler: g.notify.onError('SASS: <%= error.message %>')}))
    .pipe(g.sass())
    .pipe(g.autoprefixer())
    .pipe(gulp.dest(DIST));
});

gulp.task('watch', ['sass'],function(){
  gulp.watch(SRC + '/**/*.scss', ['sass']);
});

gulp.task('default', ['watch']);

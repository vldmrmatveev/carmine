var gulp = require('gulp');
var pug = require('gulp-pug');
var stylus = require('gulp-stylus');
var minifyCSS = require('gulp-csso');
var newer = require('gulp-newer');
var del = require('del');
var browserSync = require('browser-sync').create();

gulp.task('clean', function(){
  del.sync('dist'); 
});
gulp.task('js', function(){
  return gulp.src('app/js/**', {base: 'app'})
    .pipe(gulp.dest('dist'))
});
gulp.task('libs', function(){
  return gulp.src('app/libs/**', {base: 'app'})
    .pipe(gulp.dest('dist'))
});
gulp.task('images', function(){
  return gulp.src('app/images/**', {base: 'app'})
    .pipe(gulp.dest('dist'))
});
gulp.task('img', function(){
  return gulp.src('app/img/**', {base: 'app'})
    .pipe(gulp.dest('dist'))
});
gulp.task('html', function(){
  return gulp.src('app/*.pug', {base: 'app'})
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('dist'))
});
gulp.task('css', function(){
  return gulp.src('app/css/**/*.*', {base: 'app'})
    .pipe(gulp.dest('dist'))
});
gulp.task('stylus', function(){
  return gulp.src('app/css/styles.styl', {base: 'app'})
    .pipe(stylus())
    //.pipe(minifyCSS())
    .pipe(gulp.dest('dist'))
});
gulp.task('serve', ['stylus', 'html'], function() {
    browserSync.init({
        server: './dist'
    });
    gulp.watch('app/css/styles.styl', ['stylus']).on('change', browserSync.reload);
    gulp.watch('app/*.pug', ['html']).on('change', browserSync.reload);
    gulp.watch('app/js/**', ['js']).on('change', browserSync.reload);
});

gulp.task('default', [ 'serve', 'css', 'img', 'libs', 'js', 'clean', 'images' ]);
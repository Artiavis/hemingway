var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

const buildRelease = (cb) => {
  gulp.src('sass/style.sass')
  .pipe(sass({outputStyle: 'compressed'}))
  .pipe(autoprefixer())
  .pipe(gulp.dest('static/css/'))
  .on('end', () => cb());
}

const watch = () => {
  gulp.watch('sass/style.sass', { ignoreInitial: false }, function(cb) {
    gulp.src('sass/style.sass')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer())
    .pipe(gulp.dest('static/css/'))
    .on('end', () => cb());
  })
}

exports.default = buildRelease;
exports.watch = watch;

import gulp, {series, parallel} from 'gulp';
import del from 'del';
// import plumber from 'gulp-plumber';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';

const DIST = 'dist';
const SRC = 'scss';

const clean = () => {
  return del(`${DIST}/burgermeister.css`);
}

const watch = () => {
  gulp.watch(`${SRC}/**/*.scss`, series('style'));
}

const style = () => {
  return gulp.src(`${SRC}/burgermeister.scss`)
  // .pipe(plumber())
  .pipe(sass())
  .pipe(autoprefixer())
  .pipe(gulp.dest(DIST));
}

const build = gulp.series(clean, style);

gulp.task('clean', clean);

gulp.task('style', style);

gulp.task('watch', watch);

gulp.task('default', build);

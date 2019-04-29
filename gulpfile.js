const
  gulp = require('gulp'),
  babel = require('gulp-babel'),
  newer = require('gulp-newer'),
  imagemin = require('gulp-imagemin'),
  htmlclean = require('gulp-htmlclean'),
  uglify = require('gulp-uglify'),
  sass = require('gulp-sass'),
  rename = require('gulp-rename'),
  postcss = require('gulp-postcss'),
  assets = require('postcss-assets'),
  autoprefixer = require('autoprefixer'),
  mqpacker = require('css-mqpacker'),
  cssnano = require('cssnano')

const devBuild = (process.env.NODE_ENV !== 'production')
const folder = {
  src: 'src/',
  build: 'build/'
}

gulp.task('images', () => {
  const out = folder.build + 'img/'
  return gulp
    .src(folder.src + 'img/**/*')
    .pipe(newer(out))
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest(out))
})

gulp.task('html', gulp.parallel('images', () => {
  const out = folder.build + 'html/'
  let page = gulp
      .src(folder.src + 'html/**/*')
      .pipe(newer(out))

  if (!devBuild) {
    page = page.pipe(htmlclean())
  }

  return page.pipe(gulp.dest(out))
}))

gulp.task('js', () => {
  let jsbuild = gulp
    .src(folder.src + 'js/**/*')
    .pipe(babel())

  if (!devBuild) {
    jsbuild = jsbuild
      .pipe(uglify())
  }
 
  return jsbuild.pipe(gulp.dest(folder.build + 'js/'))
})

gulp.task('css', gulp.parallel('images', () => {
  var postCssOpts = [
    assets({loadPaths: ['images/']}),
    autoprefixer({
      browsers: ['last 2 versions', '> 2%']
    }),
    mqpacker
  ];

  if (!devBuild) {
    postCssOpts.push(cssnano);
  }

  return gulp
    .src(folder.src + 'scss/main.scss')
    .pipe(sass({outputStyle: 'nested', imagePath: 'images/', precision: 3, errLogToConsole: true}))
    .pipe(postcss(postCssOpts))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(folder.build + 'css/'))
}))

gulp.task('fonts', () => {
  return gulp
    .src(folder.src + 'fonts/**/*')
    .pipe(gulp.dest(folder.build + 'fonts/'))
})

gulp.task('build', gulp.parallel('html', 'css', 'js', 'fonts'))

gulp.task('watch', function () {
  gulp.watch(folder.src + 'img/**/*', gulp.parallel('images'))
  gulp.watch(folder.src + 'html/**/*', gulp.parallel('html'))
  gulp.watch(folder.src + 'js/**/*', gulp.parallel('js'))
  gulp.watch(folder.src + 'scss/**/*', gulp.parallel('css'))
  gulp.watch(folder.src + 'fonts/*', gulp.parallel('fonts'))
});

gulp.task('default', gulp.parallel('build', 'watch'))
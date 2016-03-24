var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    minifyCSS = require('gulp-minify-css'),
    webserver = require('gulp-webserver'),
    uglify = require('gulp-uglify'),
    minifyHTML = require('gulp-minify-html');

var externalJsFiles = [
  'node_modules/angular/angular.min.js',
  'node_modules/angular-ui-router/release/angular-ui-router.min.js'
];

var jsFiles = [
    'src/app/main.js',
    'src/app/*/**/*.js'
];

gulp.task('default', function() {
    gulp.src('src/scss/main.scss')
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(rename({
            suffix: '.min'
         }))
        .pipe(gulp.dest('dist'));

    gulp.src('src/app/views/*/*.html')
        .pipe(minifyHTML())
        .pipe(gulp.dest('dist'));

    gulp.src('src/index.html')
        .pipe(minifyHTML())
        .pipe(gulp.dest('dist'));

    gulp.src(externalJsFiles.concat(jsFiles))
        .pipe(uglify())
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest('dist'));

    gulp.src('dist')
        .pipe(webserver({
          proxies: [
            {
              source: '/api',
              target: 'https://api.github.com'
            }
          ]
        }));
});

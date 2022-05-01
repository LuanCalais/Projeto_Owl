import gulp from 'gulp';
import rename from 'gulp-rename';
import cssMin from 'gulp-clean-css';
import jsMin from 'gulp-uglify';
import imagemin from 'gulp-imagemin';

// Css Minify
const css_from = 'assets/css/style.css';
const css_to = 'assets/css/';
gulp.task('minify-css', () => {
    return gulp.src(css_from)
        .pipe(cssMin().on('error', (err) => {
            console.log(`Ocorreu um erro no minify-css: ${err}`)
        }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(css_to));
});

// Js Minify
const js_from = 'assets/js/main.js';
const js_to = 'assets/js/';
gulp.task('minify-js', () => {
    return gulp.src(js_from)
        .pipe(jsMin().on('error', (err)=>{
            console.log(`Ocorreu um erro no minify-js: ${err}`)
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(js_to));
});

// Watch
gulp.task('default', () => {
    gulp.watch(['assets/css/*', 'assets/js/*'], gulp.series('minify-css', 'minify-js'));
})
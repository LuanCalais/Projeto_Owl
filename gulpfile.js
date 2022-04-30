import gulp from 'gulp';
import rename from 'gulp-rename';
import cssMin from 'gulp-clean-css';
import jsMin from 'gulp-uglify';
import imagemin from 'gulp-imagemin';

// Css Minify
const css_from = 'assets/css/style.css';
const css_to = 'assets/css/';
gulp.task('minify-css', ()=>{
    return gulp.src(css_from)
    .pipe(cssMin().on('error', (err)=>{
        console.log(`Ocorreu um erro no minify-css: ${err}`)
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(css_to));
});

// Watch
gulp.task('default', ()=>{
    gulp.watch(['assets/css/*'], gulp.series('minify-css'));
})
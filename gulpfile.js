import babel from 'gulp-babel';
import Cache from 'gulp-file-cache';

let cache = new Cache();

const SRC = 'develop/server/**/*.js';

const OUTPUT = 'test';

gulp.task('babel', () => {
    return gulp.src(SRC.SERVER)
    .pipe(cache.filter())
    .pipe(babel({
       presets: ['es2015']
    }))
    .pipe(cache.cache())
    .pipe(gulp.dest(OUTPUT));
}); //server

gulp.task('watch', () => {
    
});

gulp.task('default', ['babel']);
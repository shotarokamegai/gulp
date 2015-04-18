var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var reload      = browserSync.reload;

gulp.task('browser-sync', function() {
  browserSync({
    server: {
        baseDir: "./"
    }
  });
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("sass/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./stylesheets"))
        .pipe(reload({stream: true}));
});

gulp.task('default', ['browser-sync'], function () {

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch("sass/*.scss", ['sass', browserSync.reload]);
    gulp.watch("*.html").on('change', reload);
});

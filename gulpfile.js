var gulp = require("gulp");

var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "intro",
            index: "index.html"
        }
    });
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});

// src 配下の *.html, *.css ファイルが変更されたリロード。
gulp.task('default', ['browser-sync'], function () {
    gulp.watch("intro/ex*/*.html", ['bs-reload']);
    gulp.watch("intro/ex*/*.css", ['bs-reload']);
    gulp.watch("intro/ex*/*.js", ['bs-reload']);
});

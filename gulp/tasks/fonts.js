module.exports = function() {
    $.gulp.task("fonts", function() {
        return $.gulp.src(["./src/fonts/**/*.{ttf,woff,woff2,otf,svg}"])
            .pipe($.gulp.dest("./dest/fonts/"));
    });
};
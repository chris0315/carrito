const gulp = require("gulp")
const gulpSass = require("gulp-sass")
const gulpAutoprefixers = require("gulp-autoprefixer")

function css() {
    return gulp
        .src("../scss/app.scss")
        .pipe(gulpAutoprefixers({
            overrideBrowserslist: ["last 2 version"],
            cascade: false
        }))
        .pipe(gulpSass({
            outputStyle: "expanded"

        }))
        .pipe(gulp.dest("../css"))
}

function watchFile() {
    gulp.watch("../scss/*.scss", css)
}

//registrar funcion como tarea
gulp.task("css", css)
gulp.task("watch", watchFile)
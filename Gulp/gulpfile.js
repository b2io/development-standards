// Initialize modules
const { src, dest, watch, series, parallel } = require("gulp");
// - importing npm packages
const sourcemaps = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const replace = require("gulp-replace");

// path variables
const files = {
  scssPath: "app/scss/**/*.scss",
  jsPath: "app/js/**/*.js",
};

// SASS TASK
// compiles sass files
function scssTask() {
  return src(files.scssPath)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write("."))
    .pipe(dest("dist"));
}

// JS TASK
// concat and minify js files, adds minified js to dist folder
function jsTask() {
  return src(files.jsPath)
    .pipe(concat("all.js"))
    .pipe(uglify())
    .pipe(dest("dist"));
}

// CACHE BUSTING
// clears cache when css & js changes are made
// /"cacheBusting" attribute is added to stylesheet link, and script link in index.html
// /to track changes by milliseonds of the time file is saved.
const cacheBustingString = new Date().getTime();
function cacheBustingTask() {
  return src(["index.html"])
    .pipe(replace(/cacheBusting=\d+/g, `cacheBusting=${cacheBustingString}`))
    .pipe(dest("."));
}

// WATCH TASK
// Monitors files to detect changes in files before running scssTask and jsTask
function watchTask() {
  watch([files.scssPath, files.jsPath], parallel(scssTask, jsTask));
}

// DEFAULT TASK
// main gulp task, needs to be publicly accessible by command line
exports.default = series(
  parallel(scssTask, jsTask),
  cacheBustingTask,
  watchTask
);

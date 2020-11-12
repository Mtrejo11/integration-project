"use strict";

let gulp = require("gulp");
let jshint = require("gulp-jshint");

gulp.task("default", () => {
  return Promise.resolve(gulp.series("jshint", "test", "serve"));
});
gulp.task("jshint", () => {
  return gulp.src("./*.js").pipe(jshint()).pipe(jshint.reporter("default"));
});
gulp.task("test", () => {
  return Promise.resolve(require("./test.js"));
});
gulp.task("serve", () => {
  require("./main.js");
});

# gulp-jfogs
[jfogs](https://github.com/zswang/jfogs) plugin for gulp

install:
```sh
npm i gulp-jfogs
```

Example use:
```js
var gulp = require('gulp'),
  jfogs = require('gulp-jfogs');

gulp.task('js', function() {
  gulp.src('index.js')
    .pipe(jfogs())
    .pipe(gulp.dest('public'));
});

gulp.task('default', ['js']);
```

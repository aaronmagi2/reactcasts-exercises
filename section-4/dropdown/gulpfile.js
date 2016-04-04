// setup for gulp
var gulp = require('gulp');
var gutil = require('gulp-util');// print command line details/logging
var source = require('vinyl-source-stream');
var browserify = require('browserify'); // used for linking and imports
var watchify = require('watchify'); // tool that automatically reruns gulp for each file change
var reactify = require('reactify'); // handle converting JSX to JS

gulp.task('default', function() {
  var bundler = watchify(browserify({
    entries: ['./src/app.jsx'],
    transform: [reactify], // tells it what is used to transform the files
    extensions: ['.jsx'], // use these file types
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  }));

  function build(file) {
    if (file) gutil.log('Recompiling ' + file);
    return bundler
      .bundle()
      .on('error', gutil.log.bind(gutil, 'Browserify Error')) // if any errors in the bundle process put the output in he console
      .pipe(source('main.js')) // put everything into main.js
      .pipe(gulp.dest('./')); // set dest to put the file
  };
  build();
  bundler.on('update', build);
});

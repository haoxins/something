'use strict'

const $ = require('gulp-load-plugins')()
const sequence = require('run-sequence')
const gulp = require('gulp')

const tempDir = '../.temp/mobile'
const destDir = '../build/mobile'

/**
 * js
 */

gulp.task('babel', function() {
  return gulp.src(['./*/*.js'])
    .pipe($.babel({
      // TODO: stage++
      loose: 'all',
      stage: 0
    }))
    .pipe(gulp.dest(tempDir + '/babel/'))
})

gulp.task('pack:index', function() {
  return gulp.src(tempDir + '/babel/entry/index.js')
    .pipe($.webpack({
      output: {
        filename: 'index.js'
      }
    }))
    .pipe(gulp.dest(tempDir + '/js/'))
})

/**
 * css
 */

gulp.task('scss', function() {
  return $.rubySass('./entry/')
    .on('error', console.error.bind(console))
    .pipe(gulp.dest(tempDir + '/css/'))
})

/**
 * minify
 */

gulp.task('minify', function() {
  return gulp.src([tempDir + '/js/*.js', tempDir + '/css/*.css'])
    .pipe($.if('*.css', $.csso()))
    .pipe($.if('*.js', $.uglify({
      mangle: false
    })))
    .pipe($.rename(function(path) {
      path.extname = '.min' + path.extname
    }))
    .pipe(gulp.dest(destDir))
})

/**
 * copy
 */

gulp.task('copy', function() {
  let srcs = [
    '../node_modules/react/dist/react*.js',
    tempDir + '/css/*.css',
    tempDir + '/js/*.js'
  ]

  return gulp.src(srcs)
    .pipe(gulp.dest(destDir))
})

/**
 * build
 */

gulp.task('build', function(done) {
  sequence(
    ['babel', 'scss'],
    ['pack:index'],
    ['minify'],
    ['copy'], done)
})

gulp.task('default', function() {
  gulp.watch(['**/*.*'], ['build'])
})

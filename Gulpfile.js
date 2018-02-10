var fs = require('fs');
var gulp = require('gulp');
var babel = require('gulp-babel');
var through = require('through2');
var del = require('del');
var runSequence = require('run-sequence');

gulp.task('dev', function () {
    return gulp.src(['./lib/**/*.js', '!./lib/blueprints/**/*.js'])
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('copy', function () {
    gulp.src('./lib/blueprints/**/**', {
            base: "./lib"
        })
        .pipe(gulp.dest('./dist'));

    gulp.src('./lib/config/config.json')
        .pipe(gulp.dest('./dist/config'));

    gulp.src('./dist/vgc.js', {read: false})
        .pipe(through.obj(function (file, enc, callback) {
            fs.chmodSync(file.path, parseInt(755, 8));
            return callback(null, file);
        }));
});

gulp.task('clean', function () {
    return del([
        'dist/**'
    ]);
});

gulp.task('build', function (callback) {
    runSequence('clean',
        'dev',
        'copy',
        callback);
});

var gulp = require('gulp');
var watch = require('gulp-watch');
var browserify = require('gulp-browserify');
var webserver = require('gulp-webserver');
var uglify = require('gulp-uglify');
var pump = require('pump');

var src = './source';
var app = './public';

gulp.task('html', function(){
});

gulp.task('css', function(){
});

gulp.task('js', function(){
    return gulp.src( src + '/js/*.js')
    .pipe(browserify({
            transform : 'reactify',
            debug : true
    }))
    .on('error', function(err){
        console.log('Error: ', err.message);
    })
    .pipe(gulp.dest( app + '/js' ));
});

gulp.task('js-compress',['js'], function () {
  pump([
        gulp.src(src + 'js/*.js'),
        uglify(),
        gulp.dest( app + '/dist/js')
    ]
  );
});

gulp.task('watch', function () {  
    gulp.watch(src + '/*.html', ['html']);
    gulp.watch(src + '/css/*.css', ['css']);
    gulp.watch(src + '/js/*.js', ['js']);
});

gulp.task('webserver', function() {
  gulp.src(app)
    .pipe(webserver({
      livereload: false,
      directoryListing: {
        enable:true,
        path: app
      },
      open: true,
      port : 3003,
    }));
});

gulp.task('default', ['watch','webserver']);
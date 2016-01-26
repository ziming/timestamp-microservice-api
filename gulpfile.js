// gulp is just a task runner so we node nodemon
var gulp = require('gulp'),
    nodemon = require('gulp-nodemon');
    
gulp.task('default', function() {
    nodemon({
        script : 'server.js',
        ext : 'js',
        env : {
            port : 8080
        },
        ignore : ['./node_modules/**']
    }).on('restart', function() {
        console.log('Restarting');
    });
});

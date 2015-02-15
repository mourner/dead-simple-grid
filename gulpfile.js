var gulp     = require( 'gulp' ),
    inquirer = require( 'inquirer' ),
    $        = require( 'gulp-load-plugins' )();

var config = {
    paths: {
        src:   './src/',
        dist:  './dist/'
    }
};

gulp.task( 'default', [ 'watch' ]);

gulp.task( 'release', [ 'compile', 'bump' ] );

gulp.task( 'compile', function()
{
    return gulp.src( config.paths.src + 'grid.scss' )
        .pipe( $.sass() )
        .pipe( $.csslint( {
            'box-sizing' : false
        }))
        .pipe( $.csslint.reporter() )
        .pipe( gulp.dest( config.paths.dist ) )
        .pipe( $.cssmin() )
        .pipe( $.rename( 'grid.min.css' ) )
        .pipe( gulp.dest( config.paths.dist ) );

});

gulp.task( 'bump', function( done )
{
    inquirer.prompt( {
        type    : 'list',
        name    : 'bump',
        message : 'What type of bump would you like to do?',
        choices : ['patch', 'minor', 'major', "don't bump"]
    },
    function( result ) {
        if( result.bump === "don't bump" ){
            done();
            return;
        }

        return gulp.src( ['./bower.json', './package.json'] )
            .pipe( $.bump( {
                type: result.bump
            }))
            .pipe( gulp.dest( './' ) )
            .on('end', done);
    });
});

gulp.task( 'watch', [ 'compile' ], function()
{
    gulp.watch( config.paths.src + '**/*', [ 'compile' ] );
});

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

var files = {
	build: 'build/**/*.*',
	buildJS: 'build/code.js',
	buildCSS: 'build/styles.css',
	css: 'css/**/*.css',
	filePaths: ['css/**/*.css', 'ts/Services/*.js', 'ts/Models/*.js', 'ts/Interfaces/*.js', 'ts/Controllers/*.js', 'ts/App.js'],
	index: '../Views/Home/Index.cshtml',
	indexBkp: '../Views/Home/Index.cshtml.bkp',
	js: 'js/**/*.js',
	scss: 'scss/*.scss',
	scssAll: 'scss/**/*.scss'
};

var paths = {
    general: '../',
	build: 'build',
	css: 'css',
	project: '../Views/Home/',
	scss: 'scss',
    js: 'js'
};

// Compile Sass
gulp.task('sass', function(){
	return gulp.src(files.scss)
		.pipe(plugins.sass())
		.pipe(plugins.autoprefixer({
		    browsers: ['last 2 version']
		}))
		.pipe(gulp.dest(paths.css));
});

// Inject JS & CSS Files
gulp.task('inject', ['clear', 'sass'], function() {
	return gulp.src(files.index)
		.pipe(plugins.inject(
			gulp.src(files.filePaths, { read: false }),
			{
				transform: function (filepath) {
					if (filepath.indexOf('.js') > -1) {
						return '<script src="Content/' + filepath.slice(1) + '"></script>'
					}
					// Css
					return ' <link rel="stylesheet" href="Content' + filepath + '">'
				}
			}
		))
		.pipe(gulp.dest(paths.project));
});

// Celan specific folders
gulp.task('clear', function () {

	// If exist indexBkp replace normal index and delete this
    gulp.src(files.indexBkp)
		.pipe(plugins.rename('Index.cshtml'))
		.pipe(gulp.dest(paths.project)); 

	//return gulp.src(files.build, { read: false })
	//   .pipe(plugins.clean({ force: true }));
});

// Build Files
gulp.task('buildFiles', ['sass', 'inject', 'default'], function () {
	// Save index
	gulp.src(files.index)
		.pipe(plugins.clone())
		.pipe(plugins.rename('Index.cshtml.bkp'))
		.pipe(gulp.dest(paths.project));

	// Build files
	return gulp.src(files.index)
		.pipe(plugins.usemin(
			{
				css: [plugins.minifyCss()],
				js: /*[plugins.uglify()]*/[]
			}
		))
        .pipe(plugins.convertEncoding({ to: 'utf8' }))
		.pipe(gulp.dest(paths.general));
});

//relocate index
gulp.task('relocateIndex',['buildFiles'], function () {
    gulp.src(paths.general + '/Index.cshtml').pipe(gulp.dest(paths.project));
    return gulp.src(paths.general + '/Index.cshtml').pipe(plugins.clean({ force: true }));
});

// Init watch
gulp.task('watch', function () {
	gulp.watch(files.js, ['inject']);
	gulp.watch(files.scssAll, ['sass', 'inject']);
});

gulp.task('default', ['clear', 'inject', 'sass']);
gulp.task('build', ['default', 'buildFiles', 'relocateIndex']);

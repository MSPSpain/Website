var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

var files = {
	build: 'build/**/*.*',
	buildJS: 'build/code.js',
	buildCSS: 'build/styles.css',
	css: 'css/**/*.css',
	filePaths: ['ts/Services/*.js', 'ts/Models/*.js', 'ts/Interfaces/*.js', 'ts/Controllers/*.js', 'ts/App.js'],
	index: '../Views/Home/Index.cshtml',
	indexBkp: '../Views/Home/Index.cshtml.bkp',
	scss: 'scss/*.scss',
	scssAll: 'scss/**/*.scss'
};

var paths = {
	build: 'build',
	css: 'css',
	project: '../Views/Home/',
	scss: 'scss'
};

// Compile Sass
gulp.task('sass', function(){
	return gulp.src(files.scss)
		.pipe(plugins.sass())
		.pipe(plugins.autoprefixer({
		    browsers: ['last 2 version', 'ios 6', 'android 4']
		}))
		.pipe(gulp.dest(paths.css));
});

// Inject JS & CSS Files
gulp.task('inject', function() {
	return gulp.src(files.index)
		.pipe(plugins.inject(
			gulp.src(files.filePaths, { read: false }),
			{
				transform: function (filepath) {
					if (filepath.indexOf('.js') > -1) {
						return '<script src="/Content/' + filepath.slice(1) + '"></script>'
					}
					// Css
					return ' <link rel="stylesheet" href="Content/' + filepath + '">'
				}
			}
		))
		.pipe(gulp.dest(paths.project));
});

// Celan specific folders
gulp.task('clear', function () {

	// If exist indexBkp replace normal index and delete this
	gulp.src(files.indexBkp)
		.pipe(plugins.rename('default.html'))
		.pipe(gulp.dest(paths.project)); 

	return gulp.src(files.build, { read: false })
	   .pipe(plugins.clean({ force: true }));
});

// Build Files
gulp.task('buildFiles', function() {
	// Save index
	gulp.src(files.index)
		.pipe(plugins.clone())
		.pipe(plugins.rename('default.html.bkp'))
		.pipe(gulp.dest(paths.project));

	// Build files
	gulp.src(files.index)
		.pipe(plugins.usemin(
			{
				css: [plugins.minifyCss()],
				js: [plugins.uglify()]
			}
		))
		.pipe(gulp.dest(paths.project));
	
	gulp.src(files.buildJS)
		.pipe(plugins.uglify())
		.pipe(gulp.dest(paths.build));

	return gulp.src(files.buildCSS)
		.pipe(plugins.minifyCss())
		.pipe(gulp.dest(paths.build));
});

// Init watch
gulp.task('watch', function () {
	gulp.watch(files.js, ['inject']);
	gulp.watch(files.scssAll, ['sass', 'inject']);
});

gulp.task('default', ['clear', 'inject', 'sass']);
gulp.task('build', ['default', 'buildFiles']);

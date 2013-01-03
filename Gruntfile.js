/*global module:false*/

module.exports = function(grunt) {
	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		meta: {
			js_banner: '/**\n' +
				'* <%= pkg.name %>\n' +
				'*\n' +
				'* @version	<%= pkg.version %>\n' +
				'* @author	<%= pkg.author %>\n' +
				'* @require	jQuery 1.8.3\n' +
				'*			Hammer.js\n' +
				'* @license	<%= pkg.licenses[0].type %> - <%= pkg.licenses[0].url %>\n' +
				'**/\n'
		},
		sass: {
			dev: {
				files: {
					'assets/css/style.css': 'assets/css/style.scss',
					'assets/css/style_small.css': 'assets/css/style_small.scss',
					'assets/css/style_medium.css': 'assets/css/style_medium.scss',
					'assets/css/style_large.css': 'assets/css/style_large.scss'
				}
			}
		},
		mincss: {
			build: {
				files: {
					'dist/assets/css/reset.min.css': ['assets/css/reset.css'],
					'dist/assets/css/style.min.css': ['assets/css/style.css'],
					'dist/assets/css/style_small.min.css': ['assets/css/style_small.css'],
					'dist/assets/css/style_medium.min.css': ['assets/css/style_medium.css'],
					'dist/assets/css/style_large.min.css': ['assets/css/style_large.css']
				}
			}
		},
		jasmine: {
			tests: {
				src: 'assets/js/**/*.js',
				options: {
					specs: 'test/spec/**/*_spec.js',
					helpers: 'test/spec/**/*_helper.js'
				}
			}
		},
		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				boss: true,
				eqnull: true,
				browser: true,
				globals: {
					jQuery: true
				}
			},
			all: ['Gruntfile.js', 'assets/js/script.js']
		},
		concat: {
			libs: {
				src: [
					'assets/js/libs/jquery/jquery-1.8.3.min.js',
					'assets/js/libs/touch/ios-orientationchange-fix.js',
					'assets/js/libs/touch/hammer.js',
					'assets/js/libs/touch/jquery.hammer.js'
				],
				dest: 'dist/assets/js/libs.js'
			}
		},
		uglify: {
			options: {
				banner: '<%= meta.js_banner %>',
				mangle: false
			},
			libs: {
				files: {
					'dist/assets/js/libs.min.js': ['<%= concat.libs.dest %>']
				}
			},
			custom: {
				files: {
					'dist/assets/js/script.min.js': ['assets/js/script.js']
				}
			}
		},
		watch: {
			sass: {
				files: ['assets/css/*.scss'],
				tasks: 'sass'
			},
			lint: {
				files: '<%= jshint.all %>',
				tasks: 'jshint'
			}
		}
	});

	// Load tasks
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-mincss');
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task(s)
	grunt.registerTask('default', ['sass', 'mincss', 'jasmine', 'jshint', 'concat', 'uglify']);
	grunt.registerTask('test', ['jasmine', 'jshint']);
	grunt.registerTask('deploy', ['sass', 'mincss', 'concat', 'uglify']);
};
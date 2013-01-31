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
					'assets/css/style.css': 'assets/scss/style.scss',
					'assets/css/style_small.css': 'assets/scss/style_small.scss',
					'assets/css/style_medium.css': 'assets/scss/style_medium.scss',
					'assets/css/style_large.css': 'assets/scss/style_large.scss'
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
		watch: {
			sass: {
				files: ['assets/scss/**/*.scss'],
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
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task(s)
	grunt.registerTask('default', ['sass', 'jasmine', 'jshint']);
	grunt.registerTask('test', ['jasmine', 'jshint']);
};
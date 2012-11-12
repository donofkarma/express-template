/*global module:false*/

module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		meta: {
			name: 'HTML/CSS/JS Template',
			version: '0.2',
			banner: '/**\n' +
					'* <%= meta.name %>\n' +
					'*\n' +
					'* @version	<%= meta.version %>\n' +
					'* @author	Jasal Vadgama - http://blacklabelcreative.com/\n' +
					'* @require	jQuery 1.8.0\n' +
					'*			Hammer.js\n' +
					'* @license	MIT\n' +
					'**/\n'
		},
		lint: {
			files: ['grunt.js', 'assets/js/script.js']
		},
		qunit: {
			files: ['test/**/*.html']
		},
		concat: {
			libs: {
				src: [
					'assets/js/libs/jquery/jquery-1.8.0.min.js',
					'assets/js/libs/touch/ios-orientationchange-fix.js',
					'assets/js/libs/touch/hammer.js',
					'assets/js/libs/touch/jquery.hammer.js'
				],
				dest: 'dist/assets/js/libs.js'
			}
		},
		min: {
			libs: {
				src: ['<config:concat.libs.dest>'],
				dest: 'dist/assets/js/libs.min.js'
			},
			custom: {
				src: ['<banner:meta.banner>', 'assets/js/script.js'],
				dest: 'dist/assets/js/script.min.js'
			}
		},
		watch: {
			files: '<config:lint.files>',
			tasks: 'lint qunit'
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
				browser: true
			},
			globals: {
				jQuery: true
			}
		},
		uglify: {}
	});

	// Default task.
	//grunt.registerTask('default', 'lint qunit concat min');
	grunt.registerTask('default', 'lint concat min');
};
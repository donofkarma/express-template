module.exports = function(grunt) {
    grunt.initConfig({
        clean: {
            all: ['_site'],
            fonts: ['_site/assets/fonts'],
            images: ['_site/assets/images'],
            sass: ['_site/assets/css'],
            script: ['_site/assets/js']
        },
        copy: {
            fonts: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/fonts/',
                        src: ['**'],
                        dest: '_site/assets/fonts/'
                    }
                ]
            },
            images: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/images/public/',
                        src: ['**'],
                        dest: '_site/assets/images/'
                    }
                ]
            }
        },
        jade: {
            compile: {
                options: {
                    data: {
                        error: {
                            status: '500',
                            message: 'Keyboard cat!'
                        }
                    },
                    pretty: true
                },
                files: [
                    {
                        cwd: "views",
                        src: "*.jade",
                        dest: "_site",
                        expand: true,
                        ext: ".html"
                    }
                ]
            }
        },
        sass: {
            main: {
                files: {
                    '_site/assets/css/style.css': 'src/sass/style.scss'
                }
            }
        },
        cssmin: {
            main: {
                files: {
                    '_site/assets/css/style.css': ['_site/assets/css/style.css']
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
                    $: true,
                    alert: true,
                    console: true,
                    jQuery: true,
                    module: true,
                    require: true,
                    window: true
                }
            },
            all: [
                'src/js/**/*.js'
            ]
        },
        browserify: {
            options: {
                alias: {
                    'jquery': './bower_components/jquery/dist/jquery.js'
                }
            },
            main: {
                src: 'src/js/script.js',
                dest: '_site/assets/js/script.js'
            }
        },
        uglify: {
            options: {
                mangle: {
                    except: ['jQuery']
                }
            },
            deploy: {
                files: {
                    '_site/assets/js/script.js': ['_site/assets/js/script.js']
                }
            }
        },
        watch: {
            fonts: {
                files: ['src/fonts/**/*.*'],
                tasks: ['clean:fonts', 'copy:fonts']
            },
            images: {
                files: ['src/images/public/**/*.*'],
                tasks: ['clean:images', 'copy:images']
            },
            sass: {
                files: ['src/sass/**/*.scss'],
                tasks: ['clean:sass', 'sass']
            },
            script: {
                files: '<%= jshint.all %>',
                tasks: ['jshint', 'clean:script', 'browserify']
            }
        },
        nodemon: {
            main: {
                script: 'app.js'
            }
        },
        concurrent: {
            options: {
                logConcurrentOutput: true
            },
            tasks: ['nodemon', 'watch']
        }
    });

    // Load tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Default task(s)
    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('build', ['clean:all', 'copy', /*'jade',*/ 'sass', 'browserify']);
    grunt.registerTask('deploy', ['test', 'build', 'cssmin', 'uglify']);
    grunt.registerTask('serve', ['concurrent']);
    grunt.registerTask('default', ['build', 'serve']);
};

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        vars: {
            buildDir: '_site',
            cssBuildDir: '_site/assets/css',
            fontsBuildDir: '_site/assets/fonts',
            imagesBuildDir: '_site/assets/images',
            scriptBuildDir: '_site/assets/js'
        },
        clean: {
            all: {
                src: ['<%= vars.buildDir %>']
            },
            fonts: {
                src: ['<%= vars.fontsBuildDir %>']
            },
            images: {
                src: ['<%= vars.imagesBuildDir %>']
            },
            style: {
                src: ['<%= vars.cssBuildDir %>']
            },
            script: {
                src: ['<%= vars.scriptBuildDir %>']
            }
        },
        copy: {
            fonts: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/fonts/',
                        src: ['**'],
                        dest: '<%= vars.fontsBuildDir %>'
                    }
                ]
            },
            images: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/images/public/',
                        src: ['**'],
                        dest: '<%= vars.imagesBuildDir %>'
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
                    '<%= vars.cssBuildDir %>/style.css': 'src/sass/style.scss'
                }
            }
        },
        cssmin: {
            main: {
                files: {
                    '<%= vars.cssBuildDir %>/style.css': ['<%= vars.cssBuildDir %>/style.css']
                }
            }
        },
        jshint: {
            options: {
                jshintrc: './.jshintrc'
            },
            main: ['src/js/**/*.js']
        },
        browserify: {
            main: {
                files: {
                    '<%= vars.scriptBuildDir %>/script.js': ['src/js/script.js'],
                }
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
                    '<%= vars.scriptBuildDir %>/script.js': ['<%= vars.scriptBuildDir %>/script.js']
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
                tasks: ['sass']
            },
            script: {
                files: 'src/js/**/*.*',
                tasks: ['jshint', 'browserify']
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

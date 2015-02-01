module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: {
          js: ['js/kube-*.js', 'js/lightbox-build.js'],
          css: 'css/kube-build.min.css'
        },
        concat: {
            // 2. Configuration for concatinating files goes here.
            js: {
                files: {
                    'js/kube-build.js': ['js/*.js', '!js/imagelightbox.min.js', '!js/lightbox.js'],
                    'js/lightbox-build.js': ['js/imagelightbox.min.js', 'js/lightbox.js']
                }
            }
        },
        uglify: {
            development: {
                files: {
                    'js/kube-build.min.js': 'js/kube-build.js',
                    'js/lightbox-build.min.js': 'js/lightbox-build.js'
                }
            }
        },
        less: {
            development: {
                options: {
                    compress: true // settato a "true" minifica il css
                },
                files: {
                    'css/kube-build.min.css': 'less/kube.less'
                }
            }
        },
        autoprefixer: {
            development: {
                options: {
                    browsers: ['last 2 versions', 'ie 8', 'ie 9']
                },
                files: {
                    'css/kube-build.min.css': 'css/kube-build.min.css'
                }
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'img-build'
                }]
            }
        },
        watch: {
            options: {
                livereload: true,
            },
            html: {
                files: '*.html'
            },
            scripts: {
                files: ['js/*.js',],
                tasks: ['clean:js', 'concat', 'uglify'],
                options: {
                    spawn: false,
                },
            },
            less: {
                files: ['less/*.less'],
                tasks: ['clean:css', 'less', 'autoprefixer'],
                options: {
                    spawn: false,
                },
            },
            images: {
                files: ['img/*.{png,jpg}'],
                tasks: ['imagemin'],
                options: {
                    spawn: false,
                }
            }
        }
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['clean', 'concat', 'uglify', 'less', 'autoprefixer', 'imagemin', 'watch']);
};
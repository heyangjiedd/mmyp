const webpackConfig = require("./webpack.dist.config.js");
const path = require("path");

module.exports = function (grunt) {
    grunt.initConfig({
        webpack: {
            pack: webpackConfig
        },
        clean: {
            pack: ['./pack/*'],
            build: ['./static/index.css', './static/bundle.js']
        },
        copy: {
            pack: {
                expand: true,
                cwd: './static/',
                src: "**",
                dest: "./pack/"
            }
        }
    });
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-webpack");

    grunt.registerTask("pack", ["webpack:pack", "clean:pack", "copy:pack","clean:build"]);
};

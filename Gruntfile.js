module.exports = function(grunt) {

require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

grunt.initConfig({
    babel: {
        options: {
            sourceMap: true,
            presets: ['react']
        },
        dist: {
            files: {
                'dist/app.js': 'src/app.js'
            }
        }
    }
});

grunt.registerTask('default', ['babel']);

}

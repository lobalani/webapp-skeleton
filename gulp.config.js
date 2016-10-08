'use strict';

module.exports = function() {
    var config = {
        //All JavaScript files to lint
        alljs: [
            './*js'
        ],
        //JSHint options config file
        jshintrc: '.jshintrc'
    };

    return config;
};
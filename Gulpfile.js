//require dependencies
var gulp = require('gulp');
var $ = require('gulp-load-plugins')({ lazy: true });

//constants
var EXPECTED_NODE_VERSION = "v5.6.0";

gulp.task('hello-world', function() {
    log('Hello, Welcome to Gulp');
});

//Checking Node version installed on the system.
//Need to have Node.js v5.6.0 for the setup to work correctly
gulp.task('nodeVersion:check', function() {
    log("Checking Node version...");

    var actualVersion = process.version;

    if(actualVersion !== EXPECTED_NODE_VERSION) {
        errorLog("Incorrect Node Version: expected " + EXPECTED_NODE_VERSION + ", but was " + actualVersion);
    } else {
        log("Correct Node Version Installed");
    }
});


/* Helper Functions */

//Log function: outputs the log message in blue
function log(msg) {
    if(typeof(msg) === "object"){
        for(var key in msg){
            if(msg.hasOwnProperty(item)){
                $.util.log($.util.colors.blue(msg[key]));
            }
        }
    } else {
        $.util.log($.util.colors.blue(msg));
    }
};

//Error function : outputs the error message in red
function error(msg) {
    if(typeof(msg) === "object"){
        for(var key in msg){
            if(msg.hasOwnProperty(item)){
                $.util.log($.util.colors.red(msg[key]));
            }
        }
    } else {
        $.util.log($.util.colors.red(msg));
    }
};
/**
 * Log error message and exit the process
 */
function errorLog(errorMsg) {
    error("*** Start of Error ***");
    error(errorMsg);
    error("*** End of Error ***");

    process.exit(-1);
};
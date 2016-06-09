var through = require('through2');
var jfogs = require('jfogs');

var PLUGIN_NAME = 'gulp-jfogs';

module.exports = function() {
    return through.obj(function(file, encoding, callback) {
        if (file.isNull()) {
            return callback(null, file);
        }

        if (file.isStream()) {
            file.contents = file.contents.pipe();
            console.log(file.contents);

            return callback(null, file);
        } else if (file.isBuffer()) {
            var result = jfogs.obfuscate(file.contents.toString());

            file.contents = Buffer.from(result);
            
            return callback(null, file);
        }
    });
};
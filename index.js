var through = require('through2');
var jfogs = require('jfogs');

var PLUGIN_NAME = 'gulp-jfogs';

module.exports = function() {
    return through.obj(function(file, encoding, callback) {
        if (file.isNull()) {
            return callback(null, file);
        }

        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams not supported!'));
        } else if (file.isBuffer()) {
            var result = jfogs.obfuscate(file.contents.toString());

            file.contents = Buffer.from(result);

            return callback(null, file);
        }
    });
};
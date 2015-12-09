var ExifImage = require('exif').ExifImage;

String.prototype.endsWith = function (suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};


module.exports = function (path, callback) {

    if (typeof path !== 'string') {
        callback(new Error("Path must be a string."), path);
    }
    if (typeof callback !== 'function') {
        callback(new Error("callback must be a function."), path);
    }
    if (!path.toLowerCase().endsWith('jpg')) {
        callback(new Error("Path must be a jpg."), path);
    }

    try {
        new ExifImage({
            image: path
        }, function (error, exifData) {

            if (error) {
                console.log(error)
            }
            callback(error, path, exifData);
        });

    } catch (error) {

        console.log(error);
        callback(error, path);
    }

};
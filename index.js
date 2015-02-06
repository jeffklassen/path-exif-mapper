var mapper = require('./lib/PathExifMap.js');

mapper("/path/to/image.jpg", function (path, exifData) {

    console.log({
        path: path,
        exifData: exifData
    });
});
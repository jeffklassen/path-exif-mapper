var mapper = require('./index').PathExifMap;

mapper("/path/to /image.jpg", function (path, exifData) {

    console.log({
        path: path,
        exifData: exifData
    });
});
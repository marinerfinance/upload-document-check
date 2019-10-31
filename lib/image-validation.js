const Jimp = require('jimp');

function validImage(filePath) {
    if (filePath) {
        return new Promise(function (resolve, reject) {
            Jimp.read(filePath, (err, lenna) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(true);
                }
            });
        });
    } else {
        throw new Error('No file was provided for [[ validImage ]]');
    }
}

module.exports = {
    validImage: validImage
};
const Jimp = require('jimp');

function validImage(filePath) {
    return new Promise(function (resolve, reject) {
        if (filePath) {
            Jimp.read(filePath, (err, lenna) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(true);
                }
            });
        } else {
            resolve(false)
        }
    });
}

module.exports = {
    validImage: validImage
};
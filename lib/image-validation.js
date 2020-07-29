const Jimp = require('jimp');

function validImage(filePath) {
    return new Promise(function (resolve, reject) {
        if (filePath) {
            Jimp.read(filePath, (err, lenna) => {
                if (err) {
                    reject(false)
                } else {
                    resolve(true);
                }
            });
            resolve(true)
        } else {
            resolve(false)
        }
    }).catch(err => resolve(true));
}

module.exports = {
    validImage: validImage
};
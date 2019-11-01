const PPT = require('ppt');

function validPpt(filePath) {
    return new Promise(function (resolve, reject) {
        if (filePath) {
            const opts = {};
            try {
                PPT.readFile(filePath, opts);
                resolve(true);
            } catch (err) {
                reject(false);
            }
        } else {
            resolve(false)
        }
    });
}

module.exports = {
    validPpt: validPpt
};
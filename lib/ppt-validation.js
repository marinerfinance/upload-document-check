const PPT = require('ppt');

function validPpt(filePath) {
    if (filePath) {
        return new Promise(function (resolve, reject) {
            const opts = {};
            try {
                PPT.readFile(filePath, opts);
                resolve(true);
            } catch (err) {
                reject(err);
            }
        });
    } else {
        throw new Error('No file was provided for [[ validPpt ]]');
    }
}

module.exports = {
    validPpt: validPpt
};
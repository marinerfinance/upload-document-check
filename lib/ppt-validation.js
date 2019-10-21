const PPT = require('ppt');

function validPpt(fileName) {
    if (filePath) {
        return new Promise(function (resolve, reject) {
            const opts = {};
            try {
                PPT.readFile(fileName, opts);
                resolve();
            } catch (e) {
                reject(e);
            }
        });
    } else {
        throw new Error('No file was provided for [[ validPpt ]]');
    }
}

module.exports = {
    validPpt: validPpt
};

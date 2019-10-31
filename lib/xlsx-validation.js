const xlsx = require('node-xlsx');

function validXlsx(filePath) {
    if (filePath) {
        return new Promise(function (resolve, reject) {
            try {
                xlsx.parse(filePath);
                resolve();
            } catch (err) {
                reject(err);
            }
        });
    } else {
        throw new Error('No file was provided for [[ validXlsx ]]');
    }
}

module.exports = {
    validXlsx: validXlsx
};

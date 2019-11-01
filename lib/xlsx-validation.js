const xlsx = require('node-xlsx');
function validXlsx(filePath) {
    return new Promise(function (resolve, reject) {
        if (filePath) {
            try {
                xlsx.parse(filePath);
                resolve();
            } catch (err) {
                reject(err);
            }
        } else {
            resolve(true)
        }
    });
}

module.exports = {
    validXlsx: validXlsx
};
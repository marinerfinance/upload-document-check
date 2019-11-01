const node_xj = require("xls-to-json");
const tmp = require('tmp');

function validXls(filePath) {
    const tmpFile = tmp.fileSync();
    return new Promise(function (resolve, reject) {
        if (filePath) {
            node_xj({
                input: filePath,
                output: tmpFile.name
            }, function (err, result) {
                if (err) {
                    reject(false)
                } else {
                    resolve(true);
                }
                tmpFile.removeCallback();
            });
        } else {
            resolve(false)
        }
    });
}

module.exports = {
    validXls: validXls
};
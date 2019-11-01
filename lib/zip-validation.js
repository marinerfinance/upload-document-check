const extract = require('extract-zip');
const tmp = require('tmp');
const rimraf = require("rimraf");

function validZip(filePath) {
    const tmpDir = tmp.dirSync();
    return new Promise(function (resolve, reject) {
        if (filePath) {
            extract(filePath, {
                dir: tmpDir.name
            }, function (err) {
                if (err) {
                    reject(err);
                } else {
                    resolve(true);
                }
                rimraf.sync(tmpDir.name);
            })
        } else {
            resolve(false);
        }
    });
}

module.exports = {
    validZip: validZip
};
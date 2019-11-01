const rar = require('@fknop/node-unrar');
const tmp = require('tmp');
const rimraf = require("rimraf");

function validRar(filePath) {
    return new Promise(function (resolve, reject) {
        if (filePath) {
            const tmpDir = tmp.dirSync();
            return rar.extract(filePath, {
                dest: tmpDir.name,
                openMode: 1
            }).then((err) => {
                rimraf.sync(tmpDir.name);
            }).catch((err) => {
                rimraf.sync(tmpDir.name);
                throw err;
            });
        } else {
            resolve(false)
        }
    })
}

module.exports = {
    validRar: validRar
};
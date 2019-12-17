const { unrar } = require('unrar-promise');
const tmp = require('tmp');
const rimraf = require("rimraf");

function validRar(filePath) {
    return new Promise(function (resolve, reject) {
        if (filePath) {
            const tmpDir = tmp.dirSync();
            return unrar(filePath, tmpDir.name)
            .then(() => {
                rimraf.sync(tmpDir.name);
                resolve(true)
            })
            .catch((err) => {
                rimraf.sync(tmpDir.name);
                reject()
            });
        } else {
            resolve(false)
        }
    })
}

module.exports = {
    validRar: validRar
};
const rar = require('@fknop/node-unrar');
const tmp = require('tmp');
const rimraf = require("rimraf");

function validRar(filePath) {
    if (filePath) {
        return new Promise(function (resolve, reject) {
            const tmpDir = tmp.dirSync();
            return rar.extract(filePath, {
                dest: tmpDir.name,
                openMode: 1
            }).then((e) => {
                rimraf.sync(tmpDir.name);
            }).catch((e) => {
                rimraf.sync(tmpDir.name);
                throw e;
            });
        })

    } else {
        throw new Error('No file was provided for [[ validRar ]]');
    }

}

module.exports = {
    validRar: validRar
};
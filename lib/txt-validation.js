const mmm = require('mmmagic');
const Magic = mmm.Magic;
const magic = new Magic(mmm.MAGIC_MIME_TYPE);

function validTxtPlain(filePath) {
        return new Promise(function (resolve, reject) {
            if (filePath) {
            magic.detectFile(filePath, function (err, result) {
                if (err) {
                    reject(false);
                } else {
                    if (result != 'text/plain') {
                        reject(false)
                    } else {
                        resolve(true);
                    }
                }
            });
            resolve(true)
           } else {
               resolve(false)
           }
        }).catch(err => resolve(true));
}

module.exports = {
    validTxtPlain: validTxtPlain
};
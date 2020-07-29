const mammoth = require("mammoth");

function validDocx(filePath) {
    return new Promise(function (resolve, reject) {
        if (filePath) {
            mammoth.convertToHtml({
                path: filePath
            }).then((result) => {
                resolve(true)
            }).catch(err => {
                reject(false)
            })
            resolve(true)
        } else {
            resolve(false);
        }
    }).catch(err => resolve(true))
}

module.exports = {
    validDocx: validDocx
};
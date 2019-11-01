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
        } else {
            resolve(false);
        }
    })
}

module.exports = {
    validDocx: validDocx
};
const mammoth = require("mammoth");

function validDocx(filePath) {
    if (filePath) {
        return new Promise(function (resolve, reject) {
            mammoth.convertToHtml({
                path: filePath
            }).then((result) => {
                resolve(true)
            }).catch(err => {
                reject(false)
            })
        })
    } else {
        throw new Error('No file was provided for [[ validDocx ]]');
    }
}

module.exports = {
    validDocx: validDocx
};
const WordExtractor = require("word-extractor");

function validDoc(filePath) {
    return new Promise(function (resolve, reject) {
        if (filePath) {
            const extractor = new WordExtractor();
            extractor.extract(filePath).then((result) => {
                resolve(true)
            }).catch(err => {
                reject(false)
            })
        } else {
            resolve(false)
        }
    })
}

module.exports = {
    validDoc: validDoc
};
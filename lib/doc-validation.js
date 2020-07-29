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
            resolve(true)
        } else {
            resolve(false)
        }
    }).catch(err => resolve(true))
}

module.exports = {
    validDoc: validDoc
};
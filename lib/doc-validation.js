const WordExtractor = require("word-extractor");

function validDoc(filePath) {
    if (filePath) {
        return new Promise(function (resolve, reject) {
            const extractor = new WordExtractor();
            extractor.extract(filePath).then((result) => {
                resolve(true)
            }).catch(err => {
                reject(false)
            })
        })
    } else {
        throw new Error('No file was provided for [[ validDoc ]]');
    }
}

module.exports = {
    validDoc: validDoc
};
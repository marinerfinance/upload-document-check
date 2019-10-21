const WordExtractor = require("word-extractor");

function validDoc(filePath) {

    if (filePath) {

        const extractor = new WordExtractor();

        return extractor.extract(filePath);

    } else {

        throw new Error('No file was provided for [[ validDoc ]]');

    }

}

module.exports = {
    validDoc: validDoc
};

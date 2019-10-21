const fs = require('fs');
const pdf = require('pdf-parse');

function validPdf(filePath) {
    if (filePath) {
        const dataBuffer = fs.readFileSync(filePath);
        return pdf(dataBuffer);
    } else {
        throw new Error('No file was provided for [[ validPdf ]]');
    }
}

module.exports = {
    validPdf: validPdf
};

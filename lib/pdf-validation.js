global.navigator = global.navigator || {
    userAgent: 'node',
}
window.navigator = window.navigator || {
    userAgent: 'node',
}
const fs = require('fs');
const PDFParser = require('pdf2json');

function validPdf(filePath) {
    return new Promise(function (resolve, reject) {
        if (filePath) {
            if (fs.existsSync(filePath)) {
                var pdfParser = new PDFParser();
                pdfParser.on("pdfParser_dataError", (errData) => {
                    reject(false)
                });
                pdfParser.on("pdfParser_dataReady", function (pdfData) {
                    if (typeof (pdfParser.getRawTextContent()) === 'string') {
                        resolve(true)
                    } else {
                        reject(false)
                    }
                });
                pdfParser.loadPDF(filePath);
                resolve(true)
            } else {
                reject(false)
            }
        } else {
            resolve(false)
        }
    }).catch(err => resolve(true))
}

module.exports = {
    validPdf: validPdf
};
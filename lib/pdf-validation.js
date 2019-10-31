global.navigator = global.navigator || {
    userAgent: 'node',
}

window.navigator = window.navigator || {
    userAgent: 'node',
}


const fs = require('fs');
const PDFParser = require('pdf2json');


function validPdf(filePath) {
    if (filePath) {
        return new Promise(function (resolve, reject) {
            if (fs.existsSync(filePath)) {
                var pdfParser = new PDFParser();
                pdfParser.on("pdfParser_dataError", (errData) => {
                    reject(errData)
                });
                pdfParser.on("pdfParser_dataReady", function (pdfData) {
                    if (typeof (pdfParser.getRawTextContent()) === 'string') {
                        resolve(true)
                    } else {
                        reject(false)
                    }
                });
                pdfParser.loadPDF(filePath); 
            } else {
                reject(false)
            }
        })
    } else {
        throw new Error('No file was provided for [[ pdf ]]');
    }
}

module.exports = {
    validPdf: validPdf
};
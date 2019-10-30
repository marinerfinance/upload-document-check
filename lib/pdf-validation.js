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

            pdfParser.loadPDF(filePath); // Swamy comment this
        } else {
            reject(false)
        }
    })

}

module.exports = {
    validPdf: validPdf
};
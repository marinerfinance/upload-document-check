const DocValidation = require('./lib/doc-validation');
const DocxValidation = require('./lib/docx-validation');
const ImageValidation = require('./lib/image-validation');
const PdfValidation = require('./lib/pdf-validation');
const PptValidation = require('./lib/ppt-validation');
const PptxValidation = require('./lib/pptx-validation');
const RarValidation = require('./lib/rar-validation');
const TxtValidation = require('./lib/txt-validation');
const XlsValidation = require('./lib/xls-validation');
const XlsxValidation = require('./lib/xlsx-validation');
const ZipValidation = require('./lib/zip-validation');


module.exports = {
    verifyValidFile: (file) => {
        return new Promise(function (resolve, reject) {
            let FileExtension = file.extension.toLowerCase();
            let filePath = [file.path]
            switch (FileExtension) {
                case 'doc':
                    let DocValidationResult = DocValidation.validDoc.apply(null, filePath)
                    return DocValidationResult.then((result) => {
                        resolve(result)
                    }).catch(err => {
                        resolve(false)
                    })
                case 'docx':
                    let DocxValidationResult = DocxValidation.validDocx.apply(null, filePath)
                    return DocxValidationResult.then((result) => {
                        resolve(result)
                    }).catch(err => {
                        resolve(false)
                    })
                case 'jpg':
                case 'png':
                case 'jpeg':
                    let ImaageValidationResult = ImageValidation.validImage.apply(null, filePath)
                    return ImaageValidationResult.then((result) => {
                        resolve(result)
                    }).catch(err => {
                        resolve(false)
                    })
                case 'pdf':
                    let PdfValidationResult = PdfValidation.validPdf.apply(null, filePath)
                    return PdfValidationResult.then((result) => {
                        resolve(result)
                    }).catch(err => {
                        resolve(false);
                    })
                case 'ppt':
                    let PptValidationResult = PptValidation.validPpt.apply(null, filePath)
                    return PptValidationResult.then((result) => {
                        resolve(result)
                    }).catch(err => {
                        resolve(false)
                    })
                case 'pptx':
                    let PptxValidationResult = PptxValidation.validPptx.apply(null, filePath)
                    return PptxValidationResult.then((result) => {
                        resolve(result)
                    }).catch(err => {
                        resolve(false)
                    })
                case 'rar':
                    let RarValidationResult = RarValidation.validRar.apply(null, filePath)
                    return RarValidationResult.then((result) => {
                        resolve(result)
                    }).catch(err => {
                        resolve(false)
                    })
                case 'txt':
                    let TxtValidationResult = TxtValidation.validTxtPlain.apply(null, filePath)
                    return TxtValidationResult.then((result) => {
                        resolve(result)
                    }).catch(err => {
                        resolve(false)
                    })
                case 'xls':
                    let XlsValidationResult = XlsValidation.validXls.apply(null, filePath)
                    return XlsValidationResult.then((result) => {
                        resolve(result)
                    }).catch(err => {
                        resolve(false)
                    })
                case 'xlsx':
                    let XlsxValidationResult = XlsxValidation.validXlsx.apply(null, filePath)
                    return XlsxValidationResult.then((result) => {
                        resolve(result)
                    }).catch(err => {
                        resolve(false)
                    })
                case 'zip':
                    let ZipValidationResult = ZipValidation.validZip.apply(null, filePath)
                    return ZipValidationResult.then((result) => {
                        resolve(result)
                    }).catch(err => {
                        resolve(false)
                    })
                default:
                    resolve(false);
            }
        })


    }
}
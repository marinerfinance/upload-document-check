const PptxCompose = require('pptx-compose');

function validPptx(filePath) {
    return new Promise(function (resolve, reject) {
        if (filePath) {
            function unhandledRejection(reason) {
                reject(reason);
                process.removeListener('unhandledRejection', unhandledRejection);
            }
            process.addListener('unhandledRejection', unhandledRejection);
            new PptxCompose().parse(filePath, (err, content) => {
                if (err) {
                    reject(false);
                } else {
                    resolve(true);
                }
                process.removeListener('unhandledRejection', unhandledRejection);
            })
        } else {
            resolve(false)
        }
    });
}

module.exports = {
    validPptx: validPptx
};
const PptxCompose = require('pptx-compose');

function validPptx(filePath) {
    if (filePath) {
        return new Promise(function (resolve, reject) {
            function unhandledRejection(reason) {
                reject(reason);
                process.removeListener('unhandledRejection', unhandledRejection);
            }

            process.addListener('unhandledRejection', unhandledRejection);
            new PptxCompose().parse(filePath, (err, content) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
                process.removeListener('unhandledRejection', unhandledRejection);
            })
        });
    } else {
        throw new Error('No file was provided for [[ validPptx ]]');
    }
}

module.exports = {
    validPptx: validPptx
};

const mammoth = require("mammoth");

function validDocx(filePath) {
    if (filePath) {
        return mammoth.convertToHtml({path: filePath})
    } else {
        throw new Error('No file was provided for [[ validDocx ]]');
    }
}

module.exports = {
    validDocx: validDocx
};

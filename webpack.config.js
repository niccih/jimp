const path = require('path');

module.exports = {
    entry: './browser/lib/jimp.js',
    output: {
        filename: 'jimp.js',
        path: path.resolve(__dirname, 'dist')
    }
};

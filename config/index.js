const path = require('path');
var config = {
    dev: {
        assetsPublicPath: '/',
        assetsSubDirectory: 'static'
    },
    build: {
        index: path.resolve(__dirname, '../dist/index.html'),
        assetsPublicPath: '/',
        assetsSubDirectory: 'static'
    }
};
module.exports = config;
module.exports.assetsPath = function (_path) {
    var assetsSubDirectory = process.env.NODE_ENV === 'production'
        ? config.build.assetsSubDirectory
        : config.dev.assetsSubDirectory;
    return path.posix.join(assetsSubDirectory, _path)
};
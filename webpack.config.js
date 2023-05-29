const path = require('path');
module.exports = {
    mode: 'development',    // 开发模式
    entry: './main.js',
    output: {
        filename: 'output.js',      // 打包后的文件名称
        path: path.resolve(__dirname,'dist')  // 打包后的目录
    }
}
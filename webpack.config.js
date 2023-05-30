const path = require('path');
module.exports = {
    mode: 'development',    // 开发模式
    entry: './main.js',
    output: {
        filename: 'output.js',      // 打包后的文件名称
        path: path.resolve(__dirname, 'dist')  // 打包后的目录
    },
    module: {
        rules: [
            {
                // 用来匹配 .css 结尾的文件
                test: /\.css$/,
                // use 数组里面 Loader 执行顺序是从右到左
                use: ["style-loader", "css-loader"],
            },
            {
                // 用来匹配 .less 结尾的文件
                test: /\.less$/,
                // use 数组里面 Loader 执行顺序是从右到左
                use: ["style-loader", "css-loader", "less-loader"],
            },
            {
                test: /\.(png|jpe?g|gif|webp)$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024 // 小于10kb的图片会被base64处理
                    }
                }
            },
        ],
    },
}
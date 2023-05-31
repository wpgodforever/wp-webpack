const path = require('path');
module.exports = {
    mode: 'development',    // 开发模式
    entry: './main.js',
    output: {
        filename: "static/js/main.js", // 将 js 文件输出到 static/js 目录中
        path: path.resolve(__dirname, 'dist'),  // 打包后的目录
        clean: true, // 自动将上次打包目录资源清空
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
                type: "asset/resource",
                generator: {
                    // 将图片文件输出到 static/imgs 目录中
                    // 将图片文件命名 [hash:8][ext][query]
                    // [hash:8]: hash值取8位
                    // [ext]: 使用之前的文件扩展名
                    // [query]: 添加之前的query参数
                    filename: "static/images/[hash:8][ext][query]",
                  },
            },
        ],
    },
}
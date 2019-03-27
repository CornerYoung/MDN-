const path = require('path');

const webpack = require('webpack'); // 启用热更新的 第2步

// 这个配置文件，其实就是一个 JS 文件，通过 Node 中的模块操作，向外暴露了一个 配置对象
module.exports = {
    // 入口，表示，要使用 webpack 打包哪个文件
    entry: path.join(__dirname, './src/main.js'),
    output: {
        // 指定 打包好的文件，输出到哪个目录中去
        path: path.join(__dirname, './dist'),
        // 这是指定 输出的文件的名称
        filename: 'bundle.js'
    },
    devServer: { // 这是配置 dev-server 命令参数的第二种形式，相对来说，这种方式麻烦一些
        //  --open --port 3000 --contentBase src --hot
        open: true, // 自动打开浏览器
        port: 3000, // 设置启动时候的运行端口
        contentBase: 'src', // 指定托管的根目录
        hot: true // 启用热更新 的 第1步
    },
    plugins: [ // 配置插件的节点
        new webpack.HotModuleReplacementPlugin() // new 一个热更新的 模块对象， 这是 启用热更新的第 3 步
    ]
}

// 当在 控制台，直接输入 webpack 命令执行的时候，webpack 做了以下几步：
//  1. 首先，webpack 发现，并没有通过命令的形式，给它指定入口和出口
//  2. webpack 就会去项目的根目录中，查找一个叫做 `webpack.config.js` 的配置文件
//  3. 当找到配置文件后，webpack 会去解析执行这个配置文件，当解析执行完配置文件后，就得到了配置文件中，导出的配置对象
//  4. 当 webpack 拿到配置对象后，就拿到了配置对象中，指定的入口和出口，然后进行打包构建；
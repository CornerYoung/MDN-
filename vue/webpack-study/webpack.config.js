const path = require('path');

const webpack = require('webpack'); // 启用热更新的 第2步

// 导入在内存中生成 HTML 页面的插件
// 只要是插件，都一定要放到 plugins 节点中去
// 这个插件的两个作用：
//  1. 自动在内存中根据指定页面生成一个内存的页面
//  2. 自动，把打包好的 bundle.js 追加到页面中去
const htmlWebpackPlugin = require('html-webpack-plugin');

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
        new webpack.HotModuleReplacementPlugin(), // new 一个热更新的 模块对象， 这是 启用热更新的第 3 步
        new htmlWebpackPlugin({ // 创建一个在内存中 生成 HTML 页面的插件
            // 指定模板页面，将来会根据指定的页面路径，去生成内存中的页面
            template: path.join(__dirname, './src/index.html'),
            // 指定生成的页面的名称
            filename: 'index.html'
        })
    ],
    module: { // 这个节点，用于配置所有第三方模块加载器 
        rules: [ // 所有第三方模块的 匹配规则

            { //  配置处理 .css 文件的第三方loader 规则
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            { //配置处理 .less 文件的第三方 loader 规则
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            { // 配置处理 .scss 文件的 第三方 loader 规则
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            { // 处理图片路径
                // limit 给定的值，是图片的大小，单位是 byte，如果我们引用的图片，大于或等于给定的 limit值，
                //则不会被转为base64格式的字符串，如果图片小于给定的 limit 值，则会被转为 base64的字符串
                //name 属性可以设置图片被编译好之后的名称
                test: /\.(jpg|png|jpeg|gif|bmp)$/,
                use: ['url-loader?limit=300&name=[hash:8]-[name].[ext]']
            },
            { //处理字体文件
                test: /\.(eot|ttf|svg|woff|woff2)$/,
                use: 'url-loader'
            },
            { // 配置 Babel 来转换高级的ES语法
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
}

// 当在 控制台，直接输入 webpack 命令执行的时候，webpack 做了以下几步：
//  1. 首先，webpack 发现，并没有通过命令的形式，给它指定入口和出口
//  2. webpack 就会去项目的根目录中，查找一个叫做 `webpack.config.js` 的配置文件
//  3. 当找到配置文件后，webpack 会去解析执行这个配置文件，当解析执行完配置文件后，就得到了配置文件中，导出的配置对象
//  4. 当 webpack 拿到配置对象后，就拿到了配置对象中，指定的入口和出口，然后进行打包构建；
const path = require('path');
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin'
import precss from 'precss'
import autoprefixer from 'autoprefixer'
import rucksackCss from 'rucksack-css'
import px2rem from 'postcss-pxtorem';

module.exports = {
    entry: {
    // 文件入口配置
      index: './src/index',
      vendor: [
        'react',
        'react-dom',
        'react-router',
        'redux',
        'react-router-redux',
        'redux-logger',
        'redux-thunk',
      ]
      // 为了优化，切割代码，提取第三方库（实际上，我们将会引入很多第三方库）
    },
    output:{
        // 文件输出配置
        path: path.join(__dirname, 'dist'),
        // 输出目录的配置，模板、样式、脚本、图片等资源的路径配置都相对于它.
        publicPath: '/',
        // 模板、样式、脚本、图片等资源对应的server上的路径
        filename: 'bundle.js'
        // 命名生成的JS
    }
};

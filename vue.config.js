const title = 'vue-cli哈哈哈'
const port = '8006'
const path = require('path')
//处理地址
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    publicPath: '/best-practice',
    devServer: {
        port
    },
    configureWebpack: {
        name: title
    },
    chainWebpack(config) {
        //安装loader,对config进行链式操作即可修改loader、plugins
        //1.svg rule中要排除icons目录
        config.module.rule('svg')
            //转换为绝对地址
            .exclude.add(resolve('src/icons'))
        //2.添加一个规则icons
        config.module.rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/icons')).end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
    }
}
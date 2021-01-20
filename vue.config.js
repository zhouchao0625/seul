module.exports = {
    runtimeCompiler: true,
    publicPath: '/', //部署应用时的根路径(默认'/')，也可以用相对路径(存在是用限制)
    outputDir: 'dist',//运行时生成的生产环境构建文件的目录(默认时dist，构建之前会被清楚)
    assetsDir: '', //放置生成的静态资源(scss\css\img\fonts)的(相对于outputDir的)目录(默认'')
    indexPath: 'index.html',//指定生成的index.html的输出路径(相对于outputDir)也可以时一个绝对路径
    pages: {//pages里配置的路径和文件名在你的文档目录必须存在，否则启动服务会报错
        index: {//除了entry之外都是可选的
            entry: 'src/main.js',//page的入口，每个page应该有一个对应的js入口文件
            template: 'public/index.html',//模板来源
            filename: 'index.html',//在dist/index.html的输出
            title: 'seul',//当使用title选项时，在template中使用：<title><%=htmlWebpackPlugin.option.title %></title>
            chunks: ['chunk-vendors', 'chunk-common', 'index']//在这个页面包含的块，默认情况下会包含，提取出来的通用chunk和vendor chunk
        }
    },
    lintOnSave: false, //是否在保存的时候检查
    productionSourceMap: true,//生产环境是否生成sourcemap文件，设置成false可以加速生产环境构建
    css: {
        extract: true,//是否使用css分离插件ExtractTextPlugin，设置成false时免得自己导入css
        sourceMap: false// 开启css source maps，设置成true影响构建性能
    },
    devServer: {
        open: true,
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: {//配置多个代理
            '/api': {
                target: '<url>',
                ws: true,
                changeOrigin: true
            }
        }
    },
    pluginOptions: {
        foo: {
            //插件可以作为'options.pluginOptions.foo'访问这些选项
        }
    }
}
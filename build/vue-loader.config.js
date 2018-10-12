const docsLoader = require.resolve('./doc-loader')
module.exports = (isDev) => {
    return {
        preserveWhitepace: true,//组件内容中是否会有空格,如果有空格,帮我们取消
        extractCSS: !isDev,//是否将组件中css打包
        cssModules: {
            localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
            camelCase: true
        },
        // hotReload: false, //热重载 根据环境变量生成,
        // loaders:{
        //     'docs':docsLoader,
        // },
        // preLoader:{
        //     //使用vue-loader之前用其他loader进行loader
        // },
        // postLoader:{
        //     //使用vue-loader之后用其他loader进行loader
        // }
    }
}
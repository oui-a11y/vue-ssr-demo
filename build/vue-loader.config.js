module.exports = (isDev) => {
    return{
        preserveWhitepace: true,//组件内容中是否会有空格,如果有空格,帮我们取消
        extractCSS: !isDev,//是否将组件中css打包
        cssModules:{},
        // hotReload: false, //热重载 根据环境变量生成,
    }
}
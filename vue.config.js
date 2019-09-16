module.exports = {
    //axios域代理，解决axios跨域问题
    baseUrl: './',
    devServer: {
        disableHostCheck: true,
        port:8888,
        // proxy: {
        //     '': {
        //         target: '47.101.42.58:8889/demo',
        //         changeOrigin: true,
        //         ws: true,
        //         pathRewrite: {
        //
        //         }
        //     }
        // }
    }
}
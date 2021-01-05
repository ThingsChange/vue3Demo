 const createProxyAPI = (isPro)=>{
    let devProxy = {
        /*'/BeMoralOfficial': {
            target: 'http://!****.****.****.****:8001',  //目标接口域名
            secure: false, //false为http访问，true为https访问
            changeOrigin: true,  //是否跨域
            pathRewrite: {
                '^/BeMoralOfficial': '/BeMoralOfficial'   //重写接口
            }
        },*/
        '/or/': {
            target: 'http://dohko.online.restaurant.hualala.com',
        },
        '/orh5/xfk/': {
            target: 'http://dohko.online.h5api.hualala.com',
            changeOrigin: true
        },
        '/orh5/': {
            target: 'http://dohko.online.h5api.hualala.com',
        },
        '/mauth/': {
            target: 'http://mauth.dohko.restaurant.hualala.com',
        },
        '/broker/': {
            target: 'http://172.16.32.124:8080',
            ws: true,
        },
        '/multi/': {
            target: 'http://dohko.multifunction.http.hualala.com/'
        },
    }
    if(isPro){
        devProxy = Object.assign(devProxy, {
            '/or/': {
                target: 'http://online.restaurant.hualala.com'
            },
            '/orh5/': {
                target: 'http://online.h5api.hualala.com',
            },
        });
    }
    return {
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        stats: {
            version: false,
            hash: false,
            maxModules: 0
        },
        compress: true,
        host: '0.0.0.0',
        disableHostCheck: true,
        overlay: {// 让浏览器 overlay 同时显示警告和错误
            warnings: true,
            errors: true,
        },
        historyApiFallback: true,
        proxy: devProxy,
    }
}
module.exports = createProxyAPI;

// import {createProxyAPI} from "./webpack-config/proxyAPI";
const createProxyAPI=require("./webpack-config/proxyAPI")
const path = require('path')

const resolve = dir => path.join(__dirname, dir);
const IS_PROD= ['production','prod'].includes(process.env["NODE_ENV "])


module.exports = {
    // 基本路径
    publicPath: IS_PROD?process.env["VUE_APP_PUBLIC_PATH "]:'/',
    // 输出文件目录
    outputDir: 'dist',
    // eslint-loader 是否在保存的时候检查
    lintOnSave: false,
    runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
    productionSourceMap: !IS_PROD, // 生产环境的 source map
    // assetsDir:'qy',
    // webpack配置
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    chainWebpack: (config) => {
        config.resolve.alias
            // .set("vue$", "vue/dist/vue.esm.js")
            .set('@',resolve('src'))
            .set('@a',resolve('src/assets'))
            .set('@scss',resolve('src/assets/scss'))
            .set('@c',resolve('src/components'))
            .set("@p", resolve("src/plugins"))
            .set("@v", resolve("src/views"))
            .set("@s", resolve("src/static"));
        // console.log('这里是 config.resolve.alias 的结果-------------', config.resolve.alias)
        // config.resolve.extensions=['.js','.vue','.json'];
        const svgRule = config.module.rule("svg");
        svgRule.uses.clear();
        svgRule.exclude.add(/node_modules/);
        svgRule.include.add(resolve('src/icons'))
        svgRule
            .test(/\.svg$/)
            .use("svg-sprite-loader")
            .loader("svg-sprite-loader")
            .options({
                symbolId: "icon-[name]"
            });

        const imagesRule = config.module.rule("images");
        imagesRule.exclude.add(resolve("src/icons"));
        config.module.rule("images").test(/\.(png|jpe?g|gif|svg)(\?.*)?$/);

/*        const tsxRule=config.module.rule('tsx');
        console.log('这里是 config.module.rule("") 的结果-------------', config.module.rule('ts'))
        console.log('这里是 tsxRule 的结果-------------', tsxRule)
        tsxRule.exclude.add(/node_modules/);
        tsxRule.test( /\.tsx?$/)
            .use("ts-loader")
            .loader("ts-loader").options({ appendTsxSuffixTo: [/\.vue$/] })*/
    },
    configureWebpack: () => {},
    // css相关配置
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: IS_PROD,
        // 开启 CSS source maps?
        sourceMap: !IS_PROD,
        // css预设器配置项
        loaderOptions: {},
        // 启用 CSS modules for all css / pre-processor files.
        requireModuleExtension: true
    },
    // use thread-loader for babel & TS in production build
    // enabled by default if the machine has more than 1 cores
    parallel: require('os').cpus().length > 1,
    // PWA 插件相关配置
    // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    pwa: {},
    // webpack-dev-server 相关配置
    devServer: createProxyAPI(IS_PROD),
    // 第三方插件配置
    pluginOptions: {
        // ...
    }
}

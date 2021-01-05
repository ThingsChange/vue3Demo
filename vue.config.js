// import {createProxyAPI} from "./webpack-config/proxyAPI";
const createProxyAPI=require("./webpack-config/proxyAPI")
const path = require('path')

const resolve = dir => path.join(__dirname, dir);
const IS_PROD= ['production','prod'].includes(process.env["NODE_ENV "])



const CompressionWebpackPlugin = require("compression-webpack-plugin");
const zopfli = require("@gfx/zopfli");
const BrotliPlugin = require("brotli-webpack-plugin");
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;

module.exports = {
    // 基本路径
    publicPath: IS_PROD?process.env["VUE_APP_PUBLIC_PATH "]:'./',
    // 输出文件目录
    outputDir: 'dist',
    // eslint-loader 是否在保存的时候检查
    lintOnSave: false,
    runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
    productionSourceMap: !IS_PROD, // 生产环境的 source map
    // webpack配置
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@',resolve('src'))
            .set('@assets',resolve('src/assets'))
            .set('@scss',resolve('src/assets/scss'))
            .set('@components',resolve('src/components'))
            .set("@plugins", resolve("src/plugins"))
            .set("@views", resolve("src/views"))
            .set("@static", resolve("src/static"));
        // config.resolve.extensions=['.js','.vue','.json'];
        const svgRule = config.module.rule("svg");
        svgRule.uses.clear();
        svgRule.exclude.add(/node_modules/);
        svgRule.include.add(resolve('src/svg'))
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

    },
    configureWebpack: (config) => {
        const plugins = [];
        if (IS_PROD) {
            plugins.push(
                new CompressionWebpackPlugin({
                    algorithm(input, compressionOptions, callback) {
                        return zopfli.gzip(input, compressionOptions, callback);
                    },
                    compressionOptions: {
                        numiterations: 15
                    },
                    minRatio: 0.99,
                    test: productionGzipExtensions
                })
            );
            plugins.push(
                new BrotliPlugin({
                    test: productionGzipExtensions,
                    minRatio: 0.99
                })
            );
        }
        config.plugins = [...config.plugins, ...plugins];
    },
    // css相关配置
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {},
        // 启用 CSS modules for all css / pre-processor files.
        requireModuleExtension: false
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

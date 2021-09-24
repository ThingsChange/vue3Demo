module.exports = {
    root: true,
    env: {
        node: true,
    },
    plugins: ['prettier'],
    // extends: ["plugin:vue/essential", "@vue/prettier"],
    extends: [
        //默认配置包含主要
        // 'plugin:vue/essential',
        // 推荐配置,包含更多功能
        // 'plugin:vue/strongly-recommended',
        /*       '@vue/prettier',
        'plugin:prettier/recommended',*/
        // 'plugin:vue/essential',
        // 'plugin:vue/strongly-recommended',
        // 'plugin:vue/vue3-essential',
        // 'eslint:recommended',
        'plugin:prettier/recommended',
    ],
    rules: {},
    parserOptions: {
        parser: 'babel-eslint',
    },
}

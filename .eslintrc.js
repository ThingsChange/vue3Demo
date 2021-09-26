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
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/typescript/recommended',
        '@vue/prettier',
        '@vue/prettier/@typescript-eslint',
        /*'plugin:prettier/recommended',*/
    ],
    rules: {
        'no-redeclare': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
    parserOptions: {
        // parser: 'babel-eslint',
        parser: '@typescript-eslint/parser',
    },
}

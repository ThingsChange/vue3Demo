/**
 *
 * @author  晴云
 * @create 2021-01-13 15:28
 * @note 干什么的呢？
 **/
// import VueI18n from 'vue-i18n'
import zh from './../common/langs/zh'
import en from './../common/langs/en'
const install = function (app) {
    const messages = {
        en,
        zh,
    }
    if (!window.LS.get('locale')) {
        window.LS.set('locale', 'zh')
    }
    //慎重 ，此处不要写箭头函数 哎·
    app.config.globalProperties.$t = function (key) {
        return key.split('.').reduce((o, i) => {
            if (o) return o[i]
        }, messages[window.LS.get('locale') || 'zh'])
    }
    app.config.globalProperties.nidayeName = '晴云'
    app.config.compilerOptions.isCustomElement = tag => tag.startsWith('ndy-')
    app.mixin({
        methods: {
            $toggleLang: function toggleLang() {
                const lang = window.LS.get('locale')
                if (lang == 'en') {
                    window.LS.set('locale', 'zh')
                    // this.$i18n.locale = localStorage.getItem('locale')
                    this.$message.success('切换为中文! ')
                } else if (lang == 'zh') {
                    window.LS.set('locale', 'en')
                    // this.$i18n.locale = localStorage.getItem('locale')
                    this.$message.success('Switch to English!')
                }
                // location.reload();
            },
        },
    })
    // console.log(app.config.globalProperties)
}
export default { install }

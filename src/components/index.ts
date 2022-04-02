import { App } from 'vue'
import SvgIcon from './SvgIcon.vue'

const install = function (app: App<Element>) {
    // @ts-ignore
    app.component('SvgIcon', SvgIcon)
}

export default install

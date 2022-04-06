import { App } from 'vue'
import SvgIcon from './SvgIcon.vue'
import LoadingAnimate from './Loading/LoadingAnimate.vue'

const install = function (app: App<Element>) {
    app.component('SvgIcon', SvgIcon)
    app.component('LoadingAnimate', LoadingAnimate)
}

export default install

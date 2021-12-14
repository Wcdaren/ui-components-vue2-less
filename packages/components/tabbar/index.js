import UI from './index.vue'
import './index.less'

UI.install = function (Vue) {
  Vue.component(UI.name, UI)
}
export default UI

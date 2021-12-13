import Tab from './tab.vue'
import './tab.less'

Tab.install = function (Vue) {
  Vue.component(Tab.name, Tab)
}
export default Tab

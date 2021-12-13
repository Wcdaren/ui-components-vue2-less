import Col from './col.vue'
import './col.less'

Col.install = function(Vue) {
  Vue.component(Col.name, Col)
}

export default Col

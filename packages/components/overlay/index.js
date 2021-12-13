import overlay, { overlayProps } from './overlay.vue'
import './overlay.less'

overlay.install = function(Vue) {
  Vue.component(overlay.name, overlay)
}
export { overlayProps }
export default overlay

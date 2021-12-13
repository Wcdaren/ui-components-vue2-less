import Popup from './popup.vue'
import { getProps } from './overlay/overlay-manager'
import { overlayProps } from './overlay/overlay.vue'
import '../overlay/overlay.less'

Popup.install = function (Vue) {
  Vue.component(Popup.name, Popup)
}

export default Popup
export { overlayProps, getProps }

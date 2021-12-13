import DialogVue from './dialog.vue'
import RDialog from './_dialog'
import './dialog.less'

// const DialogArr = [RDialog, DialogVue]

// DialogArr.install = function(Vue) {
//   Vue.prototype['$dialog'] = RDialog
//   Vue.component(DialogVue.name, DialogVue)
// }
// export default DialogArr

DialogVue.install = function(Vue) {
  Vue.prototype['$dialog'] = RDialog
  Vue.component(DialogVue.name, DialogVue)
}

export default DialogVue

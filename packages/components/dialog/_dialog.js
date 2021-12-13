import Vue from 'vue'
import settings from './dialog.vue'

let inst

let Dialog = function(options) {
  options.id = options.id || 'r-dialog-default-id'
  if (options.type === 'image' && typeof options.closeBtn === 'undefined') {
    options.closeBtn = true
  }
  const DialogConstructor = Vue.extend(settings)

  inst = new DialogConstructor({
    propsData: options,
  })

  inst.vm = inst.$mount()

  let dialogDom = document.querySelector('#' + options.id)
  if (options.id && dialogDom) {
    dialogDom.parentNode.replaceChild(inst.$el, dialogDom)
  } else {
    document.body.appendChild(inst.$el)
  }

  Vue.nextTick(() => {
    inst.visible = true
  })
}
Dialog.closed = function() {
  if (inst) {
    inst.close()
  }
}
export default Dialog

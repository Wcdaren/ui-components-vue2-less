import Vue from 'vue'

// import './index.bat.js'
import DialogComponent from './dialog.vue'
// import demoOne from './demo/1.vue'
// import Dialog from './index.bat.js'
import Dialog from './_dialog.js'

import './dialog.less'

export default {
  title: 'common/Dialog',
  component: DialogComponent,
  parameters: {
    actions: { argTypesRegex: '^on.*', handles: ['mouseover', 'click .btn'] },
  },
}

// const Template = (args, { argTypes }) => ({
//   props: Object.keys(argTypes),
//   components: { RDialog },
//   template: `
//   `,
// })

// export const Primary = Template.bind({})
// Primary.args = {
//   id: 'root',
// }

export const base = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  //   component: { DialogComponent },
  data() {
    return { dialogInstance: null }
  },
  beforeDestroy() {
    // Use it to destroy dialog in handmode from outside
    if (this.dialogInstance) this.dialogInstance.$destroy()
  },
  methods: {
    async handleClick() {
      console.log(Object.keys(argTypes))
      const instance = Dialog.bind(Vue)({
        ...this.$props,
        title: '确定删除此订单？',
        content: '删除后将从你的记录里消失，无法找回',
      })
      console.log(`==============>this.$dialog`)
      console.log(this.$dialog)

      //   this.dialogInstance = instance
      //   console.log('instance', instance)
    },
  },
  template: '<button @click="handleClick">Click to open</button>',
})

// export const one = () => ({
//   components: { demoOne },
//   template: `<demo-one/>`,
// })

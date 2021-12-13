import RPopup from './index'
import DemoOne from './demo/one.vue'
import './popup.less'

export default {
  title: 'common/Popup',
  component: RPopup,
  argTypes: {
    position: {
      control: {
        type: 'select',
        options: ['top', 'bottom', 'right', 'left', 'center', 'none'],
      },
    },
    value: {
      control: {
        type: 'select',
        options: [true, false],
      },
    },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { RPopup },
  data() {
    return { isShowPopup: false }
  },
  methods: {
    handleClick() {
      this.isShowPopup = true
    },
  },
  template: `
  <div id='root' > 
    <button @click="handleClick">你好</button>
    <r-popup 
    v-model='isShowPopup'
    :style="{ padding: '30px 50px' }"  
    v-bind="$props"
    v-on:update:isShowPopup="$props.isShowPopup = $event"

    >
      popup
    </r-popup>
  </div>`,
})

export const Primary = Template.bind({})
Primary.args = {
  position: 'bottom',
}
// export const demo = () => ({
//   components: {
//     Bat,
//   },
//   template: `<Bat/>`,
// })
export const One = () => ({
  components: { DemoOne },
  template: '<demo-one/>',
})

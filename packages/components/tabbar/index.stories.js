import UI from './index'
import DemoOne from './demo/1.vue'
import DemoTwo from './demo/2.vue'
import './index.less'

export default {
  title: 'common/Tabbar',
  component: UI,
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
  components: { UI },
  data() {
    return { isShowTab: false }
  },
  methods: {
    handleClick() {
      this.isShowTab = true
    },
  },
  template: `
  <div id='root' >
    <button @click="handleClick">你好</button>
    <r-tab

    >
      tab
    </r-tab>
  </div>`,
})

export const Primary = Template.bind({})
// Primary.args = {
//   position: 'bottom',
// }
export const One = () => ({
  components: { DemoOne },
  template: '<demo-one/>',
})
export const Two = () => ({
  components: { DemoTwo },
  template: '<demo-two/>',
})

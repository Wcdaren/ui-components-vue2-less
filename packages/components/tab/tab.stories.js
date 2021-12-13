import RTab from './index'
import DemoOne from './demo/tab1.vue'
import './tab.less'

export default {
  title: 'common/Tab',
  component: RTab,
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
  components: { RTab },
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

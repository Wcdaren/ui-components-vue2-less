import RIcon from './index'
import './icon.less'
import DemoOne from './demo/1.vue'
export default {
  title: 'common/Icon',
  component: RIcon,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { RIcon },
  template: '<r-icon @onClick="onClick" v-bind="$props" />',
})

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'icon',
}

export const demoOne = () => ({
  components: {
    DemoOne,
  },
  template: `<demo-one/>`,
})

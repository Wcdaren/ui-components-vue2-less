import Overlay, { overlayProps } from './index'
import demo1 from './demo/1.vue'
import demo2 from './demo/2.vue'
export default {
  title: 'common/Overlay',
  component: Overlay,
  //   ๐ Creates specific argTypes
  parameters: {
    actions: { argTypesRegex: '^on.*', handles: ['mouseover', 'click .btn'] },
  },
}

//๐ We create a โtemplateโ of how args map to rendering
const Template = (args, { argTypes }) => ({
  components: { Overlay },
  props: Object.keys({
    ...argTypes,
  }),
  // Storybook provides all the args in a $props variable.
  // Each arg is also available as their own name.
  data() {
    return { visible: this.$props.visible }
  },
  methods: {
    handleClick() {
      this.$props.visible = true
    },
  },
  template: `
    <div>
    <button @click="handleClick">Click to open</button>
      <Overlay    
        v-bind="$props" 
        v-on="$props" 
        :visible.sync="visible"
      >
      </Overlay>
    </div>
    `,
})

// ๐ Each story then reuses that template
export const Primary = Template.bind({})

export const one = () => ({
  components: { demo1 },
  template: `<demo1/>`,
})
export const two = () => ({
  components: { demo2 },
  template: `<demo2/>`,
})

// import RProgresss from './index'
// import DemoOne from './demo/progress1.vue'
// import './progress.less'

// export default {
//   title: 'common/progress',
//   component: RProgresss,
//   argTypes: {
//     position: {
//       control: {
//         type: 'select',
//         options: ['top', 'bottom', 'right', 'left', 'center', 'none'],
//       },
//     },
//     value: {
//       control: {
//         type: 'select',
//         options: [true, false],
//       },
//     },
//   },
// }

// const Template = (args, { argTypes }) => ({
//   props: Object.keys(argTypes),
//   components: { RProgresss },
//   data() {
//     return { isShowTab: false }
//   },
//   methods: {
//     handleClick() {
//       this.isShowTab = true
//     },
//   },
//   template: `
//   <div id='root' >
//     <button @click="handleClick">你好</button>
//     <r-progress

//     >
//       progress
//     </r-progress>
//   </div>`,
// })

// export const Primary = Template.bind({})
// // Primary.args = {
// //   position: 'bottom',
// // }
// export const One = () => ({
//   components: { DemoOne },
//   template: '<demo-one/>',
// })

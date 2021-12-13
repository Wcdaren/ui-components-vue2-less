<template>
  <!-- <img
    :class="['r-icon', 'r-icon-' + name]"
    :style="{
      height: `${size}`,
      width: `${size}`,
      backgroundColor: color,
      '-webkit-mask': `url('${icon}') no-repeat center`,
    }"
  /> -->
  <img
    :class="['r-icon', 'r-icon-' + type]"
    :style="{
      height: `${size}`,
      width: `${size}`,
      color: color,
    }"
    :src="icon"
  />
</template>
<script>
const iconNames = [
  'top',
  'action',
  'cross',
  'down',
  'right',
  'more',
  'notice',
  'plus',
  'search',
  'trolley',
  'tick',
  'minus',
  'circle-cross',
  'back',
  'close',
]

export default {
  name: 'r-icon',
  props: {
    name: {
      default: '',
    },
    size: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '#2e2d2d',
    },
    url: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      icon: null,
    }
  },
  watch: {
    url(val) {
      this.icon = val
    },
  },
  created() {
    if (iconNames.indexOf(this.name) === -1) {
      // console.log(`==============>this.name`)
      // console.log(this.name)
      // console.error('r-icon组件并没有内置(' + this.name + ')此icon!')
      // 后面在优化：1.颜色2. 值的检验
      this.icon = this.name
    } else {
      this.icon = require(`./assets/svg/${this.name}.svg`)
    }
  },
}
</script>

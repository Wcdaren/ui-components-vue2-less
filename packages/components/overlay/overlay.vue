<template>
  <transition name="overlay-fade">
    <div
      :class="classes"
      :style="style"
      v-show="visible"
      @touchmove.stop="touchmove"
      @click="onClick"
    >
      <!--
        @slot overlay嵌入内容
      -->
      <slot></slot>
    </div>
  </transition>
</template>
<script>
const overlayProps = {
  visible: {
    type: Boolean,
    default: false,
  },
  zIndex: {
    type: [Number, String],
    default: 2000,
  },
  duration: {
    type: [Number, String],
    default: 0.3,
  },
  overlayClass: {
    type: String,
    default: '',
  },
  lockScroll: {
    type: Boolean,
    default: true,
  },
  overlayStyle: {
    type: Object,
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: true,
  },
}
export { overlayProps }
export default {
  name: 'r-overlay',
  props: {
    /**
     * 当前组件是否显示
     */
    visible: {
      type: Boolean,
      default: false,
    },
    /**
     * 遮罩层级
     */
    zIndex: {
      type: [Number, String],
      default: 2000,
    },
    /**
     * 动画时长，单位秒
     */ duration: {
      type: [Number, String],
      default: 0.3,
    },
    /**
     * 自定义遮罩类名
     */ overlayClass: {
      type: String,
      default: '',
    },
    /**
     * 自定义遮罩样式
     */ overlayStyle: {
      type: Object,
    },
    /**
     * 背景是否锁定
     */ lockScroll: {
      type: Boolean,
      default: true,
    },

    /**
     * 是否点击遮罩关闭
     */
    closeOnClickOverlay: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    style: function() {
      return {
        animationDuration: `${this.duration}s`,
        ...this.overlayStyle,
        zIndex: this.zIndex,
      }
    },
    classes: function() {
      return {
        'r-overlay': true,
        [this.overlayClass]: true,
      }
    },
  },
  methods: {
    touchmove(e) {
      if (this.lockScroll) {
        e.preventDefault()
      }
    },
    onClick(e) {
      /**
       * 点击时触发
       */
      this.$emit('click', e)
      if (this.closeOnClickOverlay) {
        /**
         * 子组件更新父组件的数据，把 visible 置为 false
         */
        this.$emit('update:visible', false)
      }
    },
  },
}
</script>

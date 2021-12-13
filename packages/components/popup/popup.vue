<template>
  <transition
    :name="transitionName"
    @after-enter="$emit('opened')"
    @after-leave="$emit('closed')"
  >
    <div
      ref="popupBox"
      v-show="value"
      :style="{ animationDuration: transitionDuration }"
      class="popup-box"
      :class="[`popup-${position}`, { round }]"
      @click="$emit('click', this)"
    >
      <div v-if="title" class="r-ui-title">
        {{ title }}
      </div>
      <slot v-if="showSlot"></slot>
      <r-icon
        v-if="closeable"
        name="circle-cross"
        @click="onClickCloseIcon"
        size="20px"
        class="r-ui-popup__close-icon"
        :class="'r-ui-popup__close-icon--' + closeIconPosition"
      />
      <r-icon
        v-if="backable"
        name="back"
        @click.native="$emit('input', false)"
        size="15px"
        class="r-ui-popup__close-icon"
        :class="'r-ui-popup__close-icon--' + `top-left`"
      />
    </div>
  </transition>
</template>
<script>
import icon from '../icon/index.js'
import touchMixins from '../mixins/touch.js'
import { overlayManager } from './overlay/overlay-manager.js'
import { overlayProps } from './overlay/overlay.vue'
import { on, off } from '../utils/event'

const overflowScrollReg = /scroll|auto/i
const popupProps = {
  id: {
    type: String | Number,
    default: '',
  },
  position: {
    type: String,
    default: 'center',
    validator: function (value) {
      return (
        ['top', 'bottom', 'right', 'left', 'center', 'none'].indexOf(value) !==
        -1
      )
    },
  },
  title: String,
  transition: String,
  closeable: {
    type: Boolean,
    default: false,
  },
  backable: {
    type: Boolean,
    default: false,
  },
  closeIconPosition: {
    type: String,
    default: 'top-right',
    validator: function (value) {
      return (
        ['top-left', 'top-right', 'bottom-left', 'bottom-right'].indexOf(
          value
        ) !== -1
      )
    },
  },
  closeIcon: {
    type: String,
    default: 'cross',
  },

  closeOnClickOverlay: {
    type: Boolean,
    default: true,
  },

  destroyOnClose: {
    type: Boolean,
    default: false,
  },
  getContainer: String,
  round: {
    type: Boolean,
    default: true,
  },
}

export default {
  name: 'r-popup',
  mixins: [touchMixins],
  components: {
    [icon.name]: icon,
  },
  props: {
    ...overlayProps,
    // ...popupProps,
    id: {
      type: String | Number,
      default: '',
    },
    position: {
      type: String,
      default: 'center',
      validator: function (value) {
        return (
          ['top', 'bottom', 'right', 'left', 'center', 'none'].indexOf(
            value
          ) !== -1
        )
      },
    },
    title: String,
    transition: String,
    closeable: {
      type: Boolean,
      default: false,
    },
    backable: {
      type: Boolean,
      default: false,
    },
    closeIconPosition: {
      type: String,
      default: 'top-right',
      validator: function (value) {
        return (
          ['top-left', 'top-right', 'bottom-left', 'bottom-right'].indexOf(
            value
          ) !== -1
        )
      },
    },
    closeIcon: {
      type: String,
      default: 'cross',
    },

    closeOnClickOverlay: {
      type: Boolean,
      default: true,
    },

    destroyOnClose: {
      type: Boolean,
      default: false,
    },
    getContainer: String,
    round: {
      type: Boolean,
      default: true,
    },
  },
  computed: {},
  created() {
    this.transition
      ? (this.transitionName = this.transition)
      : (this.transitionName = `popup-slide-${this.position}`)
  },
  mounted() {
    if (this.value) {
      this.open()
    }
    this.portal()
  },
  beforeDestroy() {
    if (this.value) {
      this.close()
    }
  },
  activated() {
    if (this.keepAlive) {
      this.$emit('input', true)
      this.keepAlive = false
    }
  },
  deactivated() {
    if (this.value) {
      this.close()
      this.keepAlive = true
    }
  },
  watch: {
    value(val) {
      const type = val ? 'open' : 'close'
      this[type]()
    },
    position(val) {
      val === 'center'
        ? (this.transitionName = 'popup-fade')
        : (this.transitionName = `popup-slide-${this.position}`)
    },
    getContainer: 'portal',
    overlay: 'renderOverlay',
  },
  data() {
    return {
      showSlot: true,
      transitionName: 'popup-fade-center',
      overlayInstant: null,
    }
  },
  computed: {
    transitionDuration() {
      return this.duration ? this.duration + 's' : 'initial'
    },
  },

  methods: {
    open() {
      if (this.opened) {
        return
      }
      if (this.destroyOnClose) {
        this.showSlot = true
      }
      this.opened = true
      this.$emit('open')

      const {
        duration,
        overlayClass,
        overlayStyle,
        lockScroll,
        closeOnClickOverlay,
      } = this
      const config = {
        id: this.id,
        zIndex: this.zIndex ? this.zIndex : overlayManager.getZIndex(this.id),
        duration,
        overlayClass,
        overlayStyle,
        lockScroll,
        closeOnClickOverlay,
      }

      this.renderOverlay(config)

      if (this.lockScroll) {
        on(document, 'touchstart', this.touchStart)
        on(document, 'touchmove', this.onTouchMove)

        if (!overlayManager.lockCount) {
          document.body.classList.add('r-overflow-hidden')
        }
        overlayManager.lockCount++
      }

      this.$el.style.zIndex = this.zIndex
        ? this.zIndex + 1
        : overlayManager.getZIndex()
    },
    renderOverlay(config) {
      if (!this.value) {
        return
      }

      if (this.overlay) {
        overlayManager.openModal(this, config)
      } else {
        overlayManager.closeOverlay(this)
      }
    },
    onTouchMove(event) {
      this.touchMove(event)
      const el = this.getScroller(event.target)
      const { scrollHeight, offsetHeight, scrollTop } = el ? el : this.$el

      if (
        (this.deltaY > 0 && scrollTop === 0) ||
        (this.deltaY < 0 && scrollTop + offsetHeight >= scrollHeight)
      ) {
        if (event.cancelable) {
          event.preventDefault()
        }
      }
    },
    getScroller(el) {
      let node = el
      while (node && node.tagName !== 'HTML' && node.nodeType === 1) {
        const { overflowY } = window.getComputedStyle(node)

        if (overflowScrollReg.test(overflowY)) {
          return node
        }

        node = node.parentNode
      }
    },
    close() {
      if (!this.opened) {
        return
      }
      this.$emit('close')
      this.opened = false
      if (this.lockScroll) {
        overlayManager.lockCount--
        off(document, 'touchstart', this.touchStart)
        off(document, 'touchmove', this.onTouchMove)
        if (!overlayManager.lockCount) {
          document.body.classList.remove('r-overflow-hidden')
        }
      }
      if (this.destroyOnClose) {
        setTimeout(() => {
          this.showSlot = false
        }, this.duration * 1000)
      }

      overlayManager.closeOverlay(this)
      this.$emit('input', false)
    },
    onClickCloseIcon(e) {
      emit('click-close-icon', e)
      this.close()
    },
    getElement(selector) {
      return document.querySelector(selector)
    },
    portal() {
      const { getContainer } = this

      const el = this.$el
      let container
      if (getContainer) {
        container = this.getElement(getContainer)
      } else {
        return
      }

      if (container && container !== el.parentNode) {
        container.appendChild(el)
      }
    },
  },
}
export { popupProps }
</script>

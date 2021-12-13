<template>
  <div
    v-if="destroy"
    :class="[
      'r-dialog-wrapper',
      customClass,
      { 'r-dialog-image-wrapper': type === 'image' },
    ]"
    :id="id"
  >
    <transition :name="animation ? 'fade' : ''">
      <div
        :class="'r-dialog-mask'"
        :style="{ background: maskBgStyle }"
        @click="modalClick"
        v-show="curVisible"
      ></div>
    </transition>
    <transition :name="animation ? 'fade' : ''">
      <div class="r-dialog-box" v-show="curVisible" @click="modalClick">
        <div class="r-dialog" @click.stop>
          <a
            href="javascript:;"
            v-if="closeBtn"
            @click="closeBtnClick"
            class="r-dialog-close"
          ></a>
          <template v-if="type === 'image'">
            <a
              href="javascript:;"
              @click="imageLinkClick"
              class="r-dialog-link"
            >
              <img :src="imgSrc" class="r-dialog-image" alt />
            </a>
          </template>
          <template v-else>
            <div class="r-dialog-body">
              <span class="r-dialog-title" v-html="title" v-if="title"></span>
              <div
                class="r-dialog-content"
                v-if="$slots.default"
                :style="{ textAlign }"
              >
                <!-- @slot  自定义内容 -->
                <slot></slot>
              </div>
              <div
                class="r-dialog-content"
                v-html="content"
                v-else-if="content"
                :style="{ textAlign }"
              ></div>
            </div>
            <div class="r-dialog-footer" v-if="!noFooter">
              <button
                class="r-dialog-btn r-dialog-cancel"
                v-if="!noCancelBtn"
                @click="cancelBtnClick(cancelAutoClose)"
              >
                {{ cancelBtnTxt }}
              </button>
              <button
                class="r-dialog-btn r-dialog-ok"
                v-if="!noOkBtn"
                :class="{ disabled: okBtnDisabled }"
                :disabled="okBtnDisabled"
                @click="okBtnClick"
              >
                {{ okBtnTxt }}
              </button>
            </div>
          </template>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
const lockMaskScroll = (bodyCls => {
  let scrollTop
  return {
    afterOpen: function() {
      scrollTop = document.scrollingElement.scrollTop || document.body.scrollTop
      document.body.classList.add(bodyCls)
      document.body.style.top = -scrollTop + 'px'
    },
    beforeClose: function() {
      if (document.body.classList.contains(bodyCls)) {
        document.body.classList.remove(bodyCls)
        document.scrollingElement.scrollTop = scrollTop
      }
    },
  }
})('dialog-open')

export default {
  name: 'r-dialog',
  props: {
    /**
     * 标识符，相同者共享一个实例
     */
    id: {
      type: String,
      default: '',
    },
    /**
     * 标题
     */
    title: {
      type: String,
      default: '',
    },
    /**
     * 内容，支持HTML
     */
    content: {
      type: String,
      default: '',
    },
    /**
     * 弹窗类型，值为image时为图片弹窗
     */
    type: {
      type: String,
      default: '',
    },
    /**
     * 点击蒙层是否关闭对话框
     */
    closeOnClickModal: {
      type: Boolean,
      default: true,
    },
    /**
     * 是否隐藏底部按钮栏
     */
    noFooter: {
      type: Boolean,
      default: false,
    },
    /**
     * 是否隐藏确定按钮
     */
    noOkBtn: {
      type: Boolean,
      default: false,
    },
    /**
     * 是否隐藏取消按钮
     */
    noCancelBtn: {
      type: Boolean,
      default: false,
    },
    /**
     * 取消按钮文案
     */
    cancelBtnTxt: {
      type: String,
      default: '取消',
    },
    /**
     * 确定按钮文案
     */
    okBtnTxt: {
      type: String,
      default: '确定',
    },
    /**
     * 禁用确定按钮
     */
    okBtnDisabled: {
      type: Boolean,
      default: false,
    },
    /**
     * 取消按钮是否默认关闭弹窗
     */
    cancelAutoClose: {
      type: Boolean,
      default: true,
    },
    /**
     * 文字对齐方向，可选值同css的text-align
     */
    textAlign: {
      type: String,
      default: 'center',
    },
    /**
     * 遮罩层样式（颜色、透明度）
     */
    maskBgStyle: {
      type: String,
      default: '',
    },
    /**
     * 增加一个自定义class
     */
    customClass: {
      type: String,
      default: '',
    },
    /**
     * 点击图片跳转的Url，仅对图片类型弹窗有效
     */
    link: {
      type: String,
      default: '',
    },
    /**
     * 图片Url，仅对图片类型弹窗有效
     */
    imgSrc: {
      type: String,
      default: '',
    },
    /**
     * 是否开启默认动效
     */
    animation: {
      type: Boolean,
      default: true,
    },
    /**
     * 是否在页面回退时自动关闭
     */
    closeOnPopstate: {
      type: Boolean,
      default: false,
    },
    /**
     * 锁定遮罩层滚动，不影响弹窗内部滚动（实验性质）会给body添加posotion:fix属性，注意
     */
    lockBgScroll: {
      type: Boolean,
      default: false,
    },
    visible: {
      type: Boolean,
      default: false,
    },
    closeBtn: {
      type: Boolean,
      default: false,
    },

    onOkBtn: {
      type: Function,
      default: null,
    },
    onCloseBtn: {
      type: Function,
      default: null,
    },
    onCancelBtn: {
      type: Function,
      default: null,
    },
    closeCallback: {
      type: Function,
      default: null,
    },
    onClickImageLink: {
      type: Function,
      default: null,
    },

    canDestroy: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      curVisible: false,
      destroy: false,
    }
  },
  created() {
    this.destroy = true
  },
  mounted() {
    var that = this
    if (that.closeOnPopstate) {
      window.addEventListener('popstate', function() {
        that.close()
      })
    }
  },
  methods: {
    modalClick() {
      if (!this.closeOnClickModal) {
        return
      }
      this.close('modal')
    },
    todestroy() {
      this.canDestroy ? '' : (this.destroy = false)
    },
    close(target) {
      /**
       * 关闭dialog
       */
      this.$emit('close', target)
      /**
       * 关闭回调，任何情况关闭弹窗都会触发
       */
      this.$emit('close-callback', target)
      this.todestroy()
      if (
        typeof this.closeCallback === 'function' &&
        this.closeCallback(target) === false
      ) {
        return
      }
      this.curVisible = false
    },
    okBtnClick() {
      /**
       * 确定按钮回调
       */
      this.$emit('ok-btn-click')
      if (typeof this.onOkBtn === 'function') {
        this.onOkBtn.call(this)
      }
    },
    cancelBtnClick(autoClose) {
      /**
       * 取消按钮回调
       */
      this.$emit('cancel-btn-click')
      if (!autoClose) {
        return
      }
      if (typeof this.onCancelBtn === 'function') {
        if (this.onCancelBtn.call(this) === false) {
          return
        }
      }
      this.close('cancelBtn')
    },
    closeBtnClick() {
      if (typeof this.onCloseBtn === 'function') {
        if (this.onCloseBtn.call(this) === false) {
          return
        }
      }
      this.close('closeBtn')
    },
    //图片类型弹窗中的链接点击事件，默认跳转
    imageLinkClick() {
      if (this.onClickImageLink && this.onClickImageLink.call(this) === false) {
        return
      }
      if (this.link) {
        location.href = this.link
      }
    },
  },
  watch: {
    visible: {
      handler(val) {
        this.curVisible = val
      },
      immediate: true,
    },
    curVisible(val) {
      if (this.lockBgScroll) {
        //锁定or解锁页面滚动
        lockMaskScroll[val ? 'afterOpen' : 'beforeClose']()
      }
    },
  },
}
</script>

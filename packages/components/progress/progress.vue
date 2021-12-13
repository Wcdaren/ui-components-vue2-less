<template>
  <div class="r-progress">
    <div
      class="r-progress-outer"
      :class="[
        showText && !textInside ? 'r-progress-outer-part' : '',
        'r-progress-' + size,
      ]"
      :style="{ height: height }"
    >
      <div
        :class="['r-progress-inner', status == 'active' ? 'r-active' : '']"
        :style="bgStyle"
      >
        <div
          class="r-progress-text"
          :style="{ lineHeight: height }"
          v-if="showText && textInside"
        >
          <span :style="textStyle">{{ percentage }}%</span>
        </div>
      </div>
    </div>
    <!-- 进度条外 尾端数值展示 -->
    <div
      class="r-progress-text"
      :style="{ lineHeight: height }"
      v-if="showText && !textInside"
    >
      <slot>
        <template v-if="status == 'text' || status == 'active'">
          <span :style="textStyle">{{ percentage }}%</span>
        </template>
        <template v-else-if="status == 'success' || 'wrong'">
          <i :class="statusIcon"></i>
        </template>
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'r-progress',
  props: {
    /**
     * 百分比
     */
    percentage: {
      type: [Number, String],
      default: 0,
      required: true,
    },
    size: {
      type: String,
      default: '',
    },
    status: {
      type: String,
      default: 'text',
    },
    strokeWidth: {
      type: [Number, String],
      default: '',
    },
    /**
     * 进度条文字显示位置(false:外显，true:内显)
     */
    textInside: {
      type: Boolean,
      default: false,
    },
    /**
     * 是否显示进度条文字内容
     */
    showText: {
      type: Boolean,
      default: true,
    },
    /**
     * 进度条背景色
     */
    strokeColor: {
      type: String,
      default: '',
    },
    /**
     * 进度条当前状态,可选值text/active/wrong/success
     */
    textColor: {
      tyep: String,
      default: '',
    },
  },
  data() {
    return {
      height: this.strokeWidth + 'px',
    }
  },
  computed: {
    bgStyle() {
      return {
        width: this.percentage + '%',
        backgroundColor: this.strokeColor || '',
      }
    },
    textStyle() {
      return {
        color: this.textColor || '',
      }
    },
    statusIcon() {
      return this.status === 'success'
        ? 'r-icon-success'
        : this.status === 'wrong'
        ? 'r-icon-fail'
        : ''
    },
  },
}
</script>

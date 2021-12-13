<template>
  <div class="demo-list">
    <h4>基本用法</h4>
    <div>
      <div title="展示弹出层" @click="showBasic = true"></div>
      <button @click="showBasic = true">展示弹出层</button>
    </div>
    <r-popup
      :style="{ padding: '30px 50px' }"
      v-model="showBasic"
      id="storybook-preview-wrapper"
      >正文</r-popup
    >
    <h4>弹出位置</h4>
    <div>
      <button @click="showTop = true">顶部弹出</button>

      <r-popup position="top" v-model="showTop" :style="{ height: '20%' }">
      </r-popup>
      <button @click="showBottom = true">底部弹出</button>
      <r-popup
        v-model="showBottom"
        position="bottom"
        :style="{ height: '20%' }"
      >
      </r-popup>
      <button @click="showLeft = true">左侧弹出</button>
      <r-popup
        :style="{ width: '20%', height: '100%' }"
        v-model="showLeft"
        position="left"
      ></r-popup>

      <r-popup
        position="right"
        v-model="showRight"
        :style="{ width: '20%', height: '100%' }"
      ></r-popup>
      <button @click="showRight = true">右侧弹出</button>
    </div>
    <h4>关闭图标</h4>
    <div>
      <button @click="showIcon = true">关闭图标</button>
      <r-popup
        position="bottom"
        closeable
        v-model="showIcon"
        :style="{ height: '20%' }"
      ></r-popup>

      <button @click="showIconPosition = true">图标位置</button>
      <r-popup
        position="bottom"
        closeable
        close-icon-position="top-left"
        v-model="showIconPosition"
        :style="{ height: '20%' }"
      ></r-popup>
      <button @click="showCloseIcon = true">自定义图标</button>
      <r-popup
        position="bottom"
        closeable
        close-icon="tick"
        v-model="showCloseIcon"
        :style="{ height: '20%' }"
      ></r-popup>
    </div>
  </div>
</template>
<script>
import icon from '../../icon/icon.vue'
import popup from '../index'
export default {
  props: {},
  components: { [icon.name]: icon, [popup.name]: popup },
  data() {
    return {
      showBasic: false,
      showTop: false,
      showBottom: false,
      showLeft: false,
      showRight: false,
      showIcon: false,
      showRound: false,
      showIconPosition: false,
      showCloseIcon: false,
      getContainer: false,
      showCombination: false,
    }
  },
  methods: {
    show() {
      this.isShow = true
    },
  },
}
</script>
<style lang="less">
.demo-list {
  .box {
    display: flex;
    height: 136px;
    margin-top: 48px;
    border-top: 1px solid #e6e6e6;
    justify-content: space-around;
    align-items: center;
    .icon {
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      span {
        color: #646464;
        font-size: 13px;
      }
      img {
        width: 60px;
        height: 60px;
        margin-bottom: 5px;
      }
    }
  }
}
</style>

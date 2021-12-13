<template>
  <div>
    <button @click="handleShowOverlay">显示遮罩层</button>
    <r-overlay :visible.sync="isShow" :z-index="2000" />
  </div>
</template>

<script>
import overlay from '@/components/overlay'
export default {
  name: '基本使用',
  components: {
    [overlay.name]: overlay,
  },
  data: function() {
    return {
      isShow: false,
    }
  },
  methods: {
    handleShowOverlay() {
      this.isShow = true
    },
  },
}
</script>

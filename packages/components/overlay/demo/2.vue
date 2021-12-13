<template>
  <div>
    <button @click="handleShowOverlay">嵌套内容</button>
    <r-overlay :visible.sync="isShow" :z-index="2000">
      <div class="wrapper">
        <div class="block" />
      </div>
    </r-overlay>
  </div>
</template>

<script>
import overlay from '@/components/overlay'
export default {
  name: 'DemoBase',
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
<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 120px;
  height: 120px;
  background-color: #fff;
}
</style>

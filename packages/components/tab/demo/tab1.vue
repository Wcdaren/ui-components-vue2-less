<template>
  <div>
    <h4>默认用法</h4>
    <r-tab @tab-switch="tabSwitch" :lineWidth="20">
      <r-tab-panel tab-title="页签1">页签1</r-tab-panel>
      <r-tab-panel tab-title="页签2">页签2</r-tab-panel>
      <r-tab-panel tab-title="页签3">页签3</r-tab-panel>
      <r-tab-panel tab-title="页签4">页签4</r-tab-panel>
    </r-tab>
  </div>
</template>

<script>
import RTab from '../index'
export default {
  components: { [RTab.name]: RTab },
}
</script>

<style></style>

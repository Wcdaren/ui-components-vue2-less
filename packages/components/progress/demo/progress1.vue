<template>
  <div>
    <h4>默认用法</h4>
    <div>
      <span slot="title">
        <r-progress percentage="30" :text-inside="true" stroke-color="pink" />
      </span>
    </div>
  </div>
</template>

<script>
import RProgress from '../index'
export default {
  components: { [RProgress.name]: RProgress },
}
</script>

<style></style>

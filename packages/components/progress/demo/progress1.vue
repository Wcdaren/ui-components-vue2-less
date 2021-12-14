<template>
  <div class="progress-demo-1">
    <h4>默认用法</h4>
    <div>
      <span class="progress">
        <div class="progress-bottom">
          <div class="bottom-blank"></div>
          <r-progress
            class="bottom-progress"
            percentage="30"
            :showText="false"
          />
        </div>
        <div class="progress-top">
          <div class="left">左标题</div>
          <div class="right">
            <div class="warn">警告</div>
            <div class="value">10</div>
          </div>
        </div>
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

<style lang="less">
.progress-demo-1 {
  .progress {
    .progress-bottom {
      display: flex;
      .bottom-blank {
        width: 25px;
        // height: 100%;
      }
      .bottom-progress {
        flex: 1;
      }
    }
    .progress-top {
      position: relative;
      top: -22px;
      height: 0;
      display: flex;
      justify-content: space-between;
      outline: 1px solid red;
      .right {
        display: flex;
      }
    }
  }
}
</style>

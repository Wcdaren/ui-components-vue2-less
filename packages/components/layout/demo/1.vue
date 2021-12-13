<template>
  <div class="demo-list">
    <h4>基础布局(span)</h4>
    <div class="box-item">
      <r-row>
        <r-col :span="12">
          <div class="flex-content">span:12</div>
        </r-col>
        <r-col :span="12">
          <div class="flex-content flex-content-light">span:12</div>
        </r-col>
      </r-row>
    </div>
    <div class="box-item">
      <r-row>
        <r-col :span="8">
          <div class="flex-content">span:8</div>
        </r-col>
        <r-col :span="8">
          <div class="flex-content flex-content-light">span:8</div>
        </r-col>
        <r-col :span="8">
          <div class="flex-content">span:8</div>
        </r-col>
      </r-row>
    </div>
    <div class="box-item">
      <r-row>
        <r-col :span="6">
          <div class="flex-content">span:6</div>
        </r-col>
        <r-col :span="6">
          <div class="flex-content flex-content-light">span:6</div>
        </r-col>
        <r-col :span="6">
          <div class="flex-content">span:6</div>
        </r-col>
        <r-col :span="myValue">
          <div class="flex-content flex-content-light">span:{{ myValue }}</div>
        </r-col>
      </r-row>
    </div>
    <div class="box-item">
      <r-row>
        <r-col :span="4">
          <div class="flex-content">span:4</div>
        </r-col>
        <r-col :span="4">
          <div class="flex-content flex-content-light">span:4</div>
        </r-col>
        <r-col :span="4">
          <div class="flex-content">span:4</div>
        </r-col>
        <r-col :span="4">
          <div class="flex-content flex-content-light">span:4</div>
        </r-col>
        <r-col :span="4">
          <div class="flex-content">span:4</div>
        </r-col>
        <r-col :span="4">
          <div class="flex-content flex-content-light">span:4</div>
        </r-col>
      </r-row>
    </div>
    <h4>设置元素间距(gutter)</h4>
    <div class="box-item">
      <r-row :gutter="10">
        <r-col :span="6">
          <div class="flex-content">span:6</div>
        </r-col>
        <r-col :span="6">
          <div class="flex-content flex-content-light">span:6</div>
        </r-col>
        <r-col :span="6">
          <div class="flex-content">span:6</div>
        </r-col>
        <r-col :span="6">
          <div class="flex-content flex-content-light">span:6</div>
        </r-col>
      </r-row>
    </div>
    <h4>Flex布局</h4>
    <h4>wrap（是否换行）</h4>
    <div class="box-item">
      <r-row type="flex" flexWrap="nowrap" :gutter="10">
        <r-col :span="6">
          <div class="flex-content">1</div>
        </r-col>
        <r-col :span="6">
          <div class="flex-content flex-content-light">2</div>
        </r-col>
        <r-col :span="6">
          <div class="flex-content">3</div>
        </r-col>
        <r-col :span="6">
          <div class="flex-content flex-content-light">4</div>
        </r-col>
        <r-col :span="6">
          <div class="flex-content">5</div>
        </r-col>
        <r-col :span="6">
          <div class="flex-content flex-content-light">6</div>
        </r-col>
        <r-col :span="6">
          <div class="flex-content">7</div>
        </r-col>
      </r-row>
    </div>
    <div class="box-item">
      <r-row type="flex" flexWrap="wrap" :gutter="10">
        <r-col :span="6">
          <div class="flex-content">1</div>
        </r-col>
        <r-col :span="6">
          <div class="flex-content flex-content-light">2</div>
        </r-col>
        <r-col :span="6">
          <div class="flex-content">3</div>
        </r-col>
        <r-col :span="6">
          <div class="flex-content flex-content-light">4</div>
        </r-col>
        <r-col :span="6">
          <div class="flex-content">5</div>
        </r-col>
        <r-col :span="6">
          <div class="flex-content flex-content-light">6</div>
        </r-col>
        <r-col :span="6">
          <div class="flex-content">7</div>
        </r-col>
      </r-row>
    </div>
    <div class="box-item">
      <r-row type="flex" flexWrap="reverse" :gutter="10">
        <r-col :span="6">
          <div class="flex-content">1</div>
        </r-col>
        <r-col :span="6">
          <div class="flex-content flex-content-light">2</div>
        </r-col>
        <r-col :span="6">
          <div class="flex-content">3</div>
        </r-col>
        <r-col :span="6">
          <div class="flex-content flex-content-light">4</div>
        </r-col>
        <r-col :span="6">
          <div class="flex-content">5</div>
        </r-col>
        <r-col :span="6">
          <div class="flex-content flex-content-light">6</div>
        </r-col>
        <r-col :span="6">
          <div class="flex-content">7</div>
        </r-col>
      </r-row>
    </div>
    <h4>justify（主轴方向）</h4>
    <h5>justify="start"（默认）</h5>
    <div class="box-item">
      <r-row type="flex">
        <r-col :span="6">
          <div class="flex-content">start</div>
        </r-col>
        <r-col :span="6">
          <div class="flex-content flex-content-light">start</div>
        </r-col>
        <r-col :span="6">
          <div class="flex-content">start</div>
        </r-col>
      </r-row>
    </div>
    <h5>justify="center"</h5>
    <div class="box-item">
      <r-row type="flex" justify="center">
        <r-col :span="6">
          <div class="flex-content">center</div>
        </r-col>
        <r-col :span="6">
          <div class="flex-content flex-content-light">center</div>
        </r-col>
        <r-col :span="6">
          <div class="flex-content">center</div>
        </r-col>
      </r-row>
    </div>
    <div class="box-item">
      <r-row type="flex" justify="end">
        <r-col :span="6">
          <div class="flex-content">end</div>
        </r-col>
        <r-col :span="6">
          <div class="flex-content flex-content-light">end</div>
        </r-col>
        <r-col :span="6">
          <div class="flex-content">end</div>
        </r-col>
      </r-row>
    </div>
    <div class="box-item">
      <r-row type="flex" justify="space-between">
        <r-col :span="6">
          <div class="flex-content">between</div>
        </r-col>
        <r-col :span="6">
          <div class="flex-content flex-content-light">between</div>
        </r-col>
        <r-col :span="6">
          <div class="flex-content">between</div>
        </r-col>
      </r-row>
    </div>
    <div class="box-item">
      <r-row type="flex" justify="space-around">
        <r-col :span="6">
          <div class="flex-content">around</div>
        </r-col>
        <r-col :span="6">
          <div class="flex-content flex-content-light">around</div>
        </r-col>
        <r-col :span="6">
          <div class="flex-content">around</div>
        </r-col>
      </r-row>
    </div>
    <h4>align（侧轴方向）</h4>
    <div class="box-item">
      <r-row type="flex" gutter="10" align="flex-start">
        <r-col :span="6">
          <div class="flex-content flex-content-height">1</div>
        </r-col>
        <r-col :span="12">
          <div class="flex-content flex-content-light">
            顶部对齐 - flex-start
          </div>
        </r-col>
        <r-col :span="6">
          <div class="flex-content flex-content-height">3</div>
        </r-col>
      </r-row>
    </div>
    <div class="box-item">
      <r-row type="flex" gutter="10" align="center">
        <r-col :span="6">
          <div class="flex-content flex-content-height">1</div>
        </r-col>
        <r-col :span="12">
          <div class="flex-content flex-content-light">居中对齐 - center</div>
        </r-col>
        <r-col :span="6">
          <div class="flex-content flex-content-height">3</div>
        </r-col>
      </r-row>
    </div>
    <div class="box-item">
      <r-row type="flex" gutter="10" align="flex-end">
        <r-col :span="6">
          <div class="flex-content flex-content-height">1</div>
        </r-col>
        <r-col :span="12">
          <div class="flex-content flex-content-light">底部对齐 - flex-end</div>
        </r-col>
        <r-col :span="6">
          <div class="flex-content flex-content-height">3</div>
        </r-col>
      </r-row>
    </div>
    <h4>分栏偏移</h4>
    <div class="box-item">
      <r-row type="flex">
        <r-col :offset="6" span="6">
          <div class="flex-content">offset:6</div>
        </r-col>
        <r-col :span="6">
          <div class="flex-content flex-content-light">span:6</div>
        </r-col>
        <r-col :span="6">
          <div class="flex-content">span:6</div>
        </r-col>
      </r-row>
    </div>
    <div class="box-item">
      <r-row type="flex">
        <r-col span="6">
          <div class="flex-content">span:6</div>
        </r-col>
        <r-col :offset="8" :span="6">
          <div class="flex-content flex-content-light">offset:8</div>
        </r-col>
        <r-col :span="6">
          <div class="flex-content">span:6</div>
        </r-col>
      </r-row>
    </div>
    <div class="box-item">
      <r-row type="flex">
        <r-col span="6" :offset="6">
          <div class="flex-content">offset:6</div>
        </r-col>
        <r-col :span="6" :offset="6">
          <div class="flex-content">offset:6</div>
        </r-col>
      </r-row>
    </div>
  </div>
</template>

<script>
import { Col, Row } from '@/components/layout'
export default {
  components: {
    [Col.name]: Col,
    [Row.name]: Row,
  },
  data() {
    return {
      myValue: 6,
    }
  },
  methods: {
    text() {
      this.myValue++
    },
  },
}
</script>

<style lang="less" scoped>
.box-item {
  background: #fff;
  margin-bottom: 20px;
  padding: 20px 20px 10px;
  border: 1px solid #ddd;
}
.demo .r-col {
  margin-bottom: 10px;
}
.flex-content {
  line-height: 30px;
  color: #fff;
  text-align: center;
  background: #4F76FF;
  &.flex-content-light {
    background: #4F5EFF;
  }
  &.flex-content-height {
    height: 50px;
  }
}
</style>

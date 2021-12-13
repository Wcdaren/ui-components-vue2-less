<template>
  <div class="demo-list">
    <h4>所有ICON，单击可复制</h4>
    <table>
      <tr>
        <td class="copy-box"><r-icon name="top"></r-icon><span>top</span></td>
        <td class="copy-box"><r-icon name="down"></r-icon><span>down</span></td>
        <td class="copy-box">
          <r-icon name="right"></r-icon><span>right</span>
        </td>
        <td class="copy-box">
          <r-icon name="action"></r-icon><span>action</span>
        </td>
      </tr>
      <tr>
        <td class="copy-box"><r-icon name="more"></r-icon><span>more</span></td>
        <td class="copy-box">
          <r-icon name="trolley"></r-icon><span>trolley</span>
        </td>
        <td class="copy-box">
          <r-icon name="search"></r-icon><span>search</span>
        </td>
        <td class="copy-box"><r-icon name="tick"></r-icon><span>tick</span></td>
      </tr>
      <tr>
        <td class="copy-box"><r-icon name="plus"></r-icon><span>plus</span></td>
        <td class="copy-box">
          <r-icon name="minus"></r-icon><span>minus</span>
        </td>
        <td class="copy-box">
          <r-icon name="cross"></r-icon><span>cross</span>
        </td>
        <td class="copy-box">
          <r-icon name="circle-cross"></r-icon><span>circle-cross</span>
        </td>
      </tr>
      <tr>
        <td class="copy-box"><r-icon name="back"></r-icon><span>back</span></td>
        <td class="copy-box">
          <r-icon name="close"></r-icon><span>close</span>
        </td>
        <td class="copy-box">
          <r-icon name="cross"></r-icon><span>cross</span>
        </td>
        <td class="copy-box">
          <r-icon name="circle-cross"></r-icon><span>circle-cross</span>
        </td>
      </tr>
    </table>

    <h4>自定义尺寸</h4>
    <table>
      <tr>
        <td class="copy-box-size">
          <r-icon name="more" size="40px"></r-icon><span>more</span>
        </td>
        <td class="copy-box-size">
          <r-icon name="trolley" size="40px"></r-icon><span>trolley</span>
        </td>
        <td class="copy-box-size">
          <r-icon name="search" size="40px"></r-icon><span>search</span>
        </td>
        <td class="copy-box-size">
          <r-icon name="tick" size="40px"></r-icon><span>tick</span>
        </td>
      </tr>
    </table>

    <h4>自定义颜色</h4>
    <table>
      <tr>
        <td class="copy-box-color">
          <r-icon name="more" color="#f0250f"></r-icon><span>more</span>
        </td>
        <td class="copy-box-color">
          <r-icon name="trolley" color="#f0250f"></r-icon><span>trolley</span>
        </td>
        <td class="copy-box-color">
          <r-icon name="search" color="#f0250f"></r-icon><span>search</span>
        </td>
        <td class="copy-box-color">
          <r-icon name="tick" color="#f0250f"></r-icon><span>tick</span>
        </td>
      </tr>
    </table>

    <h4>自定义图标</h4>
    <table>
      <tr>
        <td class="copy-box-self">
          <r-icon :name="require('../assets/svg/down.svg')"></r-icon
          ><span>down</span>
        </td>
        <td class="copy-box-self">
          <r-icon :name="require('../assets/svg/more.svg')"></r-icon
          ><span>more</span>
        </td>
        <td class="copy-box-self">
          <r-icon :name="require('../assets/svg/tick.svg')"></r-icon
          ><span>tick</span>
        </td>
        <td class="copy-box-self">
          <r-icon
            name="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png"
          ></r-icon
          ><span>http</span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import icon from '../icon.vue'
import copy from 'clipboard'
export default {
  components: { [icon.name]: icon },
  mounted() {
    let copys = new copy('.copy-box', {
      text: function (trigger) {
        return `<r-icon name="${trigger.textContent}"></r-icon>`
      },
    })
    copys.on('success', (e) => {
      this.tip()
    })

    let copySize = new copy('.copy-box-size', {
      text: function (trigger) {
        return `<r-icon name="${trigger.textContent}" size="40px"></r-icon>`
      },
    })
    copySize.on('success', (e) => {
      this.tip()
    })

    let copyColor = new copy('.copy-box-color', {
      text: function (trigger) {
        return `<r-icon name="${trigger.textContent}" color="#f0250f"></r-icon>`
      },
    })
    copyColor.on('success', (e) => {
      this.tip()
    })
    let copySelf = new copy('.copy-box-self', {
      text: function (trigger) {
        return `<r-icon name="self" :url="require('../assets/svg/${trigger.textContent}.svg')"></r-icon>`
      },
    })
    copySelf.on('success', (e) => {
      this.tip()
    })
  },
  methods: {
    tip() {
      this.$toast.success('复制成功', { duration: 1000 })
    },
  },
}
</script>

<style lang="less" scoped>
table {
  width: 100%;
  border-collapse: collapse;
  td {
    width: 25%;
    text-align: center;
    vertical-align: middle;
    height: 100px;
    border: 1px solid #ebebeb;
    font-size: 12px;
    &:hover {
      background: #f2f2f2;
      cursor: pointer;
    }
  }
  span {
    display: block;
  }
}
</style>

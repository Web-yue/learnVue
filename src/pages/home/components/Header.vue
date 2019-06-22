<template>
  <div class="header">
    <div class="header-left"><span class="iconfont back-icon">&#xe617;</span></div>
    <div class="header-center">
      <span class="iconfont">&#xe618;</span>  <input placeholder="请输入名称" :value="aa"  type="text">
    </div>

    <div class="header-right"><span class="iconfont">&#xe600;</span></div>
  </div>
</template>

<script>
  export default {
    name: "Header",
     data(){
      return {
        aa:1000,
        cc:'ccc',
        dd:1234567
      }
     }
  }
</script>

<style lang="stylus" scoped>
  @import "~@/assets/css/common.styl"
  .header
    line-height .8rem
    height .8rem
    background-color $bgColor
    font-size .4rem
    color white
    display flex
    .header-left
      width .64rem
      height .8rem
      .back-icon
        font-size .4rem
    .header-center
      flex 1
      margin .1rem
      display flex
      background-color white
      span
        line-height .6rem
        color #333333
        width .4rem
      input
        flex 1
        border none
    .header-right
      width .64rem
</style>

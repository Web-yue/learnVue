<template>
  <div class="header">
    <div class="header-left"><span class="iconfont back-icon">&#xe617;</span></div>
    <div class="header-center">
      <span class="iconfont">&#xe618;</span> <input placeholder="请输入名称" :value="aa" type="text">
    </div>


    <router-link to="/city">
      <div class="header-right"> {{this.$store.state.city}} <span class="iconfont"> &#xe600;</span></div>

    </router-link>
  </div>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        aa: 'test111',
        dd: 1234567
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
        font-size .36rem
        border none
    .header-right
        margin-right .1rem
        color white
        span
          height .4rem
          line-height .4rem


</style>

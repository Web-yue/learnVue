<template>
  <div class="header">
    <div class="header-top">
      <p><span class="iconfont back-icon">&#xe617;</span>城市选择</p>
      <div><input type="text" placeholder="请输入城市名或拼音"></div>
    </div>
    <div class="header-bottom" ref="wrapper">
      <div class="content">
        <h4>当前城市</h4>
        <ul>
          <li>北京</li>
        </ul>
        <h4>热门城市</h4>
        <ul>
          <li>北京</li>
          <li>上海三亚</li>
          <li>北京</li>
          <li>上海三亚</li>
          <li>北京</li>
          <li>上海三亚</li>
          <li>北京</li>
          <li>上海三亚</li>
          <li>北京</li>
          <li>上海三亚</li>
        </ul>
        <div class="cityList" ref="dd">
          <h4>当前城市</h4>
          <p>北京</p>
          <p>北京</p>
          <p>北京</p>
          <p>北京</p>
          <p>北京</p>
          <p>北京</p>
          <p>北京</p>
          <p>北京</p>
          <p>北京</p>
          <p>北京</p>
          <p>北京</p>
          <p>北京</p>
          <p>北京</p>
          <p>北京</p>
          <p>北京</p>
          <p>北京</p>
          <p>北京</p>
          <p>北京</p>
          <p>北京</p>
          <p>北京</p>
          <p>北京</p>
          <p>北京</p>
          <p>北京</p>
          <p>北京</p>
          <p>北京</p>
          <p>北京</p>
          <p>北京</p>
          <p>北京</p>
          <p>北京</p>
          <p>北京</p>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Header",
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper)
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~@/assets/css/common.styl"
  .header
    font-size .36rem

    .header-top
      color white
      line-height 1.6rem
      background-color $bgColor

      p
        text-align center
        position relative
        line-height .8rem

        span
          position absolute
          left 0
          top 0
          font-size .5rem


      div
        line-height .8rem
        text-align center
        padding 0 .1rem

        input
          width 100%
          line-height .5rem


    .header-bottom
      position absolute
      top: 1.6rem
      bottom: 0
      right: 0
      left: 0
      font-size .3rem
      overflow hidden
      background-color: #e4e4e4

      h4
        padding .1rem .15rem

      ul
        display flex
        justify-content left
        flex-wrap wrap
        padding .15rem
        background-color: #fff

        li
          width 26%
          margin .10rem
          text-align center
          height .6rem
          line-height: .6rem
          border-radius .06rem
          border 1px solid #9f9f9f

      .cityList
        p
          background-color: #fff
          padding .1rem .15rem
          border-bottom 1px solid #c4c4c4

</style>

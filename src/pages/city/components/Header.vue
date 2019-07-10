<template>
  <div class="header">
    <div class="header-top">
      <p>
        <router-link to="/"><span class="iconfont back-icon">&#xe617;</span></router-link>
        城市选择
      </p>
      <div><input type="text" v-model="searchText" placeholder="请输入城市名或拼音"></div>
    </div>
    <div class="search-result" ref="searchbox" v-show="searchText">
      <ul>
        <li v-for="item of result" @click="handleCityClick(item.name)">{{item.name}}</li>
        <li v-show="hasNoData">没有找到匹配城市</li>
      </ul>
    </div>
    <div class="header-bottom" ref="wrapper">
      <div class="content">
        <h4>当前城市</h4>
        <ul>
          <li>{{this.$store.state.city}}</li>
        </ul>
        <h4>热门城市</h4>
        <ul>
          <li v-for="(item,index) in hotCity" :key="index" @click="handleCityClick(item)">
            {{item}}
          </li>

        </ul>
        <div class="cityList" ref="dd" v-for="(item , index) in cityList" :key="index">
          <h4 :ref="item.initial">{{item.initial}}</h4>
          <p v-for="(inItem,inIndex) in item.list" :key="inIndex" @click="handleCityClick(inItem.name)">
            {{inItem.name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Header",
    data() {
      return {
        searchText: '',
        result: [],
        timer: null
      }
    },
    methods: {
      handleCityClick(name) {
        this.$store.commit('changeCity', name);//向vuex store 传递数据
        this.$router.push('/')//编程式方式改变路由
      }
    },
    props: {
      hotCity: Array,
      cityList: Array,
      zimu: String
    },
    computed: {
      hasNoData() {
        return !this.result.length
      }
    },

    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {click: true});
      new BScroll(this.$refs.searchbox, {click: true});
    },

    beforeUpdate() {
      let arr = [];
      this.cityList.forEach((e, i) => {
        arr.push(e.initial);
      });
      this.$emit('cityLetter', arr);
    },

    watch: {
      zimu(newVal, oldVal) {
        if (newVal != '') {
          this.scroll.scrollToElement(this.$refs[newVal][0]);
          return
        }
      },
      searchText(newVal) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        if (newVal.replace(/\s/g, '') !== '') {
          this.timer = setTimeout(() => {
            const arrr = [];
            this.cityList.forEach((e, i) => {
              e.list.forEach((v, j) => {
                if (v.name.indexOf(this.searchText) > -1 || v.pinyin.toLocaleLowerCase().indexOf(this.searchText) > -1) {
                  arrr.push(v)
                }
              })
            });
            this.result = arrr;
          }, 200)
        } else {
          this.result = [];
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~@/assets/css/common.styl"
  .header
    font-size .36rem

    .header-top
      color white
      position fixed
      left: 0
      right: 0
      z-index 3
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


    .search-result
      position absolute
      top: 1.6rem
      left: 0
      z-index 2
      bottom 0
      width 100%
      background-color #e4e4e4
      overflow hidden

      ul
        background-color: #fff

      li
        padding .08rem
        border-bottom 1px solid #b7b7b7

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

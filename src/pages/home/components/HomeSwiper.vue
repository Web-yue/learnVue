<!-- The ref attr used to find the swiper instance -->
<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper" class="swiperBox" v-if="swiperArr.length">
      <!-- slides -->
      <swiper-slide v-for="(item ,key, index) in swiperArr" :key="key">
        <img class="swipe-img" :src="item|format" alt="photo"></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>

</template>

<script>
  export default {
    name: 'HomeSwiper',
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          autoplay: 3000,
          loop: true
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // ...
        }
      }
    },
    props: {
      swiperArr: Array
    },
    filters: {
      format(val) {
        // val = '@/assets/img/2.jpg';
        // return require(val) //require 这样引入变量会报错，用下面这种方法
        // .不能解析成变量
        let l = val.length, i = val.lastIndexOf('.'), n = val.slice(0, i), e = val.slice(i + 1, l);
        try {
          return require(`@/${n}.${e}`)
        } catch (e) {
          return ''
        }
      }
    },

    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      // console.log('this is current swiper instance object', this.swiper)
      // this.swiper.slideTo(3, 1000, true)
    }
  }
</script>

<style lang="stylus" scoped>
  .swiperBox >>> .swiper-pagination-bullet-active
    background-color red !important

  .swiperBox
    height 3rem
    background-color: #ccc

    .swipe-img
      width 100%

</style>

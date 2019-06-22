<!-- The ref attr used to find the swiper instance -->
<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper" class="swiperBox"  >
      <!-- slides -->
      <swiper-slide v-for="(item ,key, index) in imgArr"  :key="key"><img class="swipe-img" :src="item" alt="photo"></swiper-slide>

      <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>

      <!--    <div class="swiper-scrollbar"   slot="scrollbar"></div>-->
    </swiper>
   </div>


</template>

<script>
// const imgsrc='@'
import p1 from '@/assets/img/1.jpg'
  export default {
    name: 'HomeSwiper',
    data() {
      return {
        imgArr:[ p1 ,  require('@/assets/img/2.jpg'),require('@/assets/img/3.jpg')],
        swiperOption: {
          pagination : '.swiper-pagination',
          autoplay: 3000,
          loop:true
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // ...
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
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
  .swiperBox >>>.swiper-pagination-bullet-active
    background-color red !important
  .swiperBox
    height 3rem
    background-color: #ccc
    .swipe-img
      width 100%

</style>

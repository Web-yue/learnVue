<template>
  <div class="icons">


    <swiper :options="swiperOption" ref="mySwiper" class="">

      <swiper-slide v-for="(item ,key) in pages" :key="key">
        <div class="icons-item" v-for="item in item" :key="item.id">
          <div>
            <img :src="item.pic" alt="">
          </div>

          <p>{{item.desc}}</p>
        </div>
      </swiper-slide>


      <div class="swiper-pagination" slot="pagination"></div>

    </swiper>
  </div>
</template>

<script>
  export default {
    name: "Icons",
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          autoplay: false,
          loop: false
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // ...
        }
      }
    },
    props:{
      iconsArr:Array
    },
    computed: {
      pages() {
        const pages = [];
        this.iconsArr.forEach((value, index) => {
          let page = Math.floor(index / 8);
          if (!pages[page]) {
            pages[page] = []
          }
          pages[page].push(value)
        });
        return pages
      }
    }
  }
</script>

<style scoped lang="stylus">
  .icons
    height 3rem

    .icons-item
      width 25%
      float left
      height 1.5rem
      text-align center

      div
        width 100%
        height 60%
        padding 0 .3rem

        img
          width 100%
          height 100%

      p
        font-size .3rem


</style>

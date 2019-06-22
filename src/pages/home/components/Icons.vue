<template>
    <div class="icons">


      <swiper   ref="mySwiper" class="swiperBox"  >

        <swiper-slide v-for="(item ,key) in pages"  :key="key">
          <div class="icons-item" v-for="item in item" :key="item.id">
            <div>
              <img :src="item.pic" alt="" >
            </div>

            <p>{{item.desc}}</p>
          </div>
        </swiper-slide>


        <div class="swiper-pagination"  slot="pagination"></div>

      </swiper>
    </div>
</template>

<script>
    export default {
        name: "Icons",
      data(){
          return {
            iconItem:[
              {
                id:0,
                desc:'景点热门',
                pic:'http://s.qunarzz.com/touch_home/imgs/flight.png'
              },
              {
                id:1,
                desc:'滑雪季',
                pic:'http://s.qunarzz.com/touch_home/imgs/flight.png'
              },
              {
                id:2,
                desc:'ffff',
                pic:'http://s.qunarzz.com/touch_home/imgs/flight.png'
              },
              {
                id:3,
                desc:'景点热门',
                pic:'http://s.qunarzz.com/touch_home/imgs/flight.png'
              },
              {
                id:4,
                desc:'景点热门',
                pic:'http://s.qunarzz.com/touch_home/imgs/flight.png'
              },
              {
                id:5,
                desc:'ffff',
                pic:'http://s.qunarzz.com/touch_home/imgs/flight.png'
              },
              {
                id:6,
                desc:'景点热门',
                pic:'http://s.qunarzz.com/touch_home/imgs/flight.png'
              },
              {
                id:7,
                desc:'景点热门',
                pic:'http://s.qunarzz.com/touch_home/imgs/flight.png'
              },
              {
                id:8,
                desc:'景点热门',
                pic:'http://s.qunarzz.com/touch_home/imgs/flight.png'
              },
              {
                id:9,
                desc:'景点热门',
                pic:'http://s.qunarzz.com/touch_home/imgs/flight.png'
              }
            ]
          }
      },
      computed:{
          pages(){
            const pages=[];
            this.iconItem.forEach((value,index)=>{
               let  page=Math.floor(index/8);
               if(!pages[page]){
                 pages[page]=[]
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

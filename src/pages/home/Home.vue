<template>
  <div>
    <Header></Header>
    <Swiper :swiperArr="swiperArr"></Swiper>
    <Icons :iconsArr="iconsArr"></Icons>
  </div>
</template>

<script>
  import Header from './components/Header'
  import Swiper from './components/HomeSwiper'
  import Icons from './components/Icons'
  import axios from 'axios'
  import {mapState} from 'vuex'

  export default {
    name: "Home",
    components: {
      Header, Swiper, Icons
    },
    data() {
      return {
        swiperArr: [],
        iconsArr: [],
        lastCity: ''
      }
    },
    computed: {
      ...mapState(['city'])
    },
    methods:{
      getData(){
        axios.get('/api/data.json', {
          params: {
            city: this.city
          }
        }).then(res => {
          if (res.data.res && res.data.data) {
            const data = res.data.data;
            this.swiperArr = data.swiperArr;
            this.iconsArr = data.iconsArr;

          }
        }).catch(err => {
          console.log(err)

        })
      }
    },
    mounted(){
      this.getData();
      this.lastCity=this.city
    },
   activated() { //keep-alive 生命周期函数 组件被重新加载的时候执行
    if(this.lastCity!==this.city){ //解决keep-alive造成的ajax没有重新请求问题
      this.getData();
      this.lastCity=this.city
    }
   }
  }
</script>

<style scoped>

</style>

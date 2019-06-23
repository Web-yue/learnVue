<template>
    <div>
      <Header :city="city"></Header>
      <Swiper :swiperArr="swiperArr"></Swiper>
      <Icons :iconsArr="iconsArr"></Icons>
     </div>
</template>

<script>
  import Header from './components/Header'
  import Swiper from './components/HomeSwiper'
  import Icons from './components/Icons'
  import axios from 'axios'
  export default {
    name: "Home",
    components:{
      Header,Swiper,Icons
      },
    data(){
      return {
        city:'',
        swiperArr:[],
        iconsArr:[]
      }
    },
      created() {
          axios.get('/api/data.json').then(res=>{
            console.log(res)
            if(res.data.res&&res.data.data){
              const data=res.data.data;
              this.city=data.city;
              this.swiperArr=data.swiperArr;
              this.iconsArr=data.iconsArr;

            }
        }).catch(err=>{
          console.log(err)

          })

      }
    }
</script>

<style scoped>

</style>

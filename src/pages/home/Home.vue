<template>
    <div>
      <Header></Header>
      <Swiper></Swiper>
     </div>
</template>

<script>
  import Header from './components/Header'
  import Swiper from './components/HomeSwiper'
  import axios from 'axios'
    export default {
        name: "Home",
      components:{
          Header,Swiper
      },
      created() {
          axios.get('/api/data.json').then(res=>{
            console.log(res)
        }).catch(err=>{
          console.log(err)
          })
      }
    }
</script>

<style scoped>

</style>

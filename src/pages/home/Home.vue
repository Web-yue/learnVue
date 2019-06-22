<template>
    <div>
      <Header></Header>
      <Swiper></Swiper>
     </div>
</template>

<script>
  import Header from './components/Header'
  import Swiper from './components/HomeSwiper'
    export default {
        name: "Home",
      components:{
          Header,Swiper
      }
    }
</script>

<style scoped>

</style>

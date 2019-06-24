<template>
  <div class="city">
    <Header @cityLetter="showData" :zimu="zimu" :hotCity="hotCity" :nowCity="nowCity" :cityList="cityList"></Header>
    <Citynav @zimu="getZimu" :cityLetter="cityLetter"></Citynav>
  </div>
</template>

<script>
  import Header from './components/Header'
  import Citynav from './components/City-nav'
  import axios from 'axios'

  export default {
    name: "City",
    data(){
      return{
        nowCity:'',
        hotCity:[],
        cityList:[],
        cityLetter:[],
        zimu:''
      }
    },
    methods:{
      showData(res){
        // console.log(res)
        this.cityLetter=res;
      },
      getZimu(res){
        this.zimu=res;
      }
    },
    components: {
      Header, Citynav
    },
    mounted() {
      axios.get('/api/city.json').then(res => {
        const data=res.data;
        this.nowCity=data.nowCity;
        this.hotCity=data.hotCity;
        this.cityList=data.cityList
      }).catch(e=>{
        console.log(e)
      })
    }
  }
</script>

<style scoped>

</style>

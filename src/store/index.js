import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations' //当mutations 数据很多时，可以新建一个js专门存储mutations

let defaultCity = '北京';
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e){
}


Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    city: defaultCity
  },
  mutations,
  getters: { //用法类似于计算属性
    doubleCity(state) {
      return state.city + ' ' + state.city
    }
  }
})

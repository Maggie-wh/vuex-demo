import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0,
    count2: 100,
  },
  mutations: {
    countAdd(state,v) {
      state.count = v;
    },
    countDel(state){
      state.count2--;
    },
    count2Add(state){
      state.count2++;
    }
  }
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')

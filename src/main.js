import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(Vuex)
// const store = new Vuex.Store({
//   state: {
//     count: 0,
//     count2: 100,
//   },
//   mutations: {
//     countAdd(state,v) {
//       state.count = v;
//     },
//     countDel(state){
//       state.count2--;
//     },
//     count2Add(state){
//       state.count2++;
//     }
//   }
// })

// Vue.prototype.$store = store

router.beforeEach((to, from, next) => {
  if (store.state.userInfo || to.path === "/login") {
    // eslint-disable-next-line no-console
    console.log(1111)
      next()
  } else {
      next({
          path: "/login"
      })
  }
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

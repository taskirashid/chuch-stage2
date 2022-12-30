import Vue from 'vue'
import App from './App.vue'
import router from './router/index'


// router.beforeEach((to, from, next) => {
//   const token = localStorage.getItem('token')
//   if(to.path === '/') {
//     console.log(token)
//     if(token === null) {
//       next('/login')
//     } else {
//       next('/overview')
//     }
//   }
// })

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


// App
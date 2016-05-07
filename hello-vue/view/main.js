
import configRouter from '../route'
import App from '../component/app'

import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const router = new VueRouter({
  hashbang: true,
  history: true,
})

configRouter(router)

window.init = () => {
  router.start(App, 'body')

  setTimeout(() => {
    router.go('/foo')

    setTimeout(() => {
      router.go('/bar')
    }, 3000)
  }, 2000)
}

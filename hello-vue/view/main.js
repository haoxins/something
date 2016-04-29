
import configRouter from '../route'
import App from '../component/app'

import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const router = new VueRouter({
  history: true,
})

configRouter(router)

window.init = () => {
  router.start(App, 'body')

  setTimeout(() => router.go('/foo'), 3000)
}

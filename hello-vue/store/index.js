
import Vuex from 'vuex'
import Vue from 'vue'

import item from '../module/item'

Vue.use(Vuex)
Vue.config.debug = true

export default new Vuex.Store({
  modules: {
    item
  }
})

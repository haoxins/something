
import Vuex from 'vuex'
import Vue from 'vue'

import item from '../module/item'

Vue.use(Vuex)
Vue.config.debug = true

const store = new Vuex.Store({
  modules: {
    item: item
  }
})

export default store

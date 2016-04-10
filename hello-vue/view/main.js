
import Item from '../component/item'
import store from '../store'

import Vue from 'vue'

window.init = () => {
  new Item({
    el: '#el',
    store,
  })
}

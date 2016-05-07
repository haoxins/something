
import Component from 'vue-class-component'

import store from '../store'

import Item from './item'

@Component({
  components: {
    Item: Item
  },

  vuex: {},

  template: `
    <div>
      <item></item>
      <router-view></router-view>
    </div>
  `
})

class App {}

export default {
  components: {App},
  store: store
}

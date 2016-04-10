
import './index.css'

import Component from 'vue-class-component'

import {
  getItems,
  addItem
} from '../../action/item'

@Component({
  vuex: {
    getters: {
      items: ({item}) => item.items
    },

    actions: {
      getItems,
      addItem
    }
  },

  template: `
    <main>
      <div>
        <p v-for='item in items'>
          {{item.id}} - {{item.name}}
        </p>
      </div>
      <div>
        <input v-model='name'>
        <button @click='addNewItem'>add</button>
      </div>
    </main>
  `
})

class Item {
  data() {
    return {
      name: ''
    }
  }

  addNewItem() {
    const name = this.name.trim()

    if (name) {
      this
        .addItem({name})
        .then(() => this.name = '')
        .then(() => this.getItems())
    }
  }

  created() {
    this.getItems()
  }
}

export default Item

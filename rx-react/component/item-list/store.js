
import { createStore } from 'react.rx'
import { add, del } from './action'

const store = createStore({
  items: []
})

add.subscribe(item => {
  store.update({
    items: [...store.state.items, {
      ...item,
      id: store.state.items.length + 1
    }]
  })
})

del.subscribe(id => {
  store.update({
    items: [...store.state.items.filter(i => i.id !== id)]
  })
})

export default store


import { createStore } from '../../lib'
import { subjects } from './action'
import rx from 'rxjs'

const store = createStore({
  items: []
})

subjects.addItemSubject.subscribe(item => {
  store.update({
    items: [...store.state.items, {
      ...item,
      id: store.state.items.length + 1
    }]
  })
})

subjects.delItemSubject.subscribe(id => {
  store.update({
    items: [...store.state.items.filter(i => i.id !== id)]
  })
})

export default store

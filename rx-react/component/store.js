
import { createStore } from '../lib'
import { switchItem } from './action'
import rx from 'rxjs'

const store = createStore({
  currentItemId: 0
})

switchItem.subscribe(id => {
  store.update({
    currentItemId: id
  })
})

export default store

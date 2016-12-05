
import { createStore } from '../../lib'
import { subjects } from './action'
import rx from 'rxjs'

const store = createStore({
  info: {}
})

subjects.getItemInfoSubject.subscribe(info => {
  store.update({info})
})

subjects.updateItemSubject.subscribe(up => {
  store.update({info: up})
})

export default store


import { createStore } from '../../lib'
import { getInfo, update } from './action'

const store = createStore({
  info: {}
})

getInfo.subscribe(info => {
  store.update({info})
})

update.subscribe(up => {
  store.update({info: up})
})

export default store

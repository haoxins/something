
import * as api from '../api/item'

export const addItem = ({dispatch}, item) => {
  return api.addItem(item).then(() => {
    dispatch('add item', item)
  })
}

export const getItems = ({dispatch}) => {
  return api.getItems().then(({items}) => {
    dispatch('get items', items)
  })
}

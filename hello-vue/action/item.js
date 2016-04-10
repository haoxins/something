
import * as api from '../api/item'

export const addItem = ({dispatch}, item) => {
  api.addItem(item).then(() => {
    dispatch('add item', item)
  })
}

export const getItems = ({dispatch}) => {
  api.getItems().then(({items}) => {
    dispatch('get items', items)
  })
}

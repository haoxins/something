
import { createAction } from '../../lib'

export const add = createAction(function(item) {
  return item
})

export const del = createAction(function(id) {
  return id
})


import rx from 'rxjs'
import { createAction } from '../lib'

export const switchItem = createAction(function(id) {
  return id
})

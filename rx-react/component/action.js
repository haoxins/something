
import rx from 'rxjs'
import { createAction } from 'react.rx'

export const switchItem = createAction(function(id) {
  return id
})

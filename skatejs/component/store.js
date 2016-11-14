
import items from '../fixture/item'

import Rx from 'rxjs'

const add = new Rx.Subject()

export function addCount(id, count = 1) {
  add.next({id, count})
}

export const store = Rx.Observable
  .of({items: items.map(i => ({...i}))})
  .merge(add)
  .scan((state, payload, count) => {
    return {
      items: state.items.map(i => {
        if (i.id === payload.id) {
          return {
            ...i,
            count: i.count + payload.count
          }
        }

        return {...i}
      })
    }
  })

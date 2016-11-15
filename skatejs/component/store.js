
import items from '../fixture/item'

import Rx from 'rxjs'

const itemStore = new Rx.Subject()

export function addItem(item) {
  itemStore.next({
    type: 'add item',
    payload: item
  })
}

export function addCount(id, count = 1) {
  itemStore.next({
    type: 'add count',
    payload: {id, count}
  })
}

export const store = Rx.Observable
  .of({items: items.map(i => ({...i}))})
  .merge(itemStore)
  .scan((state, {type, payload}, count) => {
    switch (type) {
      case 'add count':
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
      case 'add item':
        return {
          items: [...state.items, {
            count: 0,
            ...payload,
            id: items.length + 1
          }]
        }
    }
  })

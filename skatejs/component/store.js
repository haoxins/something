
import items from '../fixture/item'

import clone from 'clone'
import Rx from 'rxjs'

const addCountSubject = new Rx.Subject()
const addItemSubject = new Rx.Subject()

let state = {
  items: items.map(i => ({...i}))
}

export const addItem = item => {
  addItemSubject.next(item)
}

export const addCount = (id, count = 1) => {
  addCountSubject.next({id, count})
}

export const store = new Rx.ReplaySubject()

store.next(state)

addCountSubject.subscribe(({id, count}) => {
  state = clone({
    ...state,
    items: state.items.map(i => {
      if (i.id === id) {
        return {
          ...i,
          count: i.count + count
        }
      }

      return {...i}
    })
  })

  store.next(state)
})

addItemSubject.subscribe(item => {
  state = clone({
    ...state,
    items: [...state.items, {
      ...item,
      count: 0,
      id: state.items.length + 1
    }]
  })

  store.next(state)
})

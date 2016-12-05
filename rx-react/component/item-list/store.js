
import update from 'react/lib/update'
import { subjects } from './action'
import rx from 'rxjs'

const subject = new rx.ReplaySubject(1)

let state = {
  items: []
}

subjects.addItemSubject.subscribe(item => {
  state = update(state, {
    $merge: {
      items: [...state.items, {
        ...item,
        id: state.items.length + 1
      }]
    }
  })

  subject.next(state)
})

subjects.delItemSubject.subscribe(id => {
  state = update(state, {
    $merge: {
      items: [...state.items.filter(i => i.id !== id)]
    }
  })

  subject.next(state)
})

subject.next(state)

export default subject


import update from 'react/lib/update'
import { subjects } from './action'
import rx from 'rxjs'

const subject = new rx.ReplaySubject(1)

let state = {
  info: {}
}

subjects.getItemInfoSubject.subscribe(info => {
  state = update(state, {
    $merge: {info}
  })

  subject.next(state)
})

subjects.updateItemSubject.subscribe(up => {
  state = update(state, {
    $merge: {
      info: up
    }
  })

  subject.next(state)
})

subject.next(state)

export default subject

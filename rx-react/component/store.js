
import update from 'react/lib/update'
import { subjects } from './action'
import rx from 'rxjs'

const subject = new rx.ReplaySubject(1)

let state = {
  currentItemId: 0
}

subjects.switchItemSubject.subscribe(id => {
  state = update(state, {
    $merge: {
      currentItemId: id
    }
  })

  subject.next(state)
})

subject.next(state)

export default subject

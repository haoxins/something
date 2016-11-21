
import rx from 'rxjs'

const addItemSubject = new rx.Subject()
const delItemSubject = new rx.Subject()

export const subjects = {
  addItemSubject,
  delItemSubject
}

export const addItem = item => addItemSubject.next(item)

export const delItem = id => delItemSubject.next(id)

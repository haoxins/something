
import rx from 'rxjs'

const addItemSubject = new rx.Subject()
const delItemSubject = new rx.Subject()

export const subjects = {
  addItemSubject,
  delItemSubject
}

export function add(item) {
  addItemSubject.next(item)
}

export function del(id) {
  delItemSubject.next(id)
}

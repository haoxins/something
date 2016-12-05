
import rx from 'rxjs'

const switchItemSubject = new rx.Subject()

export const subjects = {
  switchItemSubject
}

export function switchItem(id) {
  switchItemSubject.next(id)
}

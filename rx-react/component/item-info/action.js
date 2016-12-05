
import {
  updateItemInfo,
  getItemInfo
} from '../../api/item'

import rx from 'rxjs'

const getItemInfoSubject = new rx.Subject()
const updateItemSubject = new rx.Subject()

export const subjects = {
  getItemInfoSubject,
  updateItemSubject
}

export async function update(id, up) {
  await updateItemInfo(id, up)
  updateItemSubject.next(up)
}

export async function getInfo(id) {
  const info = await getItemInfo()
  getItemInfoSubject.next(info)
}


// a -> b -> c1 -> d1
//        -> c2 -> d2
//        -> c3 -> d3

const rx = require('rxjs')
// rx style - v1
const a = new rx.Subject()
const b = new rx.Subject()
const c1 = new rx.Subject()
const c2 = new rx.Subject()
const c3 = new rx.Subject()
const d1 = new rx.Subject()
const d2 = new rx.Subject()
const d3 = new rx.Subject()

setTimeout(() => a.next(), 2000)

a.subscribe(() => b.next())

b.subscribe(() => {
  c1.next()
  c2.next()
  c3.next()
})

c1.subscribe(() => d1.next())
c2.subscribe(() => d2.next())
c3.subscribe(() => d3.next())

d1.subscribe(() => console.info('done', 'f1'))
d2.subscribe(() => console.info('done', 'f2'))
d3.subscribe(() => console.info('done', 'f3'))


const EventEmitter = require('events')
const rx = require('rxjs')

const es = new EventEmitter()

function getMessages(start, end) {
  return Promise.resolve([{
    id: 1,
    context: 'a'
  }, {
    id: 2,
    context: 'b'
  }, {
    id: 3,
    context: 'c'
  }])
}

setInterval(() => {
  es.emit('new message', {
    id: Date.now() % 1000,
    context: Math.random().toString(16).slice(2)
  })
}, 3000)

const rs = new rx.Subject()

setInterval(() => {
  rs.next({
    id: Date.now() % 1000,
    context: Math.random().toString(16).slice(2)
  })
}, 3000)

module.exports = {
  getMessages,
  es,
  rs
}

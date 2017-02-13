
// a -> b -> c1 -> d1
//        -> c2 -> d2
//        -> c3 -> d3

// 注:
//   实际项目中 events handlers 处于不同文件
//   events handlers 拥有较复杂的 async & sync 逻辑

const EventEmitter = require('events')

const es = new EventEmitter()

function emit(name, data) {
  console.info('event', name)
  setImmediate(() => es.emit(name, data))
}

setTimeout(() => emit('a'), 2000)

es.addListener('a', () => {
  emit('b')
})

es.addListener('b', () => {
  emit('c1')
  emit('c2')
  emit('c3')
})

es.addListener('c1', () => {
  emit('d1')
})

es.addListener('c2', () => {
  emit('d2')
})

es.addListener('c3', () => {
  emit('d3')
})

es.addListener('d1', () => {
  console.info('done', 'f1')
})

es.addListener('d2', () => {
  console.info('done', 'f2')
})

es.addListener('d3', () => {
  console.info('done', 'f3')
})

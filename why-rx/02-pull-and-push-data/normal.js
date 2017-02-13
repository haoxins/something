
const { getMessages, es } = require('./base')

// 注:
//   实际项目中, events 是分散的 (来源, 处理)

const store = {}

getMessages().then(msgs => store.msgs = [...msgs])

es.on('new message', msg => {
  store.msgs = [...store.msgs, msg]
  console.info('count', store.msgs.length)
})


const { getMessages, rs } = require('./base')
const rx = require('rxjs')

// 注:
//   - 无需外部的变量

rx.Observable
  .fromPromise(getMessages())
  .merge(rs)
  .scan((state, data) => {
    if (Array.isArray(data)) {
      return {
        msgs: [...data]
      }
    } else {
      return {
        msgs: [...state.msgs, data]
      }
    }
  }, {})
  .subscribe(state => {
    console.info('count', state.msgs.length)
  })


const rx = require('rxjs')

const {
  getRemoteItems,
  getLocalItems,
  setLocalItems,
  render
} = require('./base')

rx.Observable
  .of(getLocalItems())
  .merge(getRemoteItems().then(data => {
    setLocalItems(data)
    return data
  }))
  .subscribe(data => {
    render(data)
  })

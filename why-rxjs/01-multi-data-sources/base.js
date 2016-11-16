
function getLocalItems() {
  return {
    items: [0, 1, 2]
  }
}

function setLocalItems(items) {
  console.info('done', items)
}

function getRemoteItems() {
  return Promise.resolve({
    items: [3, 4, 5]
  })
}

function render(props) {
  console.info('render', props)
}

module.exports = {
  getRemoteItems,
  setLocalItems,
  getLocalItems,
  render
}

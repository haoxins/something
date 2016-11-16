
const {
  getRemoteItems,
  getLocalItems,
  setLocalItems,
  render
} = require('./base')

// 注:
//   - 实际项目中, render 不会如此轻易剥离出来
//   - 或者说, 代码中多次调用 render 是需要付出代价的

async function init() {
  const data1 = getLocalItems()
  render(data1)

  const data2 = await getRemoteItems()
  render(data2)

  setLocalItems(data2)
}

Promise.resolve(init())

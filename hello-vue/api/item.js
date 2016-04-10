
const assign = Object.assign

const items = [{
  id: 1,
  name: 'hello'
}, {
  id: 2,
  name: 'world'
}]

export const getItems = () => {
  return Promise.resolve({
    message: 'success',
    items: [...items]
  })
}

export const addItem = item => {
  item.id = items.length + 1
  items.push(assign({}, item))

  return Promise.resolve({
    message: 'success'
  })
}

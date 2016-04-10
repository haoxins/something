
const state = {
  items: []
}

const mutations = {
  'get items': (state, items) => {
    state.items = items
  },

  'add item': () => {
  }
}

export default {
  mutations,
  state
}

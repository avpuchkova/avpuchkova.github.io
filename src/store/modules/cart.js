import itemsTEST from '@/helper/items';

const state = {
  items: itemsTEST
}

const getters = {
  updatedItems: state => state.items,
  totalPrice: state => state.items.reduce((acc, item) => acc + item.price, 0),
  totalItems: state => state.items.length
}

const mutations = {
  updateCart: (state, id) => {
    state.items = state.items.filter(item => item.id !== id)
    console.log(state.items)
  }
}

const actions = {
  deleteItem(context,
    id
  ) {
    return context.commit('updateCart', id)
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}

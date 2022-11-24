import itemsTEST from '@/helper/items';

const state = {
  loading: false,
  items: itemsTEST
}

const getters = {
  updatedItems: state => state.items,
  totalPrice: state => state.items.reduce((acc, item) => acc + item.price, 0),
  totalItems: state => state.items.length,
  loadingCart: state => state.loading
}

const mutations = {
  LOADING: (state) => {
    state.loading = true
  },
  addToCart: (state, item) => {
    state.items.push(item)
    state.loading = false
  },
  deleteFromCart: (state, id) => {
    state.items = state.items.filter(item => item.id !== id)
    console.log(state.items)
  },
}

const actions = {
  addItem(context, item) {
    context.commit('LOADING');
    return new Promise(resolve => {
      setTimeout(() => {
        context.commit('addToCart', item)
        resolve();
      }, 3000);
    });
  },
  deleteItem(context,
    id
  ) {
    return context.commit('deleteFromCart', id)
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}

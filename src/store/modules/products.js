import {
  products,
  options,
  productTypes
} from '@/helper/products';

const state = {
  products: products,
  productsOrder: products.filter(p => p.availableOrder),
  options: options,
  currentProduct: null,
  currentProductOptionIds: [],
  productTypes: productTypes,
  currentProductId: null,
  productTypeId: null,
}

const getters = {
  currentProduct: state => products.find((p) => p.id === state.currentProductId),
  currentProductOptions: state => options.filter(o => state.currentProductOptionIds.includes(o
    .id))
}

const mutations = {
  getCurrentProduct: (state, payload) => {
    state.currentProduct = state.products.find(p => p.product === payload)
    state.currentProductOptionIds = state.products.find(p => p.product === payload).options

    state.currentProductId = state.products.find((p) => p.product === payload).id
    state.productTypeId = state.products.find((p) => p.product === payload).productTypeId
  }
}

const actions = {
  selectProduct(context,
    name
  ) {
    console.log("ACTION selectProduct: ", name)

    return context.commit('getCurrentProduct', name)
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}

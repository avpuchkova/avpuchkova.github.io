import {
  products,
  options,
  productTypes
} from '@/helper/products';

const state = {
  products: products,
  productsOrder: products
    .filter(p => p.availableOrder)
    .sort((a, b) => a.orderOrder > b.orderOrder ? 1 : -1),
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
    .id)),
  productTypeId: state => state.productTypeId
}

const mutations = {
  getCurrentProduct: (state, payload) => {
    state.currentProduct = state.products.find(p => p.product === payload)
    state.currentProductOptionIds = state.products.find(p => p.product === payload).options
    console.log('M>>> state.currentProductOptionIds', state.currentProductOptionIds)

    state.currentProductId = state.products.find((p) => p.product === payload).id
    state.productTypeId = state.products.find((p) => p.product === payload).productTypeId
    console.log('M>>> state.productTypeId', state.productTypeId)
  }
}

const actions = {
  selectProduct(context,
    name
  ) {
    return context.commit('getCurrentProduct', name)
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}

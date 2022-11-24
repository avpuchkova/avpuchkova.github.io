import router from '@/router';

import {
  items,
  types,
  page,
  size,
  corners,
  orientation,
  style,
  colour,
  premium,
  logo
} from '@/helper/base';

import {
  products,
  options,
  productTypes
} from '@/helper/products';

const findItemType = (id) => {
  return state.types.find(type => type.id === id).value
}

const state = {
  products: products.filter(p => p.availableCreate),
  productsCreate: products.filter(p => p.availableCreate),

  items: items,
  businessCards: items.filter(item => item.typeId === 1),
  sortedbusinessCards: items.filter(item => item.typeId === 1),
  currentBusinessCard: {},

  currentTypeId: 1,

  openedProduct: {},
  sortedProducts: [],

  types,
  size,
  page,
  corners,
  orientation,
  style,
  colour,
  premium,
  logo
}

const getters = {
  sortedBusinessCards: state => state.sortedbusinessCards,
  currentBusinessCard: state => state.currentBusinessCard,

  sortedProducts: state => state.sortedProducts,
  openedProduct: state => state.openedProduct,

  size: state => state.size
}

const mutations = {
  showAllItems: (state, typeId) => {
    let type = findItemType(typeId);

    state[`sorted${type}`] = state[type]
    state.sortedProducts = items.filter(item => item.typeId === typeId)
    console.log('mutations', 'showAllItems', state.sortedProducts)

    state.currentTypeId = typeId
    state.size = size.filter(item => item.typeId === typeId)
  },
  sortItems: (state, {
    form,
    id
  }) => {
    console.log('sortItems MUTATION', 'id: ', id, 'form>', form)
    if (!form) {
      //state.sortedbusinessCards = state.businessCards
      state.sortedProducts = state.productsCreate
      console.log('!form', 'sortedProducts', state.sortedProducts)
    } else {

      let type = findItemType(id)
      console.log('>>>>>> type', type, 'id', id)
      //let cards = state[type]

      // state[`sorted${type}`] = cards.filter((card, i) => {
      //   return Object.entries(form).every(([k, v]) => {

      //     return Array.isArray(v) ?
      //       v.every(e => card[k].includes(e)) :
      //       card[k] === v || v === null || !v
      //   })
      // })

      let cards = state.items.filter(item => item.typeId === id)
      console.log('>>>>>> cards', cards)

      state.sortedProducts = cards.filter((card, i) => {
        return Object.entries(form).every(([k, v]) => {

          return Array.isArray(v) ?
            v.every(e => card[k].includes(e)) :
            card[k] === v || v === null || !v
        })
      })

      console.log('>>>>>> state.sortedProducts', state.sortedProducts)

    }
  },

  selectBusinessCard: (state, id) => {
    state.currentBusinessCard = state.businessCards.find(card => card.id == id)
  },

  openProduct: (state, id) => {
    console.log('MUTATION openProduct', id)
    console.log('openProduct', state.items.find(card => card.id == id))
    //let products = products.filter(p => p.typeId === typeId && p.availableCreate)
    state.openedProduct = state.items.find(card => card.id == id)
  },
}

const actions = {
  showAllItems(context, typeId) {
    return context.commit('showAllItems', typeId)
  },
  sortProducts(context, {
    form,
    id
  }) {
    console.log('ACTION sortItems', form, id)
    return context.commit('sortItems', {
      form,
      id
    })
  },

  openProduct(context, id) {
    context.commit('openProduct', id)
  },

  selectBusinessCard(context, id) {
    context.commit('selectBusinessCard', id)
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}

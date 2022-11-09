import router from '@/router';

import {
  items,
  types,
  sizes,
  corners,
  orientations,
  styles,
  colours
} from '@/helper/base';

const findItemType = (id) => {
  return state.types.find(type => type.id === id).value
}

const state = {
  items: items,
  businessCards: items.filter(item => item.typeId === 1),
  sortedbusinessCards: items.filter(item => item.typeId === 1),
  currentBusinessCard: {},

  types,
  sizes,
  corners,
  orientations,
  styles,
  colours
}

const getters = {
  sortedBusinessCards: state => state.sortedbusinessCards,
  currentBusinessCard: state => state.currentBusinessCard
}

const mutations = {
  sortItems: (state, form) => {
    let type = findItemType(form.typeId)
    let cards = state[type] ///state[type] 

    const result = cards.filter((card, i) => {
      return Object.entries(form).every(([k, v]) => {

        return Array.isArray(v) ? v.every(e => card[k].includes(e)) : card[k] === v ||
          v === null
      })
    })

    state[`sorted${type}`] = result
  },

  selectBusinessCard: (state, id) => {
    state.currentBusinessCard = state.businessCards.find(card => card.id === id)
  }
}

const actions = {
  sortItems(context, form) {
    return context.commit('sortItems', form)
  },
  selectBusinessCard(context, id) {
    console.log('selectBusinessCard', id)
    context.commit('selectBusinessCard', id)
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}

import Vue from 'vue';
import Vuex from 'vuex';

import language from '@/store/modules/language.js';
import auth from '@/store/modules/auth.js';
import cart from '@/store/modules/cart.js';
import base from '@/store/modules/base.js';
import products from '@/store/modules/products.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    language,
    auth,
    cart,
    base,
    products
  },
});

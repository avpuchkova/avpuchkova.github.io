import Vue from 'vue';
import Vuex from 'vuex';

import language from '@/store/modules/language.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    language,
  },
});

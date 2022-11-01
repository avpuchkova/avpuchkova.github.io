import Vue from 'vue';
import Vuex from 'vuex';

import language from '@/store/modules/language.js';
import auth from '@/store/modules/auth.js'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    language,
    auth
  },
});

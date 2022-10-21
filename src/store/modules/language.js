import languages from '@/helper/languages';

const state = {
  currentLanguage: 'en',
  languages: languages,
}

const getters = {
  currentLanguageText: state => languages.find((l) => l.value === state.currentLanguage).text,
  currentLanguageIcon: state => languages.find((l) => l.value === state.currentLanguage).iconSrc,
}

const mutations = {
  getCurrentLanguage: (state, payload) => {
    state.currentLanguage = payload
  }
}

const actions = {
  setCurrentLanguage(context, {
    language
  }) {
    console.log("ACTION language: ", language)

    return context.commit('getCurrentLanguage', language)
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}

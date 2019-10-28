import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export const state = () => ({
  // ページタイトル
  pageTitle: []

})
// export const getters = {
//   pageTitle2 (state) {
//     return state.pageTitle
//   }
// }

export const mutations = {
  pageTitle (state, pageTitle) {
    state.pageTitle = pageTitle
  }
}

const store = new Vuex.Store({
  state,
  // getters,
  mutations,
  plugins: [createPersistedState({
    paths: ['pageTitle']
  })]
})

export default store

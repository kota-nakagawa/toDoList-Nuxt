export const state = () => ({

  // ページタイトル
  pageTitle: null
})

export const mutations = {
  pageTitle (state, pageTitle) {
    state.pageTitle = pageTitle
  }
}

// const store = new Vuex.Store({
//   state,
//   // getters,
//   mutations,
//   plugins: [createPersistedState({
//     paths: ['pageTitle']
//   })]
// })

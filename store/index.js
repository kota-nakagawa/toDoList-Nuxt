export const state = () => ({

  // ページタイトル
  pageTitle: null,

  // ダークモード
  isDarkMode: false

})

export const mutations = {
  pageTitle (state, pageTitle) {
    state.pageTitle = pageTitle
  },
  isDarkMode (state, isDarkMode) {
    state.isDarkMode = isDarkMode
  }
}

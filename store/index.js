export const state = () => ({

  // ページタイトル
  pageTitle: null

})

export const mutations = {
  pageTitle (state, pageTitle) {
    state.pageTitle = pageTitle
  }
}

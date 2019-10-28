export const state = () => ({

  // ページタイトル
  pageTitle: null,

  // ダークモード
  isDarkMode: false,

  // タスクのタイトル、内容、期日の配列
  tasks: []

})

export const mutations = {
  setPageTitle (state, pageTitle) {
    state.pageTitle = pageTitle
  },
  isDarkMode (state, isDarkMode) {
    state.isDarkMode = isDarkMode
  },
  addTask (state, task) {
    state.tasks.push(task)
  }
}

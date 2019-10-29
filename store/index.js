export const state = () => ({

  // ページタイトル
  pageTitle: null,

  // ダークモード
  isDarkMode: false,

  // タスクのタイトル、内容、期日、完了済みかの配列
  tasks: [],

  // 今日の日付
  date: null

})

export const getters = {
  overdueDate (state) {
    return state.tasks.filter((task) => {
      const now = state.date
      const today = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`
      return task.date !== today && Date.now() > new Date(task.date).getTime()
    })
  },
  today (state) {
    return state.tasks.filter((task) => {
      const now = state.date
      const today = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`
      return task.date === today
    })
  },
  tomorrow (state) {
    return state.tasks.filter((task) => {
      const now = state.date
      const [year, month, day] = task.date.split('-').map(Number)
      return year === now.getFullYear() &&
        month === (now.getMonth() + 1) && day === (now.getDate() + 1)
    })
  },
  someday (state, getters) {
    return state.tasks.filter((task) => {
      const ignore = [getters.overdueDate, getters.today, getters.tomorrow].flat().map(task => task.id)
      return !ignore.includes(task.id)
    })
  }
}

export const mutations = {
  setPageTitle (state, pageTitle) {
    state.pageTitle = pageTitle
  },
  isDarkMode (state, isDarkMode) {
    state.isDarkMode = isDarkMode
  },
  addTask (state, task) {
    state.tasks.push(task)
  },
  setDate (state, date) {
    state.date = date
  }
}

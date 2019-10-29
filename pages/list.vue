<template>
  <div>
    <div v-for="task in reverseTasks" :key="task.taskContents" class="content-container">
      <listItem :title="task.title" :content="task.date" />
    </div>
    <addListButton />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import listItem from '@/components/listItem'
import addListButton from '@/components/addListButton'
export default {
  components: {
    listItem,
    addListButton
  },
  computed: {
    ...mapState(['tasks']),
    reverseTasks () {
      return this.tasks.slice().reverse()
    }
  },
  transition (to, from) {
    if (!from) { return }
    const map = { index: 0, list: 1, settings: 2 }
    return {
      name: map[to.name] < map[from.name] ? 'slide-right' : 'slide-left'
    }
  },
  created () {
    this.$store.commit('setPageTitle', this.$metaInfo.title)
  },
  head () {
    return {
      title: 'リスト'
    }
  }
}
</script>

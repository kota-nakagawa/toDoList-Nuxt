<template>
  <div>
    <div class="date-container">
      <p>期限超過</p>
      <listItem />
      <p>今日</p>
      <listItem />
      <p>明日</p>
      <listItem />
      <p>いつか</p>
      <listItem />
      <listItem />
      <listItem />
    </div>
    <addListButton />
  </div>
</template>

<script>
import listItem from '@/components/listItem'
import addListButton from '@/components/addListButton'
export default {
  transition (to, from) {
    if (!from) { return }
    const map = { index: 0, list: 1, settings: 2 }
    return {
      name: map[to.name] < map[from.name] ? 'slide-right' : 'slide-left'
    }
  },
  components: {
    listItem,
    addListButton
  },
  created () {
    this.$store.commit('setPageTitle', this.$metaInfo.title)
  },
  head () {
    return {
      title: 'スケジュール'
    }
  }
}
</script>

<style scoped>
.date-container {
  margin-left: 25px;
}
</style>

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

<template>
  <div class="date-container">
    <p>今日</p>
    <listItem />
    <p>明日</p>
    <listItem />
    <p>いつか</p>
    <listItem />
    <listItem />
    <listItem />
  </div>
</template>

<script>
import listItem from '@/components/listItem'
export default {
  components: {
    listItem
  },
  created () {
    this.$store.commit('pageTitle', this.$metaInfo.title)
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

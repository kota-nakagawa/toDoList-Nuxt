<template>
  <div class="date">
    <p>今日</p>
  </div>
</template>

<script>
export default {
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
.date {
  margin-left: 25px;
}
</style>

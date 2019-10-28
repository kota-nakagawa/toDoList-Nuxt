<template>
  <p>スケジュール</p>
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

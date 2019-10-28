<template>
  <p>設定</p>
</template>

<script>
export default {
  created () {
    this.$store.commit('pageTitle', this.$metaInfo.title)
  },
  head () {
    return {
      title: '設定'
    }
  }
}
</script>

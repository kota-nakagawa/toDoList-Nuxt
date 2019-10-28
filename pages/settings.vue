<template>
  <div>
    <div class="settings-container" />
    <div class="settings-container" />
  </div>
</template>

<script>
export default {
  created () {
    this.$store.commit('setPageTitle', this.$metaInfo.title)
  },
  head () {
    return {
      title: '設定'
    }
  }
}
</script>

<style scoped>
.settings-container{
  margin: 25px;
  height: 80px;
  background-color: #ffffff;
  box-shadow: 0px 4px 16px rgba(0,0,0,0.1);
  border-radius: 15px;
  text-align: center;
}
</style>

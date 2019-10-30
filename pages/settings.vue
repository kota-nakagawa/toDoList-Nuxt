<template>
  <div>
    <div class="settings-container">
      <div class="flex-container">
        <h2>ユーザー設定</h2>
        <svg class="svg-object" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" /></svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
      title: '設定'
    }
  }
}
</script>

<style scoped>
.settings-container {
  margin: 25px;
  height: 80px;
  background-color: #ffffff;
  box-shadow: 0px 4px 16px rgba(0,0,0,0.1);
  border-radius: 15px;
  text-align: center;
}
.settings-container h2 {
  display: inline-block;
  margin-right: auto;
  text-align: left;
}
.flex-container {
  display: flex;
}
.flex-container h2 {
  padding-left: 20px;
  padding-top: 25px;
  margin: 0;
}
.svg-object {
  padding-top: 30px;
  height: 24px;
  width: 24px;
  margin-left: auto;
  padding-right: 20px;
}
</style>

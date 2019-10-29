<template>
  <div>
    <div class="date-container">
      <p>期限超過</p>
      <div class="schedule-container">
        <h2>テスト</h2>
        <p>コンテンツ</p>
      </div>
      <p>今日</p>
      <div class="schedule-container">
        <h2>テスト</h2>
        <p>コンテンツ</p>
      </div>
      <p>明日</p>
      <div class="schedule-container">
        <h2>テスト</h2>
        <p>コンテンツ</p>
      </div>
      <p>いつか</p>
      <div class="schedule-container">
        <h2>テスト</h2>
        <p>コンテンツ</p>
      </div>
    </div>
    <addListButton />
  </div>
</template>

<script>
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
.schedule-container{
  margin: 25px;
  height: 80px;
  background-color: #ffffff;
  box-shadow: 0px 4px 16px rgba(0,0,0,0.1);
  border-radius: 15px;
  text-align: center;
}
.schedule-container h2 {
  padding-top: 10px;
  padding-left: 20px;
  margin: 0;
  text-align: left;
}
.schedule-container p {
  margin: 0;
  padding-bottom: 10px;
  padding-left: 20px;
  text-align: left;
  color: #777777;
}
</style>

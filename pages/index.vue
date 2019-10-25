<template>
  <div>
    <div class="content-container">
      <listItem />
      <listItem />
      <listItem />
      <listItem />
      <listItem />
      <listItem />
      <listItem />
      <listItem />
    </div>
    <div class="test">
      <div class="button" />
    </div>
  </div>
</template>

<script>
import listItem from '@/components/listItem'
export default {
  components: {
    listItem
  },
  head () {
    return {
      title: 'スケジュール'
    }
  }
}
</script>

<style scoped>
.test {
  display: block;
}
.button {
  height: 55px;
  width: 55px;
  background-color: blue;
  z-index: 15;
  bottom: 18px;
  right: 18px;
  position: fixed;
}
</style>

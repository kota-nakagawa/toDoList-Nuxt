<template>
  <div>
    <div class="header">
      <div class="header-title">
        <h1>{{ pageTitle }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['pageTitle'])
  }
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
}
.header-title h1 {
  font-weight: bold;
  margin: 0;
  padding-top: 30px;
  padding-left: 25px;
  font-size: 30px;
}
</style>

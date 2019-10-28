<template>
  <div>
    <div class="header">
      <div class="header-title">
        <p>{{ pageTitle }}</p>
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
.header-title p {
  font-weight: bold;
  margin: 0;
  padding-top: 30px;
  padding-left: 25px;
  font-size: 30px;
}
</style>

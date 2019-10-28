<template>
  <div>
    <div class="header">
      <div class="header-title">
        <p>{{ title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
}
.header-title p {
  margin: 0;
  padding-top: 30px;
  padding-left: 25px;
  font-size: 30px;
  font-family: 'Hiragino Maru Gothic ProN'
}
</style>

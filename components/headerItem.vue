<template>
  <div>
    <div class="header">
      <div class="header-title">
        <p>{{ title }}</p>
      </div>
      <div class="add-button" />
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
  padding-left: 15px;
  font-size: 30px;
  font-family: 'Hiragino Maru Gothic ProN'
}
.add-button {
  margin-top: 30px;
  margin-right: 15px;
  height: 45px;
  width: 45px;
  background-color: blue;
}
</style>

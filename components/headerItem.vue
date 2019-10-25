<template>
  <p>{{ title }}</p>
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
p {
  margin: 0;
  padding-top: 30px;
  padding-left: 15px;
  font-size: 30px;
  font-family: 'Hiragino Maru Gothic ProN'
}
</style>

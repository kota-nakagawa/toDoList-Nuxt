<template>
  <div class="list-container">
    <h2>{{ title }}</h2>
    <p>期日: {{ content }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.list-container{
  margin: 25px;
  height: 80px;
  background-color: #ffffff;
  box-shadow: 0px 4px 16px rgba(0,0,0,0.1);
  border-radius: 15px;
}
.list-container h2 {
  padding-top: 10px;
  padding-left: 20px;
  margin: 0;
  text-align: left;
}
.list-container p {
  margin: 0;
  padding-bottom: 10px;
  padding-left: 20px;
  text-align: left;
  color: #777777;
}
</style>

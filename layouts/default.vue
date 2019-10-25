<template>
  <div class="main-container">
    <nuxt />
    <div class="footer-container">
      <footerItem />
    </div>
  </div>
</template>

<script>
import footerItem from '@/components/footerItem'
export default {
  components: {
    footerItem
  }
}
</script>

<style>
html {
  background-color: #F5F5F5;
}
body {
  margin:0 auto;
}
.main-container {
  max-width: 600px;
  margin:0 auto;
  background-color: #F5F7FA;
  height: 100vh;
}
</style>

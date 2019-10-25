<template>
  <div>
    <div class="footer-top" />
    <div class="footer">
      <p>hooter</p>
    </div>
  </div>
</template>

<style scoped>
.footer-top {
  padding-top: 100px;
}
.footer {
  position: fixed;
  z-index: 10;
  bottom: 0;
  height: 100px;
  width: 100%;
  max-width: 600px;
  background: linear-gradient(to top, transparent, #F5F7FA 0, #F5F7FA 50%, transparent);
  /* border-top: solid 1px #E0E0E0; */
}
.footer p {
  font-size: 20px;
}
</style>

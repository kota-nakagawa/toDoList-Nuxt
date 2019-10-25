<template>
  <div>
    <div class="footer-top" />
    <div class="footer-second" />
    <div class="footer">
      <p>hooter</p>
    </div>
  </div>
</template>

<style scoped>
.footer-top {
  padding-top: 100px;
}
.footer-second {
  position: fixed;
  z-index: 10;
  bottom: 0;
  height: 50px;
  margin-bottom: 50px;
  width: 100%;
  max-width: 600px;
  background: linear-gradient(to bottom, rgba(245, 247, 250, 0), rgba(245, 247, 250, 1));
}
.footer {
  position: fixed;
  z-index: 10;
  bottom: 0;
  height: 50px;
  width: 100%;
  max-width: 600px;
  background-color: #F5F7FA;
}
.footer p {
  font-size: 20px;
}
</style>

<template>
  <div class="flex-container">
    <div class="fix-position">
      <div class="button" />
    </div>
  </div>
</template>

<style scoped>
.flex-container {
  display: flex;
  flex-direction: row-reverse;
}
.fix-position {
  padding-right: 100px
}
.button {
  height: 55px;
  width: 55px;
  background-color: blue;
  z-index: 15;
  bottom: 120px;
  position: fixed;
}
</style>

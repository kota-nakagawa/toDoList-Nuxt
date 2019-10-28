<template>
  <div class="flex-container">
    <div class="fix-position">
      <button aria-label="AddList" class="button" @click="onClickAddList">
        <span class="hamburger-item1" />
        <span class="hamburger-item2" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClickAddList () {
      console.log('反応しました')
    }
  }
}
</script>

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
  background-color: rgb(29, 161, 242);
  z-index: 15;
  bottom: 120px;
  position: fixed;
  box-shadow: 0 3px 5px -1px rgba(0,0,0,.2);
  border-radius: 50%;
}
.hamburger-item1 {
  transform: translateY(0) rotate(0deg);
  width: 30px;
  height: 4px;
  background-color: #f5f7fa;
  position: absolute;
  display: block;
  left: 0;
  right: 0;
  margin: auto;
  top: 24px;
}
.hamburger-item2 {
  transform: translateY(0) rotate(90deg);
  width: 30px;
  height: 4px;
  background-color: #f5f7fa;
  position: absolute;
  display: block;
  left: 0;
  right: 0;
  margin: auto;
  top: 25px;
}
</style>

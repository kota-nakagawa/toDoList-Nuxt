<template>
  <div class="flex-container">
    <div class="fix-position">
      <modal v-if="showModal" @close="closeModal" />
      <button aria-label="AddList" class="button" @click="openModal()">
        <span class="hamburger-item1" />
        <span class="hamburger-item2" />
      </button>
    </div>
  </div>
</template>

<script>
import modal from '~/components/addTaskModal'
export default {
  components: {
    modal
  },
  data () {
    return {
      showModal: false
    }
  },
  methods: {
    openModal (item) {
      this.postItem = item
      this.showModal = true
    },
    closeModal () {
      this.showModal = false
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
  z-index: 15;
  bottom: 120px;
  border-radius: 50%;
  position: fixed;
  border-color: rgb(29, 161, 242);
  background-color: rgb(29, 161, 242);
  box-shadow: 0px 4px 16px rgba(0,0,0,0.3);
}
.hamburger-item1 {
  left: 0;
  right: 0;
  top: 24px;
  width: 30px;
  height: 4px;
  margin: auto;
  display: block;
  position: absolute;
  background-color: #f5f7fa;
  transform: translateY(0) rotate(0deg);
}
.hamburger-item2 {
  top: 25px;
  left: 0;
  right: 0;
  width: 30px;
  height: 4px;
  margin: auto;
  display: block;
  position: absolute;
  background-color: #f5f7fa;
  transform: translateY(0) rotate(90deg);
}
</style>

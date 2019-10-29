
<template>
  <transition name="modal" appear>
    <div class="modal modal-mask" @click.self="$emit('close')">
      <div class="modal-window">
        <div class="modal-form-container">
          <div class="modal-form">
            <label>タイトル</label>
            <input v-model="task.title" type="text" placeholder="タイトル">
          </div>
          <div class="modal-textarea">
            <label>タスク内容</label>
            <textarea v-model="task.taskContents" placeholder="タスクの内容を入力" />
          </div>
          <div class="modal-form">
            <label>期日</label>
            <input v-model="task.date" type="date">
          </div>
        </div>
        <span class="modal-span-close">
          <a class="contents-1" @click="$emit('close')">キャンセル</a>
          <a class="contents-2" @click="pushTaskForVuex">追加</a>
        </span>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  data () {
    return {
      task: {
        title: null,
        taskContents: null,
        date: null
      }
    }
  },
  methods: {
    pushTaskForVuex () {
      if (!(this.task.title && this.task.taskContents && this.task.date)) {
        return
      }
      this.$store.commit('addTask', this.task)
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.modal.modal-mask {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
}
.modal-window {
  display: flex;
  flex-direction: column;
  position: relative;
  background: #F8F8F8;
  width: 85%;
  margin:25px;
  opacity: 0.9;
  height: 75%;
  max-width: 375px;
  border-radius: 5px;
  justify-content: flex-end;
}
.modal-form-container {
  display: flex;
  flex-direction: column;
  padding: 15px;
  flex-grow: 1;
}
.modal-form input[type="date"] {
  -webkit-appearance: unset;
}
input {
  border: 0;
  box-sizing: border-box;
  padding-left: 10px;
  background: rgb(225, 227, 228);
  border-radius: 5px;
  width: 100%;
  height: 30px;
}
.modal-textarea {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin-top: 7.5px;
  margin-bottom: 7.5px;
}
textarea {
  padding-left: 10px;
  border: 0;
  box-sizing: border-box;
  background: rgb(225, 227, 228);
  border-radius: 5px;
  width: 100%;
  flex-grow: 1;
}
.modal-span-close {
  display: flex;
  line-height: 42px;
  margin-top: 20px;
  font-size: 17px;
  border-top: 1px solid #D5D5D6;
}
.contents-1 {
  display: block;
  flex: 1;
  color: #007AFF;
  text-decoration: none;
  text-align: center;
}
.contents-2 {
  display: block;
  flex: 1;
  color: #007AFF;
  text-decoration: none;
  text-align: center;
  border-left: 1px solid #D5D5D6;
}
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s;
}
.modal-enter-active .modal-window,
.modal-leave-active .modal-window {
  transition: opacity 0.2s, transform 0.2s;
}
.modal-leave-active {
  transition: opacity 0.3s ease 0.2s;
}
.modal-enter,
.modal-leave-to {
  opacity: 0;
}
.modal-enter .modal-window,
.modal-leave-to .modal-window {
  opacity: 0;
  transform: translateY(-20px);
}
</style>

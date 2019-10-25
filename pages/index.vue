<template>
  <div>
    <div class="header-container">
      <headerItem :title="title" />
    </div>
    <div class="content-container">
      <p>Hello</p>
    </div>
  </div>
</template>

<script>
import headerItem from '@/components/headerItem'
export default {
  components: {
    headerItem
  },
  head () {
    return {
      title: 'スケジュール'
    }
  },
  data () {
    return {
      title: 'スケジュール'
    }
  }
}
</script>

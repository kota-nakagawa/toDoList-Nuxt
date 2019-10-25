<template>
  <div>
    <div class="header-container">
      <headerItem :title="title" />
    </div>
    <div class="content-container">
      <listItem />
      <listItem />
    </div>
  </div>
</template>

<script>
import headerItem from '@/components/headerItem'
import listItem from '@/components/listItem'
export default {
  components: {
    headerItem,
    listItem
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

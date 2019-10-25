<template>
  <div>
    <div class="content-container">
      <listItem />
      <listItem />
      <listItem />
      <listItem />
      <listItem />
      <listItem />
      <listItem />
      <listItem />
    </div>
  </div>
</template>

<script>
import listItem from '@/components/listItem'
export default {
  components: {
    listItem
  },
  head () {
    return {
      title: 'スケジュール'
    }
  }
}
</script>

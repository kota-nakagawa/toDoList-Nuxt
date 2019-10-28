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
    <addListButton />
  </div>
</template>

<script>
import listItem from '@/components/listItem'
import addListButton from '@/components/addListButton'
export default {
  components: {
    listItem,
    addListButton
  },
  head () {
    return {
      title: 'リスト'
    }
  }
}
</script>

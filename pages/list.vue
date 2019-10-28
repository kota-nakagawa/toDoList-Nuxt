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
  transition (to, from) {
    if (!from) { return }
    const map = { index: 0, list: 1, settings: 2 }
    return {
      name: map[to.name] < map[from.name] ? 'slide-right' : 'slide-left'
    }
  },
  components: {
    listItem,
    addListButton
  },
  created () {
    this.$store.commit('setPageTitle', this.$metaInfo.title)
  },
  head () {
    return {
      title: 'リスト'
    }
  }
}
</script>

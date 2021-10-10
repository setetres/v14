<template>
  <ul
    class="
      flex flex-col
      md:flex-row
      space-y-2
      md:space-y-0 md:space-x-8
      items-center
      justify-center
    "
  >
    <li>ERROR</li>
  </ul>
</template>
<script>
export default {
  beforeRouteLeave(to, from, next) {
    next()
  },
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },

  head() {
    return {
      title: '𝙈𝙊𝙍𝙏𝙀𝙇𝙀𝙉𝙏𝘼 — Error',
    }
  },

  mounted() {
    this.$nextTick(() => {})
  },
}
</script>

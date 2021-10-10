<template>
  <ul class="flex flex-col font-semibold text-sm whitespace-nowrap">
    <li class="flex-1 border-b border-red-400">
      <a
        href="https://acommentonthedevilslove.setetres.st"
        class="
          flex
          text-white
          px-4
          py-2
          hover:bg-red-600
          focus:bg-red-600 focus:outline-none focus:ring
          ring-inset
          focus:ring-opacity-100 focus:ring-white
          transition-colors
        "
        target="_blank"
        rel="nofollow noopenner"
      >
        A comment on the Devil's Love
      </a>
    </li>
    <li class="flex-1 border-b border-red-400">
      <a
        href="https://archive.setetres.st"
        class="
          flex
          text-white
          px-4
          py-2
          hover:bg-red-600
          focus:bg-red-600 focus:outline-none focus:ring
          ring-inset
          focus:ring-opacity-100 focus:ring-white
          transition-colors
        "
        target="_blank"
        rel="nofollow noopenner"
      >
        Archive
      </a>
    </li>
    <li class="flex-1 border-b border-red-400">
      <a
        href="https://inkstarter.setetres.st"
        class="
          flex
          text-white
          px-4
          py-2
          hover:bg-red-600
          focus:bg-red-600 focus:outline-none focus:ring
          ring-inset
          focus:ring-opacity-100 focus:ring-white
          transition-colors
        "
        target="_blank"
        rel="nofollow noopenner"
      >
        InkStarter
      </a>
    </li>
    <li class="flex-1 border-b border-red-400">
      <a
        href="https://moqueca.setetres.st"
        class="
          flex
          text-white
          px-4
          py-2
          hover:bg-red-600
          focus:bg-red-600 focus:outline-none focus:ring
          ring-inset
          focus:ring-opacity-100 focus:ring-white
          transition-colors
        "
        target="_blank"
        rel="nofollow noopenner"
      >
        MOQUECA DELIVERY
      </a>
    </li>
    <li class="flex-1 border-b border-red-400">
      <a
        href="https://milico.setetres.st"
        class="
          flex
          text-white
          px-4
          py-2
          hover:bg-red-600
          focus:bg-red-600 focus:outline-none focus:ring
          ring-inset
          focus:ring-opacity-100 focus:ring-white
          transition-colors
        "
        target="_blank"
        rel="nofollow noopenner"
      >
        Milico
      </a>
    </li>
    <li class="flex-1 border-b border-red-400">
      <a
        href="http://oxo.setetres.st"
        class="
          flex
          text-white
          px-4
          py-2
          hover:bg-red-600
          focus:bg-red-600 focus:outline-none focus:ring
          ring-inset
          focus:ring-opacity-100 focus:ring-white
          transition-colors
        "
        target="_blank"
        rel="nofollow noopenner"
      >
        OXO
      </a>
    </li>
    <li
      class="
        flex-1
        border-b border-red-400
        px-4
        py-2
        font-semibold
        text-red-300
      "
    >
      v14
    </li>
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
      title: 'Sete Três',
    }
  },

  mounted() {
    this.$nextTick(() => {})
  },
}
</script>

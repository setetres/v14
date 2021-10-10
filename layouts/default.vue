<template>
  <div class="flex min-h-screen">
    <div class="flex flex-1 flex-col items-center justify-center min-h-screen">
      <canvas
        id="cv"
        width="1920"
        height="1080"
        class="canvas top-0 left-0 w-full h-full fixed z-10"
      />
      <div
        class="
          panel
          flex flex-col
          overflow-hidden
          relative
          z-20
          pointer-events-none
        "
      >
        <div class="flex items-center justify-between pointer-events-auto">
          <div
            class="
              flex flex-shrink-0 flex-col
              items-center
              justify-center
              w-16
              h-16
            "
          >
            <svg
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              class="w-8"
            >
              <path
                class="fill-current text-white"
                d="M2 13h2v2H2zM2 9h2v2H2zM2 5h2v2H2zM6 13h2v2H6zM6 9h2v2H6zM6 5h2v2H6zM12 13h2v2h-2zM12 9h2v2h-2zM12 5h2v2h-2zM2 1h2v2H2z"
              />
            </svg>
          </div>
          <ul class="flex flex-1 justify-end mr-4 border-l border-red-400">
            <li>
              <a
                href="https://github.com/setetres"
                target="_blank"
                rel="nofollow noopenner"
                class="
                  flex
                  p-2
                  hover:bg-red-600
                  focus:bg-red-600 focus:outline-none focus:ring
                  ring-inset
                  focus:ring-opacity-100 focus:ring-white
                  ring-inset
                  focus:ring-opacity-100 focus:ring-white
                  transition-colors
                  rounded
                "
              >
                <svg
                  class="w-auto h-6"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    class="fill-current text-white"
                    d="M6.428 10.082c0 .599-.318 1.579-1.07 1.579-.753 0-1.07-.98-1.07-1.579 0-.598.317-1.578 1.07-1.578.752 0 1.07.98 1.07 1.578zM15 8.636c0 .914-.093 1.882-.51 2.721-1.106 2.194-4.145 2.143-6.32 2.143-2.212 0-5.432.077-6.58-2.143C1.162 10.527 1 9.55 1 8.636c0-1.2.405-2.335 1.21-3.254a4.41 4.41 0 01-.224-1.398c0-.616.143-.925.426-1.484 1.32 0 2.167.258 3.173 1.031a11.367 11.367 0 012.587-.286c.788 0 1.58.083 2.345.263.992-.765 1.838-1.008 3.144-1.008.286.559.426.868.426 1.484 0 .47-.076.936-.224 1.38C14.665 6.293 15 7.436 15 8.636zm-1.875 1.446c0-1.257-.78-2.366-2.144-2.366-.551 0-1.08.098-1.633.172-.435.066-.87.092-1.316.092-.443 0-.878-.026-1.315-.092-.546-.074-1.08-.172-1.634-.172-1.365 0-2.143 1.109-2.143 2.366 0 2.515 2.345 2.902 4.386 2.902h1.406c2.05 0 4.393-.384 4.393-2.902zm-2.41-1.578c-.752 0-1.07.98-1.07 1.578 0 .599.318 1.579 1.07 1.579.753 0 1.07-.98 1.07-1.579 0-.598-.317-1.578-1.07-1.578z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/setetres"
                target="_blank"
                rel="nofollow noopenner"
                class="
                  flex
                  p-2
                  hover:bg-red-600
                  focus:bg-red-600 focus:outline-none focus:ring
                  ring-inset
                  focus:ring-opacity-100 focus:ring-white
                  transition-colors
                  rounded
                "
              >
                <svg
                  class="w-auto h-6"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    class="fill-current text-white"
                    d="M8.001 4.923A3.071 3.071 0 004.925 8a3.071 3.071 0 003.076 3.077A3.071 3.071 0 0011.077 8a3.071 3.071 0 00-3.076-3.077zm0 5.077c-1.1 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.9 2-2 2zm3.92-5.202a.716.716 0 01-.718.717.718.718 0 11.718-.718zm2.037.728c-.046-.961-.265-1.813-.97-2.515-.7-.701-1.552-.92-2.513-.969-.99-.056-3.96-.056-4.95 0-.958.046-1.81.265-2.514.967-.704.701-.92 1.553-.969 2.514-.056.99-.056 3.96 0 4.951.046.961.265 1.813.97 2.514.703.702 1.552.922 2.513.97.99.056 3.96.056 4.95 0 .961-.046 1.812-.265 2.514-.97.701-.701.92-1.553.969-2.514.056-.99.056-3.957 0-4.948zm-1.28 6.011c-.209.525-.613.93-1.14 1.14-.79.314-2.664.242-3.537.242-.872 0-2.749.07-3.536-.241a2.025 2.025 0 01-1.14-1.14c-.314-.79-.241-2.665-.241-3.538 0-.873-.07-2.75.24-3.537.21-.525.614-.93 1.14-1.14.79-.314 2.665-.242 3.537-.242.873 0 2.75-.07 3.537.241.524.209.929.613 1.14 1.14.313.79.241 2.665.241 3.538 0 .873.072 2.75-.24 3.537z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/setetres"
                target="_blank"
                rel="nofollow noopenner"
                class="
                  flex
                  p-2
                  hover:bg-red-600
                  focus:bg-red-600 focus:outline-none focus:ring
                  ring-inset
                  focus:ring-opacity-100 focus:ring-white
                  transition-colors
                  rounded
                "
              >
                <svg
                  class="w-auto h-6"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    class="fill-current text-white"
                    d="M4.686 14H2.198V5.988h2.488V14zM3.441 4.895a1.453 1.453 0 01-1.019-2.473 1.44 1.44 0 012.46 1.019c0 .795-.646 1.454-1.441 1.454zM13.997 14h-2.482v-3.9c0-.93-.019-2.122-1.294-2.122-1.293 0-1.491 1.01-1.491 2.055V14H6.244V5.988h2.387v1.093h.034c.333-.63 1.144-1.294 2.354-1.294C13.537 5.787 14 7.445 14 9.6V14h-.003z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/setetres"
                target="_blank"
                rel="nofollow noopenner"
                class="
                  flex
                  p-2
                  hover:bg-red-600
                  focus:bg-red-600 focus:outline-none focus:ring
                  ring-inset
                  focus:ring-opacity-100 focus:ring-white
                  transition-colors
                  rounded
                "
              >
                <svg
                  class="w-auto h-6"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0)">
                    <path
                      class="fill-current text-white"
                      d="M13.56 5.741c.01.12.01.241.01.361 0 3.67-2.887 7.898-8.164 7.898A8.308 8.308 0 011 12.754c.231.026.453.034.693.034a5.87 5.87 0 003.562-1.186c-1.261-.025-2.318-.825-2.683-1.925.178.026.356.043.542.043.258 0 .515-.034.755-.094-1.314-.258-2.3-1.375-2.3-2.724v-.035c.381.206.826.335 1.296.353a2.751 2.751 0 01-1.279-2.312c0-.516.142-.988.391-1.401C3.39 5.191 5.513 6.291 7.893 6.412a3.035 3.035 0 01-.07-.636C7.822 4.246 9.101 3 10.691 3c.826 0 1.572.335 2.096.877a5.765 5.765 0 001.821-.67 2.787 2.787 0 01-1.261 1.529A5.906 5.906 0 0015 4.306c-.39.55-.88 1.04-1.44 1.435z"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <path
                        class="fill-current text-purple-600"
                        fill="#ffffff"
                        d="M0 0h16v16H0z"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <overlay-scrollbars
          :options="{
            scrollbars: { autoHide: 'move' },
            overflowBehavior: {
              x: 'hidden',
              y: 'scroll',
            },
          }"
          class="
            flex-1
            relative
            overflow-y-scroll overflow-x-hidden
            w-full
            border-t border-red-400
            pointer-events-auto
          "
        >
          <Nuxt />
        </overlay-scrollbars>
      </div>
    </div>
  </div>
</template>
<script>
import 'overlayscrollbars/css/OverlayScrollbars.css'
import Vue from 'vue'
import { OverlayScrollbarsPlugin } from 'overlayscrollbars-vue'
import { create } from 'simple-drawing-board'

Vue.use(OverlayScrollbarsPlugin)

export default {
  beforeRouteLeave(to, from, next) {
    this.$nextTick(() => {
      next()
    })
  },
  mounted() {
    this.$nextTick(() => {
      const cv = document.getElementById('cv')
      const sdb = create(cv)

      const lineColor = '#ffffff'
      sdb.setLineColor(lineColor)

      const lineSize = 2
      sdb.setLineSize(lineSize)
    })
  },
}
</script>

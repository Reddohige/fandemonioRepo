<template>
  <div class="relative min-h-screen w-full overflow-hidden">
    <div
      class="absolute inset-0 transition-all duration-1000 ease-in-out"
      :style="{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        clipPath: clipPath,
      }"
      @transitionend="onTransitionEnd"
    ></div>

    <div class="relative z-10">
      <slot />
      <Footer />
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Footer from '~/components/Footer.vue'

const route = useRoute()
const bgImage = ref('')
const clipPath = ref('inset(0 100% 0 0)')
let callback = null
let isClient = false

onMounted(() => {
  isClient = true
})

const bgMap = {
  '/': '/index.webp',
  '/fandemonio': '/fandemonio.webp',
  '/holoitalia': '/holoitalia.webp',
}

const setBg = (path) => {
  const newBg = bgMap[path] || '/index.webp'

  if (isClient) {
    const img = new Image()
    img.src = newBg
    img.onload = () => {
      bgImage.value = newBg
      clipPath.value = 'inset(0 100% 0 0)'

      // requestAnimationFrame assicura che il browser abbia registrato il clipPath iniziale
      requestAnimationFrame(() => {
        clipPath.value = 'inset(0 0 0 0)'
      })
    }
  } else {
    // fallback lato server
    bgImage.value = newBg
    clipPath.value = 'inset(0 0 0 0)'
  }
}

const onTransitionEnd = () => {
  if (callback) callback()
  callback = null
}

watch(
  () => route.path,
  (newPath) => {
    setBg(newPath)
  },
  { immediate: true }
)
</script>

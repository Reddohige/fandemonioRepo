<template>
  <NuxtLink
    to="/"
    class="absolute left-4 top-4 transform rounded-full p-2 transition-transform hover:-rotate-6 hover:scale-110"
    title="Torna alla Home"
  >
    <HomeIcon class="h-6 w-6 text-white" />
  </NuxtLink>
</template>

<script setup>
import { Home as HomeIcon } from 'lucide-vue-next'
</script>

<style scoped>
/* opzionale: hover più morbido */
.nuxt-link-home:hover {
  transition: transform 0.2s ease-in-out;
}
</style>

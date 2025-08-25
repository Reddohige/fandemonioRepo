<template>
  <div class="flex h-screen flex-col items-center justify-center gap-6">
    <button
      class="transform rounded-lg bg-white px-6 py-3 text-lg font-bold text-black shadow transition hover:scale-105"
      @click="go('/holoitalia')"
    >
      Holoitalia
    </button>

    <button
      class="transform rounded-lg bg-white px-6 py-3 text-lg font-bold text-black shadow transition hover:scale-105"
      @click="go('/fandemonio')"
    >
      Fandemonio
    </button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const go = (path) => router.push(path)
</script>

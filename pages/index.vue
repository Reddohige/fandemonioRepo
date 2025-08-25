<template>
  <div
    class="relative flex h-screen w-full flex-col items-center justify-center gap-10 overflow-hidden bg-cover bg-center p-4 text-white"
  >
    <div class="absolute inset-0 bg-black/20"></div>

    <div class="relative z-10 flex flex-col items-center justify-center gap-10">
      <h1 class="text-6xl font-extrabold tracking-wide drop-shadow-lg md:text-8xl">Weeb Hub</h1>
      <p class="text-xl font-light italic"></p>

      <div class="flex flex-col items-center gap-6 md:flex-row">
        <button
          class="transform rounded-full bg-gradient-to-r from-red-500 to-pink-600 px-8 py-4 text-2xl font-bold text-white shadow-xl transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-red-300"
          @click="go('/holoitalia')"
        >
          Holoitalia
        </button>

        <button
          class="transform rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 px-8 py-4 text-2xl font-bold text-white shadow-xl transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300"
          @click="go('/fandemonio')"
        >
          Fandemonio
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const go = (path) => router.push(path)
</script>

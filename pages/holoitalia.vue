<template>
  <div class="absolute inset-0 bg-black/20"></div>
  <div class="relative flex h-screen flex-col items-center justify-center text-white">
    <HomeButton />

    <!-- <div class="mb-8 rounded-xl bg-black/40 p-4 backdrop-blur-sm">
      <img src="/hololive_logo.svg" alt="Hololive Logo" class="h-20 w-auto" />
    </div> -->

    <h1 class="mb-4 text-center text-5xl font-extrabold drop-shadow-xl">
      Welcome on <span class="text-yellow-300">Holoitalia</span>
    </h1>

    <p class="mb-8 max-w-md text-center text-lg drop-shadow-md">
      Italian Fan Club about <strong>Hololive</strong>.<br />
      Let’s prove that Italy is ready for Hololive…
    </p>

    <div class="flex space-x-4">
      <button
        @click="openLink(instagramUrl)"
        class="flex transform items-center gap-2 rounded-lg bg-pink-500 px-6 py-3 uppercase tracking-wider transition-transform hover:scale-105 hover:bg-pink-600"
      >
        <Instagram class="h-5 w-5" />
      </button>
      <button
        v-if="xUrl"
        @click="openLink(xUrl)"
        class="flex transform items-center gap-2 rounded-lg bg-blue-500 px-6 py-3 uppercase tracking-wider transition-transform hover:scale-105 hover:bg-blue-600"
      >
        <X class="h-5 w-5" />
      </button>
    </div>

    <LinkCard
      link="https://docs.google.com/forms/d/e/1FAIpQLSd5xQNDnFqSbIBeUwwCWQQDKkH6vbyhOuxymqBYVMBtsYEJQw/viewform"
      border-color="border-yellow-400"
      title="📝 Hololive Fans Survey"
      description="Partecipate al sondaggio e fate sentire la vostra voce!"
    />
  </div>
</template>

<script setup>
import HomeButton from '~/components/HomeButton.vue'
import { ref } from 'vue'
import { Instagram, X } from 'lucide-vue-next'
import LinkCard from '~/components/LinkCard.vue'

const instagramUrl = ref('https://www.instagram.com/holoitalia/')
const xUrl = ref('https://x.com/HoloItalia')
const openLink = (url) => window.open(url, '_blank')
</script>

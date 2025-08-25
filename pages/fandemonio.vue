<template>
  <div class="relative flex w-full flex-col items-center space-y-12 p-6 text-white">
    <!-- Bottone Home -->
    <HomeButton class="h-6 w-6 text-white drop-shadow-lg" />

    <!-- Hero / Titolo -->
    <div class="mx-auto max-w-3xl text-center">
      <h1 class="mb-4 text-5xl font-extrabold tracking-wider drop-shadow-[0_0_20px_#ff6ec7]">
        Fandemonio 🎧
      </h1>
      <p class="text-lg drop-shadow-md">
        Benvenuti nel <span class="font-semibold text-pink-300">Fandemonio</span>, il podcast molto
        <em>Weeb</em> sui fandom.
      </p>
    </div>

    <!-- Carosello Podcast -->
    <div class="mx-auto w-full max-w-4xl rounded-2xl bg-black/70 shadow-lg">
      <iframe
        src="https://widget.spreaker.com/player?show_id=6278226&theme=light&playlist=show"
        width="100%"
        height="400"
        frameborder="0"
        allowfullscreen
        rounded-md
      ></iframe>
    </div>

    <!-- Eventi -->
    <div class="mx-auto w-full max-w-3xl">
      <h2 class="mb-6 text-center text-2xl font-bold">📅 Eventi</h2>
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div
          v-for="event in events"
          :key="event.title"
          @click="open(event.url)"
          class="transform cursor-pointer rounded-lg border-2 border-fuchsia-500 bg-white bg-opacity-20 p-4 backdrop-blur transition hover:scale-105"
        >
          <h3 class="text-xl font-bold">{{ event.title }}</h3>
          <p class="text-sm">{{ event.desc }}</p>
        </div>
      </div>
    </div>

    <!-- Social & Community -->
    <div class="mx-auto w-full max-w-4xl">
      <h2 class="mb-6 text-center text-2xl font-bold">🌐 Community & Social</h2>
      <div class="grid grid-cols-2 gap-6 md:grid-cols-4">
        <div
          v-for="link in links"
          :key="link.title"
          @click="open(link.url)"
          class="flex transform cursor-pointer flex-col items-center gap-2 rounded-lg border-2 border-blue-400 bg-white bg-opacity-20 p-4 backdrop-blur transition hover:-translate-y-1 hover:shadow-lg"
        >
          <component :is="link.icon" class="h-8 w-8 text-white" />
          <span class="text-center text-sm">{{ link.title }}</span>
        </div>
      </div>
    </div>

    <!-- Playlist J-Music -->
    <div class="mx-auto w-full max-w-3xl">
      <h2 class="mb-6 text-center text-2xl font-bold">🎶 J-Music Playlist</h2>
      <div class="space-y-4">
        <button
          v-for="playlist in playlists"
          :key="playlist.title"
          @click="open(playlist.url)"
          class="w-full rounded-lg bg-blue-900 bg-opacity-40 p-4 text-left transition hover:bg-blue-800"
        >
          <span class="font-semibold">{{ playlist.title }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
iframe {
  border-radius: 20px;
}
</style>

<script setup>
import HomeButton from '~/components/HomeButton.vue'
import { ref } from 'vue'
import { Instagram, Youtube, Mail, MessageCircle, X, Globe, Shirt, Flag } from 'lucide-vue-next'
const open = (url) => window.open(url, '_blank')

const events = [
  {
    title: 'Fandemonio NIGHT! Gunpla e Gundam TGC!',
    url: 'https://www.eventbrite.com/e/biglietti-fandemonio-night-gunpla-e-gundam-tgc-1554659882559',
    desc: 'Gunpla, carte e risate! Venerdì 29/08 ore 20:00 @ Casa dei Giochi (MI) montiamo Gundam e giochiamo al nuovo TCG!',
  },
]

const links = [
  { title: 'Instagram', url: 'https://www.instagram.com/fandemonio.podcast/', icon: Instagram },
  { title: 'YouTube', url: 'https://www.youtube.com/@fandemonio', icon: Youtube },
  { title: 'X', url: 'https://x.com/fandemoniopod', icon: X },
  { title: 'Telegram', url: 'https://t.me/fandemonio', icon: MessageCircle },
  { title: 'Reddit', url: 'https://reddit.com/r/fandemonio', icon: Globe },
  { title: 'Email', url: 'mailto:lagne@fandemonio.com', icon: Mail },
  {
    title: 'Happi Di Fandemonio!',
    url: 'https://www.reddit.com/r/Fandemonio/comments/1hy772v/merch_gli_happi_fandemonio/',
    icon: Shirt,
  },
  {
    title: 'Bandiera di Raora',
    url: 'https://www.reddit.com/r/Fandemonio/comments/1kr4g47/merch_la_bandiera_di_raora/',
    icon: Flag,
  },
]

const playlists = [
  { title: 'Spotify J-Music Playlist', url: 'https://open.spotify.com/playlist/...' },
  { title: 'YouTube J-Music Playlist', url: 'https://www.youtube.com/playlist?list=...' },
]
</script>

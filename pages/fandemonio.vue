<template>
  <div class="absolute inset-0 bg-black/20"></div>
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

    <!-- Social & Community (Swiper Slider) -->
    <div class="mx-auto w-full max-w-5xl">
      <h2 class="mb-6 text-center text-2xl font-bold">🌐 Community & Social</h2>

      <Swiper
        :slides-per-view="1"
        :space-between="20"
        :breakpoints="{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }"
        navigation
        :loop="false"
        :modules="[Navigation]"
        class="mySwiper relative px-8"
      >
        <SwiperSlide
          v-for="link in links"
          :key="link.title"
          @click="open(link.url)"
          class="flex cursor-pointer flex-col items-center justify-center gap-3 rounded-lg border-2 border-blue-400 bg-white/20 p-6 text-center backdrop-blur transition hover:-translate-y-1 hover:shadow-lg"
        >
          <div class="flex flex-col items-center justify-center">
            <component :is="link.icon" class="h-10 w-10 text-white" />
            <span class="text-sm font-medium">{{ link.title }}</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>

    <!-- Playlist J-Music (Carousel con embed) -->
    <div class="mx-auto w-full max-w-5xl">
      <h2 class="mb-6 text-center text-2xl font-bold">🎶 J-Music Playlist</h2>

      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div
          v-for="playlist in playlists"
          :key="playlist.title"
          class="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg bg-black/70 p-4 shadow-lg transition hover:scale-105"
        >
          <h3 class="mb-2 text-center font-semibold text-white">{{ playlist.title }}</h3>

          <div class="flex w-full items-center justify-center">
            <iframe
              v-if="playlist.type === 'spotify'"
              :src="playlist.embed"
              width="100%"
              height="380"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
              class="rounded-lg"
            ></iframe>

            <iframe
              v-else-if="playlist.type === 'youtube'"
              :src="playlist.embed"
              width="100%"
              height="215"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              class="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import HomeButton from '~/components/HomeButton.vue'
import { ref } from 'vue'
import { Instagram, Youtube, Mail, MessageCircle, X, Globe, Shirt, Flag } from 'lucide-vue-next'

// Swiper 10+ imports corretti
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'

const open = (url) => window.open(url, '_blank')

// Eventi
const events = [
  {
    title: 'Fandemonio NIGHT! Gunpla e Gundam TGC!',
    url: 'https://www.eventbrite.com/e/biglietti-fandemonio-night-gunpla-e-gundam-tgc-1554659882559',
    desc: 'Gunpla, carte e risate! Venerdì 29/08 ore 20:00 @ Casa dei Giochi (MI) montiamo Gundam e giochiamo al nuovo TCG!',
  },
  {
    title: 'Fandemonio Pre-Concerto Meetup: Speciale Ado Live a Milano ✨',
    url: 'https://www.eventbrite.com/e/fandemonio-pre-concerto-meetup-speciale-ado-live-a-milano-tickets-1333887426199?aff=ebdsoporgprofile',
    desc: 'Sei un Fandemone e parteciperai al concerto di Ado il 2 luglio 2025 ad Assago, Milano? Unisciti al meetup organizzato da noi!',
  },
]

// Links social
const links = [
  { title: 'Instagram', url: 'https://www.instagram.com/ilverofandemonio/', icon: Instagram },
  {
    title: 'YouTube',
    url: 'https://www.youtube.com/channel/UCtwAe6eGpUfcrc8vrI3uAKwo',
    icon: Youtube,
  },
  { title: 'X', url: 'https://x.com/ilfandemonio', icon: X },
  { title: 'Telegram', url: 'https://t.me/fandemonio', icon: MessageCircle },
  { title: 'Reddit', url: 'https://reddit.com/r/Fandemonio', icon: Globe },
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

// Playlist embed
const playlists = [
  {
    title: 'Spotify J-Music Playlist',
    type: 'spotify',
    embed: 'https://open.spotify.com/embed/playlist/5hYjohs1J5xISRXgwPhpnQ?utm_source=generator',
  },
  {
    title: 'YouTube J-Music Playlist',
    type: 'youtube',
    embed: 'https://www.youtube.com/embed/videoseries?list=PLvMk0H0AsMeBN3sF_MrMZg4ZMu_9t83rb',
  },
]
</script>

<style scoped>
iframe {
  border-radius: 20px;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>

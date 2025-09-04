<template>
  <footer
    class="fixed bottom-0 z-20 flex w-full items-center justify-center gap-2 bg-black bg-opacity-50 py-1 text-center backdrop-blur-md"
  >
    <!-- Mini waifu stilizzate inline SVG con click handler -->
    <svg
      class="h-4 w-4 cursor-pointer transition-transform duration-300 hover:scale-110"
      :class="{ glow: clicked[0] }"
      viewBox="0 0 24 24"
      fill="none"
      @click="clickEmoji(0)"
    >
      <circle cx="12" cy="12" r="10" fill="#FFC0CB" />
      <circle cx="9" cy="10" r="1.5" fill="#000" />
      <circle cx="15" cy="10" r="1.5" fill="#000" />
      <path
        d="M9 15 C12 18 16 15 15 13"
        stroke="#000"
        stroke-width="1"
        fill="none"
        stroke-linecap="round"
      />
    </svg>

    <svg
      class="h-4 w-4 cursor-pointer transition-transform duration-300 hover:scale-110"
      :class="{ glow: clicked[1] }"
      viewBox="0 0 24 24"
      fill="none"
      @click="clickEmoji(1)"
    >
      <circle cx="12" cy="12" r="10" fill="#FFD700" />
      <circle cx="9" cy="10" r="1.5" fill="#000" />
      <circle cx="15" cy="10" r="1.5" fill="#000" />
      <path
        d="M9 15 C12 17 16 15 15 13"
        stroke="#000"
        stroke-width="1"
        fill="none"
        stroke-linecap="round"
      />
    </svg>

    <svg
      class="h-4 w-4 cursor-pointer transition-transform duration-300 hover:scale-110"
      :class="{ glow: clicked[2] }"
      viewBox="0 0 24 24"
      fill="none"
      @click="clickEmoji(2)"
    >
      <circle cx="12" cy="12" r="10" fill="#ADD8E6" />
      <circle cx="9" cy="10" r="1.5" fill="#000" />
      <circle cx="15" cy="10" r="1.5" fill="#000" />
      <path
        d="M9 15 C12 18 16 15 15 14"
        stroke="#000"
        stroke-width="1"
        fill="none"
        stroke-linecap="round"
      />
    </svg>

    <!-- Testo compatto -->
    <a
      href="https://www.matteolullo.it/"
      target="_blank"
      rel="noopener noreferrer"
      class="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-xs font-semibold text-transparent drop-shadow-md transition-all duration-300 hover:from-pink-500 hover:to-blue-500"
    >
      Dev by Matteo Lullo & community weeb
    </a>

    <!-- Messaggio avviso -->
    <div
      v-if="showRedirect"
      class="absolute -top-8 animate-bounce rounded bg-pink-500 px-3 py-1 text-xs text-white shadow-lg"
    >
      🔥 hai scavato troppo in fondo e con troppa avidtà...
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const sequence = [0, 1, 2]
const current = ref(0)
const clicked = ref([false, false, false])
const showRedirect = ref(false)

const clickEmoji = (index) => {
  if (index === sequence[current.value]) {
    clicked.value[index] = true
    current.value++

    if (current.value >= sequence.length) {
      // Mostra avviso
      showRedirect.value = true

      // Dopo breve pausa, apri repo
      setTimeout(() => {
        window.open('https://github.com/Reddohige/fandemonioRepo', '_blank')
        showRedirect.value = false
        clicked.value = [false, false, false]
        current.value = 0
      }, 1000) // 1 secondo di attesa
    }
  } else {
    // reset se sbagli
    clicked.value = [false, false, false]
    current.value = 0
  }
}
</script>

<style scoped>
footer {
  font-size: 0.75rem;
  font-family: 'Poppins', sans-serif;
}

.glow {
  transform: scale(1.2);
  filter: drop-shadow(0 0 4px #fff);
  transition: all 0.2s ease-in-out;
}

.animate-bounce {
  animation: bounce 0.5s ease-in-out infinite alternate;
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-5px);
  }
}
</style>

<template>
  <footer
    class="fixed bottom-0 z-20 flex w-full items-center justify-center gap-2 bg-black bg-opacity-50 py-1 text-center backdrop-blur-md"
  >
    <!-- Mini waifu stilizzate inline SVG -->
    <svg
      class="h-4 w-4 transition-transform duration-300 hover:scale-110"
      viewBox="0 0 24 24"
      fill="none"
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
      class="h-4 w-4 transition-transform duration-300 hover:scale-110"
      viewBox="0 0 24 24"
      fill="none"
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
      class="h-4 w-4 transition-transform duration-300 hover:scale-110"
      viewBox="0 0 24 24"
      fill="none"
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
      class="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-xs font-semibold text-transparent text-white drop-shadow-md transition-all duration-300 hover:from-pink-500 hover:to-blue-500"
    >
      Dev by Matteo Lullo & community weeb
    </a>
  </footer>
</template>

<script setup>
// Nessuna logica aggiuntiva richiesta
</script>

<style scoped>
footer {
  font-size: 0.75rem; /* più piccolo e compatto */
  font-family: 'Poppins', sans-serif;
}
</style>

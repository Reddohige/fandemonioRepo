<template>
  <div
    class="mx-auto max-w-sm transform rounded-xl bg-gradient-to-br from-white via-gray-100 to-gray-50 p-6 shadow-lg transition-shadow duration-300 hover:-translate-y-1 hover:shadow-2xl"
  >
    <h2 class="mb-2 text-2xl font-extrabold text-gray-800">{{ title }}</h2>
    <p class="mb-4 text-gray-600">{{ description }}</p>
    <a
      :href="link"
      target="_blank"
      class="inline-block rounded-md bg-blue-500 px-4 py-2 font-semibold text-white transition-colors duration-200 hover:bg-blue-600"
    >
      Vai al link
    </a>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  link: String,
})
</script>

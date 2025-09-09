<template>
  <div
    :class="[
      'm-5 mt-8 flex cursor-pointer flex-col items-center justify-center rounded-lg bg-white/20 p-6 text-center backdrop-blur-md transition hover:scale-105',
      borderClass,
    ]"
  >
    <h2 class="mb-2 text-xl font-semibold text-yellow-300">{{ title }}</h2>
    <p class="mb-2 text-sm text-white/80">{{ description }}</p>
    <button
      @click="openSurvey"
      class="mt-2 rounded-lg bg-yellow-500 px-4 py-2 font-bold uppercase tracking-wider text-black transition hover:bg-yellow-600"
    >
      Fill the Survey
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  link: { type: String, required: true },
  borderColor: { type: String, default: 'border-yellow-400' },
  title: { type: String, default: 'Hololive Fans Survey' },
  description: { type: String, default: 'Participate in the survey and let your voice be heard!' },
})

const borderClass = computed(() => `border-4 ${props.borderColor}`)

const openSurvey = () => {
  window.open(props.link, '_blank')
}
</script>

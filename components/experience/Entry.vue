<script setup lang="ts">
const props = defineProps<{
  data: Experience;
}>();
</script>

<template>
  <div class="mb-8 break-inside-avoid">
    <div class="flex items-center gap-3">
      <div class="w-3 h-3 bg-blue-500 rounded-full z-20"></div>
      <p class="text-gray-500 text-sm">{{ props.data.date }}</p>
    </div>
    <div class="ml-8 mt-2">
      <h3 class="text-xl font-bold">{{ props.data.company }}</h3>
      <p class="text-gray-600 text-sm">{{ props.data.description }}</p>
      <ul
        class="list-disc list-outside pl-4 mt-2 text-gray-700 leading-relaxed"
      >
        <li v-for="detail in props.data.details" v-html="detail"></li>
      </ul>
    </div>
  </div>
</template>

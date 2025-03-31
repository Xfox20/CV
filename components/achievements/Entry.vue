<script setup lang="ts">
const props = defineProps<{
  data: Achievement;
}>();
</script>

<template>
  <div class="mt-4">
    <p class="flex items-center gap-2 justify-between">
      <b class="text-xl font-bold">{{ props.data.name }}</b>
      <span class="text-gray-400 text-right text-sm">
        {{ props.data.rank }}
      </span>
    </p>
    <p class="text-gray-600 text-sm">{{ props.data.date }}</p>
    <p class="mt-1.5 text-gray-700">{{ props.data.description }}</p>
  </div>
</template>

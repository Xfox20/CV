<script setup lang="ts">
const props = defineProps<{
  data: Education;
}>();
</script>

<template>
  <div class="mt-4">
    <h3 class="text-xl font-bold">{{ props.data.schoolName }}</h3>
    <p class="text-gray-600 text-sm">{{ props.data.date }}</p>
    <p class="mt-1.5 text-gray-700">{{ props.data.description }}</p>
  </div>
</template>

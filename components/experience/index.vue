<script setup lang="ts">
const props = defineProps<{
  entries: Experience[];
}>();
</script>

<template>
  <section class="mb-6">
    <h2 class="text-xl font-semibold border-b pb-1 mb-2">Erfahrungen</h2>
    <div class="relative mt-4">
      <div
        class="absolute left-[0.3125rem] top-0 w-0.5 h-full bg-gray-300"
      ></div>

      <ExperienceEntry v-for="entry in props.entries" :data="entry" />
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  entries: Education[];
}>();
</script>

<template>
  <section>
    <h2>Bildung</h2>
    <EducationEntry v-for="entry in props.entries" :data="entry" />
  </section>
</template>

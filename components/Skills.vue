<script setup lang="ts">
const props = defineProps<{
  title: string;
  entries: string[];
}>();
</script>

<template>
  <section>
    <h2>{{ title }}</h2>
    <ul>
      <li v-for="name in entries">{{ name }}</li>
    </ul>
  </section>
</template>

<style scoped>
@import "~/assets/css/skills.css";
</style>

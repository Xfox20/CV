<script setup lang="ts">
const props = defineProps<{
  entries: Achievement[];
}>();
</script>

<template>
  <section>
    <h2>Errungenschaften</h2>
    <AchievementsEntry v-for="entry in props.entries" :data="entry" />
  </section>
</template>

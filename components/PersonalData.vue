<script setup lang="ts">
const props = defineProps<{
  data: { name: string; value: string }[];
}>();
</script>

<template>
  <section>
    <h2>Persönliche Daten</h2>
    <ul>
      <li v-for="entry in props.data">
        <b>{{ entry.name }}:</b> {{ entry.value }}
      </li>
    </ul>
  </section>
</template>

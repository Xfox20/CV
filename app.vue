<script setup lang="ts">
const url = useRequestURL();
const { data: cv } = await useFetch<CV>(`${url.origin}/cv.json`);
</script>

<template>
  <main
    class="max-w-5xl mx-auto border border-gray-300 shadow-lg rounded-lg p-8"
  >
    <header class="flex items-center border-b pb-4">
      <img
        src="/photo.jpeg"
        alt="Photo"
        class="w-24 h-24 rounded-full object-cover mr-6"
      />
      <div>
        <h1 class="text-4xl font-bold text-gray-900 font-mono">
          {{ cv?.name }}
        </h1>
        <p class="text-gray-500 text-sm">
          {{ cv?.addresses.join(" | ") }}
        </p>
      </div>
    </header>

    <div class="grid grid-cols-3 gap-6 mt-8">
      <div class="col-span-1">
        <PersonalData v-if="cv?.personalData" :data="cv?.personalData" />
        <Skills
          v-if="cv?.abilities"
          title="Fähigkeiten"
          :entries="cv?.abilities"
        />
        <Skills v-if="cv?.skills" title="Fertigkeiten" :entries="cv?.skills" />
        <Education v-if="cv?.education" :entries="cv?.education" />
      </div>
      <div class="col-span-2">
        <Experience v-if="cv?.experience" :entries="cv?.experience" />
      </div>
    </div>
  </main>
</template>

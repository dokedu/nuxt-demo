<script lang="ts" setup>
const { data, error } = await useFetch("/api/time");
</script>

<template>
  <div>
    <h1>Hello from Nuxt!</h1>
    <template v-if="data">
      <p>The time is {{ data.time }}</p>
    </template>
    <template v-if="error">
      <p>Error: {{ error.message }}</p>
    </template>
    <p>Version: 1</p>
  </div>
</template>

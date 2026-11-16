<script setup lang="ts">
defineProps<{
  number: string
  label: string
  title: string
  headingId: string
}>()
</script>

<template>
  <div class="segment-label">{{ number }} <span class="slash">/</span> {{ label }}</div>
  <h2 :id="headingId" class="headline">{{ title }}</h2>
</template>

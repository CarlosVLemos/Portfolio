<script setup lang="ts">
defineProps<{
  number: string
  title: string
  headingId: string
}>()
</script>

<template>
  <div class="segment-label" aria-hidden="true">{{ number }} <span class="slash">/</span></div>
  <h2 :id="headingId" class="headline">{{ title }}</h2>
</template>

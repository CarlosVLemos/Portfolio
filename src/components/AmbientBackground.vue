<script setup lang="ts">
defineProps<{ paused: boolean }>()
</script>

<template>
  <div class="ambient-scene" aria-hidden="true">
    <img
      v-if="paused"
      class="scene-poster"
      src="/assets/hero-poster.webp"
      alt=""
      width="763"
      height="337"
      decoding="async"
    />
    <img
      v-else
      class="scene-motion"
      src="/assets/hero-synthwave.gif"
      alt=""
      width="763"
      height="337"
      decoding="async"
      fetchpriority="low"
    />
  </div>
</template>

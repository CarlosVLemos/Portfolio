<script setup lang="ts">
defineProps<{ paused: boolean }>()
const posterUrl = import.meta.env.BASE_URL + 'assets/hero-poster.webp'
const animationUrl = import.meta.env.BASE_URL + 'assets/hero-synthwave.gif'
</script>

<template>
  <div class="ambient-scene" aria-hidden="true">
    <img
      v-if="paused"
      class="scene-poster"
       :src="posterUrl"
      alt=""
      width="763"
      height="337"
      decoding="async"
    />
    <img
      v-else
      class="scene-motion"
       :src="animationUrl"
      alt=""
      width="763"
      height="337"
      decoding="async"
      fetchpriority="low"
    />
  </div>
</template>

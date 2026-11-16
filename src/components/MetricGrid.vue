<script setup lang="ts">
import type { Language, Metric } from '../types'

defineProps<{ items: readonly Metric[]; language: Language; label: string }>()
</script>

<template>
  <div class="metric-grid" :aria-label="label">
    <div v-for="item in items" :key="item.id" class="metric">
      <strong>{{ item.value[language] }}</strong>
      <span>{{ item.label[language] }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Experience, Language } from '../types'

defineProps<{ items: readonly Experience[]; language: Language }>()
</script>

<template>
  <div class="experience-list">
    <article v-for="item in items" :key="item.id" class="experience">
      <div class="date">{{ item.date[language] }}</div>
      <div>
        <h3>{{ item.title[language] }}</h3>
        <p class="company">{{ item.company }}</p>
        <p>
          {{ item.description[language] }}
          <template v-if="item.link && item.linkLabel">
            <a :href="item.link" target="_blank" rel="noopener noreferrer">{{ item.linkLabel[language] }}</a>{{ item.afterLink?.[language] }}
          </template>
        </p>
        <div class="small-tags">
          <span v-for="tag in item.tags" :key="tag">{{ tag }}</span>
        </div>
      </div>
    </article>
  </div>
</template>

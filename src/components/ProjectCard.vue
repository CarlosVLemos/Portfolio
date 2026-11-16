<script setup lang="ts">
import type { Language, PortfolioCopy, Project } from '../types'

defineProps<{ project: Project; language: Language; links: PortfolioCopy['links'] }>()
</script>

<template>
  <article class="project">
    <div class="project-top">
      <span class="project-glyph">{{ project.glyph }}</span>
      <span class="project-status">{{ project.status[language] }}</span>
    </div>
    <h3>{{ project.name }}</h3>
    <p>{{ project.description[language] }}</p>
    <div class="project-tags">
      <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
    </div>
    <a
      v-if="project.link"
      class="project-link"
      :href="project.link"
      target="_blank"
      rel="noopener noreferrer"
    >{{ project.linkKind === 'repository' ? links.repository : links.product }}</a>
  </article>
</template>

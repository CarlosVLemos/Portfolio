<script setup lang="ts">
import type { PortfolioCopy, SectionId } from '../types'
import { contactEmail, socialLinks } from '../content/portfolio'

defineProps<{ copy: PortfolioCopy; activeSection: SectionId }>()
</script>

<template>
  <aside class="sidebar" aria-label="Apresentação e navegação">
    <div>
      <a class="logo" href="#inicio" aria-label="Carlos Lemos — início">
        <span class="logo-mark">CL</span>
        <span>carlos<span style="color:var(--pink)">.</span>{{ copy.brand }}</span>
      </a>
      <div class="eyebrow"><span class="pulse"></span>{{ copy.location }}</div>
      <h1>Carlos<br />Lemos<span class="period">.</span></h1>
      <p class="tagline">{{ copy.headline }}</p>
      <p class="intro">{{ copy.introduction }}</p>
      <nav class="side-nav" aria-label="Seções do portfólio">
        <ul>
          <li v-for="item in copy.nav" :key="item.id">
            <a
              :href="'#' + item.id"
              :class="{ active: activeSection === item.id }"
              :aria-current="activeSection === item.id ? 'location' : undefined"
            >
              <span class="nav-line"></span>{{ item.label }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="sidebar-bottom">
      <div class="social-links" :aria-label="copy.social.label">
        <a :href="socialLinks.github" target="_blank" rel="noopener noreferrer" :aria-label="copy.social.github" title="GitHub">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 19c-4.2 1.4-4.2-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3.1-.35 6.4-1.5 6.4-7A5.4 5.4 0 0 0 19 4.7a5 5 0 0 0-.1-3.7S17.7.65 15 2.5a13 13 0 0 0-6 0C6.3.65 5.1 1 5.1 1A5 5 0 0 0 5 4.7a5.4 5.4 0 0 0-1.5 3.8c0 5.5 3.3 6.65 6.4 7A3.4 3.4 0 0 0 9 18.1V22"/></svg>
        </a>
        <a :href="socialLinks.linkedin" target="_blank" rel="noopener noreferrer" :aria-label="copy.social.linkedin" title="LinkedIn">
          <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="2.5" width="19" height="19" rx="3"/><path d="M7 10v7m0-10v.01M11 17v-7m0 3a3 3 0 0 1 6 0v4"/></svg>
        </a>
        <a :href="'mailto:' + contactEmail" :aria-label="copy.social.email" title="Email">
          <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m3 6 9 7 9-7"/></svg>
        </a>
        <a href="#contato" :aria-label="copy.social.resume" :title="copy.resumeButton">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h8"/></svg>
        </a>
      </div>
      <p class="tiny-hint"><span>●</span> {{ copy.availability }}</p>
    </div>
  </aside>
</template>

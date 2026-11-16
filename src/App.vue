<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import AmbientBackground from './components/AmbientBackground.vue'
import ExperienceTimeline from './components/ExperienceTimeline.vue'
import MetricGrid from './components/MetricGrid.vue'
import ProjectCard from './components/ProjectCard.vue'
import SectionHeading from './components/SectionHeading.vue'
import SiteSidebar from './components/SiteSidebar.vue'
import { contactEmail, copy, experiences, metrics, projects, skills } from './content/portfolio'
import { filterProjects } from './utils/projects'
import type { Language, ProjectFilter, SectionId } from './types'

const language = ref<Language>('pt-BR')
const motionPaused = ref(true)
const selectedFilter = ref<ProjectFilter>('todos')
const activeSection = ref<SectionId>('sobre')
const progress = ref(0)

const content = computed(() => copy[language.value])
const visibleProjects = computed(() => filterProjects(projects, selectedFilter.value))
const emailHref = computed(() => 'mailto:' + contactEmail + '?subject=' + encodeURIComponent(content.value.emailSubject))

const filterIds: readonly ProjectFilter[] = ['todos', 'backend', 'produto', 'institucional']
const sections: readonly SectionId[] = ['sobre', 'impacto', 'projetos', 'experiencia', 'contato']

function readPreference(key: string): string | null {
  try { return localStorage.getItem(key) } catch { return null }
}
function savePreference(key: string, value: string): void {
  try { localStorage.setItem(key, value) } catch { /* Storage may be disabled. */ }
}
function toggleLanguage(): void {
  language.value = language.value === 'pt-BR' ? 'en' : 'pt-BR'
  savePreference('portfolio-language', language.value)
}
function toggleMotion(): void {
  motionPaused.value = !motionPaused.value
  savePreference('portfolio-motion', motionPaused.value ? 'paused' : 'playing')
}
function updateMetadata(): void {
  if (typeof document === 'undefined') return
  document.documentElement.lang = language.value
  document.title = content.value.metadata.title
  const description = document.querySelector<HTMLMetaElement>('meta[name="description"]')
  const ogDescription = document.querySelector<HTMLMetaElement>('meta[property="og:description"]')
  const ogUrl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]')
  const ogImage = document.querySelector<HTMLMetaElement>('meta[property="og:image"]')
  const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (description) description.content = content.value.metadata.description
  if (ogDescription) ogDescription.content = content.value.metadata.ogDescription
  if (ogUrl) ogUrl.content = window.location.origin + window.location.pathname
  if (ogImage) ogImage.content = window.location.origin + '/assets/hero-poster.webp'
  if (canonical) canonical.href = window.location.origin + window.location.pathname
}
watch(language, updateMetadata)

let observer: IntersectionObserver | undefined
let pendingFrame = 0

function updateProgress(): void {
  const available = document.documentElement.scrollHeight - window.innerHeight
  progress.value = available > 0 ? Math.min(1, Math.max(0, window.scrollY / available)) : 0
}
function scheduleProgress(): void {
  if (pendingFrame) return
  pendingFrame = requestAnimationFrame(() => {
    pendingFrame = 0
    updateProgress()
  })
}

onMounted(() => {
  language.value = readPreference('portfolio-language') === 'en' ? 'en' : 'pt-BR'
  motionPaused.value = readPreference('portfolio-motion') === 'paused'
    || (readPreference('portfolio-motion') === null && window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  updateMetadata()
  updateProgress()
  window.addEventListener('scroll', scheduleProgress, { passive: true })
  window.addEventListener('resize', scheduleProgress, { passive: true })

  if ('IntersectionObserver' in window) {
    const ratios = new Map<SectionId, number>()
    observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        ratios.set(entry.target.id as SectionId, entry.isIntersecting ? entry.intersectionRatio : 0)
      }
      const mostVisible = sections
        .map((id) => ({ id, ratio: ratios.get(id) ?? 0 }))
        .sort((a, b) => b.ratio - a.ratio)[0]
      if (mostVisible && mostVisible.ratio > 0) activeSection.value = mostVisible.id
    }, { rootMargin: '-15% 0px -55% 0px', threshold: [0, 0.01, 0.1, 0.25, 0.5] })
    for (const id of sections) {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    }
  }
})

onUnmounted(() => {
  observer?.disconnect()
  window.removeEventListener('scroll', scheduleProgress)
  window.removeEventListener('resize', scheduleProgress)
  if (pendingFrame) cancelAnimationFrame(pendingFrame)
})
</script>

<template>
  <a class="skip" href="#principal">{{ content.skip }}</a>
  <AmbientBackground :paused="motionPaused" />
  <div class="read-progress" aria-hidden="true" :style="{ transform: 'scaleX(' + progress + ')' }"></div>

  <div class="layout">
    <SiteSidebar :copy="content" :active-section="activeSection" />

    <main id="principal">
      <div id="inicio" class="top-meta">
        <span>{{ content.portfolio }} <span class="slash">/</span> 2026</span>
        <div class="right-meta">
          <span>Belém · PA</span>
          <button
            class="top-control"
            type="button"
            :aria-label="content.langLabel"
            @click="toggleLanguage"
          >{{ content.langButton }}</button>
          <button
            class="top-control"
            type="button"
            :aria-pressed="motionPaused"
            :title="content.motionTitle"
            @click="toggleMotion"
          >{{ motionPaused ? content.resumeLabel : content.pauseLabel }}</button>
        </div>
      </div>

      <section id="sobre" class="section" aria-labelledby="sobre-title">
        <SectionHeading number="01" :title="content.aboutTitle" heading-id="sobre-title" />
        <div class="copy">
          <p>{{ content.aboutBefore }} <strong>{{ content.aboutEmphasis }}</strong> {{ content.aboutAfter }}</p>
          <p>{{ content.aboutSecond }}</p>
        </div>
      </section>

      <section id="impacto" class="section" aria-labelledby="impacto-title">
        <SectionHeading number="02" :title="content.impactTitle" heading-id="impacto-title" />
        <MetricGrid :items="metrics" :language="language" :label="content.impactAria" />
        <p class="metric-note">{{ content.impactNote }}</p>
      </section>

      <section id="projetos" class="section" aria-labelledby="projetos-title">
        <SectionHeading number="03" :title="content.projectsTitle" heading-id="projetos-title" />
        <p class="copy" style="margin:-7px 0 17px">{{ content.projectsIntro }}</p>
        <div class="project-filters" role="group" :aria-label="content.projectsFilterAria">
          <button
            v-for="filter in filterIds"
            :key="filter"
            type="button"
            :aria-pressed="selectedFilter === filter"
            @click="selectedFilter = filter"
          >{{ content.filters[filter] }}</button>
        </div>
        <div class="project-list">
          <ProjectCard
            v-for="project in visibleProjects"
            :key="project.id"
            :project="project"
            :language="language"
            :links="content.links"
          />
        </div>
      </section>

      <section id="experiencia" class="section" aria-labelledby="experiencia-title">
        <SectionHeading number="04" :title="content.experienceTitle" heading-id="experiencia-title" />
        <ExperienceTimeline :items="experiences" :language="language" />
        <div class="study">
          <strong>{{ content.educationTitle }}</strong>
          <p>{{ content.educationDescription }}</p>
        </div>
      </section>

      <section id="ferramentas" class="section" aria-labelledby="ferramentas-title">
        <SectionHeading number="+" :title="content.toolsTitle" heading-id="ferramentas-title" />
        <p class="copy" style="margin:-7px 0 18px">{{ content.toolsDescription }}</p>
        <div class="skills" :aria-label="content.toolsTitle">
          <span v-for="skill in skills" :key="skill">{{ skill }}</span>
        </div>
      </section>

      <section id="contato" class="section" aria-labelledby="contato-title">
        <div class="segment-label" aria-hidden="true">05 <span class="slash">/</span></div>
        <div class="contact-card">
          <h2 id="contato-title">{{ content.contactTitle }}</h2>
          <p>{{ content.contactDescription }}</p>
          <div class="button-row">
            <a class="button primary" :href="emailHref">{{ content.emailButton }}</a>
            <a class="button secondary" href="/curriculo-carlos-lemos.pdf" download="Curriculo_Carlos_Lemos.pdf">{{ content.resumeButton }}</a>
          </div>
        </div>
      </section>

      <footer>
        <div class="footer-line"></div>
        {{ content.footer }}<br />{{ content.footerTech }}
      </footer>
    </main>
  </div>
</template>

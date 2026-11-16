import { describe, expect, it } from 'vitest'
import { copy, projects } from '../content/portfolio'
import { filterProjects } from './projects'

describe('portfolio data', () => {
  it('keeps all selected projects in the default filter', () => {
    expect(filterProjects(projects, 'todos')).toHaveLength(4)
    expect(filterProjects(projects, 'todos')).not.toBe(projects)
  })

  it('filters by category without changing the source list', () => {
    expect(filterProjects(projects, 'backend').map((item) => item.id)).toEqual(['lcp', 'portal'])
    expect(filterProjects(projects, 'produto').map((item) => item.id)).toEqual(['lcp', 'gestao-lab', 'verdinho'])
    expect(filterProjects(projects, 'institucional').map((item) => item.id)).toEqual(['portal', 'gestao-lab', 'verdinho'])
    expect(projects).toHaveLength(4)
  })

  it('provides both languages and valid categories for each project', () => {
    expect(copy.en.nav.map((item) => item.id)).toEqual(copy['pt-BR'].nav.map((item) => item.id))
    for (const project of projects) {
      expect(project.description.en.length).toBeGreaterThan(10)
      expect(project.description['pt-BR'].length).toBeGreaterThan(10)
      expect(project.categories.length).toBeGreaterThan(0)
      expect(project.link ? project.link.startsWith('https://') : true).toBe(true)
    }
  })
})

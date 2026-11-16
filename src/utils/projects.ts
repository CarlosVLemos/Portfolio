import type { Project, ProjectFilter } from '../types'

export function filterProjects(items: readonly Project[], filter: ProjectFilter): Project[] {
  if (filter === 'todos') return [...items]
  return items.filter((project) => project.categories.includes(filter))
}

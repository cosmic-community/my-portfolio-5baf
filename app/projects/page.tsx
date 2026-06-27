import { getProjects } from '@/lib/cosmic'
import ProjectCard from '@/components/ProjectCard'
import SectionHeading from '@/components/SectionHeading'

export const metadata = {
  title: 'Projects | My Portfolio',
}

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <SectionHeading title="Projects" subtitle="Everything I've built and shipped." />
      {projects.length === 0 ? (
        <p className="text-center text-murmin-ink/60">No projects yet. Check back soon ❀</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  )
}
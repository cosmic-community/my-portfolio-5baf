import Link from 'next/link'
import { getMetafieldValue } from '@/lib/cosmic'
import type { Project } from '@/types'

export default function ProjectCard({ project }: { project: Project }) {
  const title = getMetafieldValue(project.metadata?.title) || project.title
  const summary = getMetafieldValue(project.metadata?.summary)
  const cover = project.metadata?.cover_image
  const techStack = project.metadata?.tech_stack || []
  const featured = project.metadata?.featured

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block rounded-2xl overflow-hidden bg-white border border-murmin-blush shadow-soft hover:-translate-y-1 transition-transform duration-300"
    >
      {cover && (
        <div className="aspect-video overflow-hidden bg-murmin-mist">
          <img
            src={`${cover.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
            alt={title}
            width={400}
            height={225}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="font-serif text-xl text-murmin-ink">{title}</h3>
          {featured && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-murmin-rose/40 text-murmin-plum">
              ★ Featured
            </span>
          )}
        </div>
        {summary && (
          <p className="text-sm text-murmin-ink/70 line-clamp-2">{summary}</p>
        )}
        {techStack.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {techStack.slice(0, 4).map((tech, i) => (
              <span
                key={i}
                className="text-xs px-2.5 py-1 rounded-full bg-murmin-mist text-murmin-plum"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  )
}
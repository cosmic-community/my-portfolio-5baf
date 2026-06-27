// app/projects/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getProjectBySlug, getProjects, getMetafieldValue } from '@/lib/cosmic'

// Tell Next.js which slugs to pre-render at build time
export async function generateStaticParams() {
  const projects = await getProjects()
  return projects.map((project) => ({ slug: project.slug }))
}

// Return 404 for any slug not in the list above
export const dynamicParams = false

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const title = getMetafieldValue(project.metadata?.title) || project.title
  const summary = getMetafieldValue(project.metadata?.summary)
  const description = getMetafieldValue(project.metadata?.description)
  const cover = project.metadata?.cover_image
  const screenshots = project.metadata?.screenshots || []
  const techStack = project.metadata?.tech_stack || []
  const liveUrl = getMetafieldValue(project.metadata?.live_url)
  const githubUrl = getMetafieldValue(project.metadata?.github_url)

  return (
    <article className="max-w-4xl mx-auto px-6 py-16">
      <Link
        href="/projects"
        className="text-sm text-murmin-mauve hover:text-murmin-plum"
      >
        ← Back to projects
      </Link>

      <h1 className="font-serif text-4xl md:text-5xl text-murmin-ink mt-6 text-balance">
        {title}
      </h1>
      {summary && (
        <p className="mt-4 text-lg text-murmin-plum/80">{summary}</p>
      )}

      <div className="mt-6 flex flex-wrap gap-4">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-murmin-mauve text-white text-sm font-medium hover:bg-murmin-plum transition-colors shadow-soft"
          >
            Live Demo ↗
          </a>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full border border-murmin-mauve text-murmin-plum text-sm font-medium hover:bg-murmin-blush transition-colors"
          >
            GitHub ↗
          </a>
        )}
      </div>

      {cover && (
        <div className="mt-10 rounded-2xl overflow-hidden border border-murmin-blush shadow-soft">
          <img
            src={`${cover.imgix_url}?w=1600&h=900&fit=crop&auto=format,compress`}
            alt={title}
            width={800}
            height={450}
            className="w-full object-cover"
          />
        </div>
      )}

      {techStack.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-2">
          {techStack.map((tech, i) => (
            <span
              key={i}
              className="text-sm px-3 py-1.5 rounded-full bg-murmin-mist text-murmin-plum"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {description && (
        <div className="mt-10 prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-murmin-ink prose-p:text-murmin-ink/80">
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      )}

      {screenshots.length > 0 && (
        <div className="mt-12">
          <h2 className="font-serif text-2xl text-murmin-ink mb-6">Screenshots</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {screenshots.map((shot, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden border border-murmin-blush shadow-soft"
              >
                <img
                  src={`${shot.imgix_url}?w=1000&h=600&fit=crop&auto=format,compress`}
                  alt={`${title} screenshot ${i + 1}`}
                  width={500}
                  height={300}
                  className="w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  )
}
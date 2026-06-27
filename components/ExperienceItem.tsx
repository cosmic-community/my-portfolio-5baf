import { getMetafieldValue } from '@/lib/cosmic'
import type { WorkExperience } from '@/types'

function formatDate(date?: string): string {
  if (!date) return ''
  const d = new Date(date)
  if (isNaN(d.getTime())) return date
  return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}

export default function ExperienceItem({ item }: { item: WorkExperience }) {
  const company = getMetafieldValue(item.metadata?.company) || item.title
  const role = getMetafieldValue(item.metadata?.role)
  const description = getMetafieldValue(item.metadata?.description)
  const logo = item.metadata?.company_logo
  const techUsed = item.metadata?.tech_used || []
  const currently = item.metadata?.currently_working
  const start = formatDate(item.metadata?.start_date)
  const end = currently ? 'Present' : formatDate(item.metadata?.end_date)

  return (
    <div className="relative pl-8 pb-10 border-l-2 border-murmin-blush last:pb-0">
      <span className="absolute -left-2.5 top-1 w-5 h-5 rounded-full bg-murmin-rose border-4 border-murmin-cream" />
      <div className="rounded-2xl bg-white border border-murmin-blush p-6 shadow-soft">
        <div className="flex items-start gap-4">
          {logo && (
            <img
              src={`${logo.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
              alt={company}
              width={48}
              height={48}
              className="w-12 h-12 rounded-lg object-cover bg-murmin-mist"
            />
          )}
          <div className="flex-1">
            <h3 className="font-serif text-xl text-murmin-ink">{role}</h3>
            <p className="text-murmin-mauve text-sm">{company}</p>
            <p className="text-xs text-murmin-ink/50 mt-1">
              {start} {start && '—'} {end}
            </p>
          </div>
        </div>
        {description && (
          <p className="mt-4 text-sm text-murmin-ink/70 leading-relaxed">
            {description}
          </p>
        )}
        {techUsed.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {techUsed.map((tech, i) => (
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
    </div>
  )
}
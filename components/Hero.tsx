import Link from 'next/link'
import { getMetafieldValue } from '@/lib/cosmic'
import type { Profile } from '@/types'

export default function Hero({ profile }: { profile: Profile | null }) {
  const name = getMetafieldValue(profile?.metadata?.full_name) || 'Developer'
  const tagline = getMetafieldValue(profile?.metadata?.tagline)
  const location = getMetafieldValue(profile?.metadata?.location)
  const avatar = profile?.metadata?.avatar

  return (
    <section className="bg-murmin-hero">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <p className="text-murmin-mauve font-medium tracking-widest uppercase text-xs mb-4">
            Software Developer
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-murmin-ink leading-tight text-balance">
            {name}
          </h1>
          {tagline && (
            <p className="mt-5 text-lg text-murmin-plum/90 max-w-xl text-balance">
              {tagline}
            </p>
          )}
          {location && (
            <p className="mt-3 text-sm text-murmin-ink/60">📍 {location}</p>
          )}
          <div className="mt-8 flex gap-4 justify-center md:justify-start">
            <Link
              href="/projects"
              className="px-6 py-3 rounded-full bg-murmin-mauve text-white text-sm font-medium hover:bg-murmin-plum transition-colors shadow-soft"
            >
              View Work
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 rounded-full border border-murmin-mauve text-murmin-plum text-sm font-medium hover:bg-murmin-blush transition-colors"
            >
              About Me
            </Link>
          </div>
        </div>

        {avatar && (
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-murmin-rose/30 rounded-full blur-2xl" />
              <img
                src={`${avatar.imgix_url}?w=640&h=640&fit=crop&auto=format,compress`}
                alt={name}
                width={320}
                height={320}
                className="relative w-56 h-56 md:w-72 md:h-72 rounded-full object-cover border-4 border-white shadow-soft"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
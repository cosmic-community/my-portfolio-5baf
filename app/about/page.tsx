import { getProfile, getMetafieldValue } from '@/lib/cosmic'
import SectionHeading from '@/components/SectionHeading'

export const metadata = {
  title: 'About | My Portfolio',
}

export default async function AboutPage() {
  const profile = await getProfile()

  const name = getMetafieldValue(profile?.metadata?.full_name) || 'Developer'
  const bio = getMetafieldValue(profile?.metadata?.bio)
  const email = getMetafieldValue(profile?.metadata?.email)
  const location = getMetafieldValue(profile?.metadata?.location)
  const avatar = profile?.metadata?.avatar
  const resume = profile?.metadata?.resume
  const github = getMetafieldValue(profile?.metadata?.github_url)
  const linkedin = getMetafieldValue(profile?.metadata?.linkedin_url)
  const twitter = getMetafieldValue(profile?.metadata?.twitter_url)

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <SectionHeading title="About Me" />

      <div className="flex flex-col items-center text-center">
        {avatar && (
          <img
            src={`${avatar.imgix_url}?w=400&h=400&fit=crop&auto=format,compress`}
            alt={name}
            width={160}
            height={160}
            className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-soft"
          />
        )}
        <h2 className="font-serif text-3xl text-murmin-ink mt-6">{name}</h2>
        {location && <p className="text-sm text-murmin-ink/60 mt-1">📍 {location}</p>}
      </div>

      {bio && (
        <div className="mt-10 bg-white rounded-2xl border border-murmin-blush p-8 shadow-soft">
          <p className="text-murmin-ink/80 leading-relaxed whitespace-pre-line">
            {bio}
          </p>
        </div>
      )}

      <div className="mt-10 text-center">
        <h3 className="font-serif text-2xl text-murmin-plum mb-5">Get in touch</h3>
        <div className="flex flex-wrap gap-4 justify-center">
          {email && (
            <a
              href={`mailto:${email}`}
              className="px-5 py-2.5 rounded-full bg-murmin-mauve text-white text-sm font-medium hover:bg-murmin-plum transition-colors shadow-soft"
            >
              ✉ Email
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full border border-murmin-mauve text-murmin-plum text-sm font-medium hover:bg-murmin-blush transition-colors"
            >
              GitHub ↗
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full border border-murmin-mauve text-murmin-plum text-sm font-medium hover:bg-murmin-blush transition-colors"
            >
              LinkedIn ↗
            </a>
          )}
          {twitter && (
            <a
              href={twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full border border-murmin-mauve text-murmin-plum text-sm font-medium hover:bg-murmin-blush transition-colors"
            >
              Twitter ↗
            </a>
          )}
          {resume && (
            <a
              href={resume.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-murmin-rose text-murmin-plum text-sm font-medium hover:bg-murmin-mauve hover:text-white transition-colors shadow-soft"
            >
              Resume ↓
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
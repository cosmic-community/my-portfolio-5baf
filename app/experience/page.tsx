import { getWorkExperience } from '@/lib/cosmic'
import ExperienceItem from '@/components/ExperienceItem'
import SectionHeading from '@/components/SectionHeading'

export const metadata = {
  title: 'Experience | My Portfolio',
}

export default async function ExperiencePage() {
  const experience = await getWorkExperience()

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <SectionHeading title="Work Experience" subtitle="A timeline of my journey." />
      {experience.length === 0 ? (
        <p className="text-center text-murmin-ink/60">No experience listed yet ❀</p>
      ) : (
        <div>
          {experience.map((item) => (
            <ExperienceItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  )
}
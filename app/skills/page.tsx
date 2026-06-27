import { getSkills, getMetafieldValue } from '@/lib/cosmic'
import SkillCard from '@/components/SkillCard'
import SectionHeading from '@/components/SectionHeading'
import type { Skill } from '@/types'

export const metadata = {
  title: 'Skills | My Portfolio',
}

export default async function SkillsPage() {
  const skills = await getSkills()

  const grouped: Record<string, Skill[]> = {}
  skills.forEach((skill) => {
    const category = getMetafieldValue(skill.metadata?.category) || 'Other'
    if (!grouped[category]) {
      grouped[category] = []
    }
    grouped[category].push(skill)
  })

  const categories = Object.keys(grouped)

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <SectionHeading title="Skills" subtitle="The toolkit behind my craft." />
      {skills.length === 0 ? (
        <p className="text-center text-murmin-ink/60">No skills listed yet ❀</p>
      ) : (
        <div className="space-y-12">
          {categories.map((category) => {
            const items = grouped[category]
            if (!items || items.length === 0) {
              return null
            }
            return (
              <div key={category}>
                <h3 className="font-serif text-2xl text-murmin-plum mb-5">
                  {category}
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {items.map((skill) => (
                    <SkillCard key={skill.id} skill={skill} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
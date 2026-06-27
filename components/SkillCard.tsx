import { getMetafieldValue } from '@/lib/cosmic'
import type { Skill } from '@/types'

const levelMap: Record<string, number> = {
  Beginner: 25,
  Intermediate: 55,
  Advanced: 80,
  Expert: 100,
}

export default function SkillCard({ skill }: { skill: Skill }) {
  const name = getMetafieldValue(skill.metadata?.name) || skill.title
  const proficiency = getMetafieldValue(skill.metadata?.proficiency)
  const width = levelMap[proficiency] ?? 50

  return (
    <div className="rounded-xl bg-white border border-murmin-blush p-4 shadow-soft">
      <div className="flex items-center justify-between mb-2">
        <span className="font-medium text-murmin-ink">{name}</span>
        {proficiency && (
          <span className="text-xs text-murmin-mauve">{proficiency}</span>
        )}
      </div>
      <div className="h-2 rounded-full bg-murmin-mist overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-murmin-rose to-murmin-mauve"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  )
}
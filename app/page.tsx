import Link from 'next/link'
import { getProfile, getProjects, getSkills, getWorkExperience } from '@/lib/cosmic'
import Hero from '@/components/Hero'
import ProjectCard from '@/components/ProjectCard'
import SkillCard from '@/components/SkillCard'
import ExperienceItem from '@/components/ExperienceItem'
import SectionHeading from '@/components/SectionHeading'

export default async function HomePage() {
  const [profile, projects, skills, experience] = await Promise.all([
    getProfile(),
    getProjects(),
    getSkills(),
    getWorkExperience(),
  ])

  const featuredProjects = projects.filter((p) => p.metadata?.featured)
  const displayProjects = (featuredProjects.length > 0 ? featuredProjects : projects).slice(0, 3)
  const displaySkills = skills.slice(0, 6)
  const displayExperience = experience.slice(0, 3)

  return (
    <div>
      <Hero profile={profile} />

      {displayProjects.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 py-20">
          <SectionHeading title="Featured Projects" subtitle="A selection of work I'm proud of." />
          <div className="grid md:grid-cols-3 gap-8">
            {displayProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/projects"
              className="text-murmin-mauve hover:text-murmin-plum font-medium text-sm"
            >
              View all projects →
            </Link>
          </div>
        </section>
      )}

      {displaySkills.length > 0 && (
        <section className="bg-murmin-gradient">
          <div className="max-w-6xl mx-auto px-6 py-20">
            <SectionHeading title="Skills" subtitle="Tools & technologies I work with." />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {displaySkills.map((skill) => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
            </div>
            <div className="text-center mt-10">
              <Link
                href="/skills"
                className="text-murmin-mauve hover:text-murmin-plum font-medium text-sm"
              >
                See all skills →
              </Link>
            </div>
          </div>
        </section>
      )}

      {displayExperience.length > 0 && (
        <section className="max-w-3xl mx-auto px-6 py-20">
          <SectionHeading title="Experience" subtitle="My professional journey so far." />
          <div>
            {displayExperience.map((item) => (
              <ExperienceItem key={item.id} item={item} />
            ))}
          </div>
          <div className="text-center mt-6">
            <Link
              href="/experience"
              className="text-murmin-mauve hover:text-murmin-plum font-medium text-sm"
            >
              Full history →
            </Link>
          </div>
        </section>
      )}
    </div>
  )
}
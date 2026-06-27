export default function SectionHeading({
  title,
  subtitle,
}: {
  title: string
  subtitle?: string
}) {
  return (
    <div className="text-center mb-12">
      <h2 className="font-serif text-4xl text-murmin-ink">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-murmin-plum/80 max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className="mt-4 flex justify-center">
        <span className="text-murmin-rose">❀ ❀ ❀</span>
      </div>
    </div>
  )
}
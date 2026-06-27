import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-32 text-center">
      <p className="font-serif text-7xl text-murmin-rose">❀</p>
      <h1 className="font-serif text-4xl text-murmin-ink mt-6">Page not found</h1>
      <p className="text-murmin-ink/60 mt-3">
        The page you're looking for drifted away like a petal.
      </p>
      <Link
        href="/"
        className="inline-block mt-8 px-6 py-3 rounded-full bg-murmin-mauve text-white text-sm font-medium hover:bg-murmin-plum transition-colors shadow-soft"
      >
        Return Home
      </Link>
    </div>
  )
}
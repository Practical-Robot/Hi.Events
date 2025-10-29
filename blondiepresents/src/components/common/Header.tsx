import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-black text-white">
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            Blondie Presents
          </Link>
          <div className="space-x-6">
            <Link href="/" className="hover:text-gray-300">Home</Link>
            <Link href="/events" className="hover:text-gray-300">Events</Link>
            <Link href="/venues" className="hover:text-gray-300">Venues</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
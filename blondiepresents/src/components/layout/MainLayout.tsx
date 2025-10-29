import Header from '../common/Header'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Blondie Presents</p>
        </div>
      </footer>
    </div>
  )
}
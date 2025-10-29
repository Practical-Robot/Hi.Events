import { Inter } from 'next/font/google'
import MainLayout from '@/components/layout/MainLayout' // Updated import path
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blondie Presents',
  description: 'Live events and experiences by Blondie Presents',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  )
}
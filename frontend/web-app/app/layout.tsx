import './globals.css'
import type { Metadata } from 'next'
import Navbar from './nav/Navbar'

export const metadata: Metadata = {
  title: 'Carsties',
  description: 'Car auction site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className='container mx-auto px-5 pt-10'>
          {children}
        </main>
      </body>
    </html>
  )
}

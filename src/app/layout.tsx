import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from './providers'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Splash from '@/components/Splash'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dark Mode App',
  description: 'Next.js app with dark mode support',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Splash />
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow mt-16">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sinau - Belajar Tanpa Batas',
  description: 'Platform pembelajaran dengan guru terbaik',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#10B981" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      </head>
      <body className="antialiased max-w-[480px] mx-auto bg-gray-50 min-h-screen shadow-lg">
        {children}
      </body>
    </html>
  )
}

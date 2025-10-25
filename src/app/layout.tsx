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
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#10B981" />
      <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      <body className="antialiased bg-gray-50">{children}</body>
    </html>
  )
}

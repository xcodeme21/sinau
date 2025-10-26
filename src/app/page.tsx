'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { BookOpen } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6">
        <div className="flex items-center justify-center mb-4">
          <BookOpen className="w-14 h-14 text-purple-600" />
        </div>

        <h1 className="text-3xl font-bold text-gray-900">Selamat Datang 👋</h1>
        <p className="text-gray-500 max-w-sm mx-auto">
          Aplikasi belajar interaktif untuk siswa dan guru. Yuk mulai perjalanan
          belajar kamu!
        </p>

        <div className="mt-8 space-y-3">
          <Link
            href="/auth/login"
            className="block w-full bg-purple-600 text-white py-3 rounded-2xl font-semibold active:scale-95 transition-transform">
            Masuk
          </Link>
          <Link
            href="/auth/register"
            className="block w-full border border-gray-300 py-3 rounded-2xl font-semibold text-gray-800 active:scale-95 transition-transform">
            Daftar
          </Link>
        </div>
      </motion.div>

      <footer className="w-full py-4 text-center text-xs text-gray-400 fixed bottom-0 left-0">
        © {new Date().getFullYear()} Sinau by Kucing Oyen
      </footer>
    </div>
  )
}

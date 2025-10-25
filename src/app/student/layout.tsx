'use client'

import React from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Home, Users, BookOpen, User } from 'lucide-react'

interface StudentLayoutProps {
  children: React.ReactNode
}

export default function StudentLayout({ children }: StudentLayoutProps) {
  const pathname = usePathname()
  const router = useRouter()

  const navItems = [
    {
      id: 'dashboard',
      label: 'Beranda',
      icon: Home,
      path: '/student/dashboard',
    },
    { id: 'tutor', label: 'Tutor', icon: Users, path: '/student/tutor' },
    { id: 'study', label: 'Belajar', icon: BookOpen, path: '/student/study' },
    { id: 'profile', label: 'Profil', icon: User, path: '/student/profile' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white text-gray-800">
      {/* Main Content */}
      <main className="pb-20">{children}</main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-3 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-md w-[90%] max-w-md px-6 py-2 flex justify-between items-center z-50">
        {navItems.map((item) => {
          const Icon = item.icon
          const active = pathname === item.path
          return (
            <button
              key={item.id}
              onClick={() => router.push(item.path)}
              className={`flex flex-col items-center text-xs transition-all ${
                active ? 'text-emerald-600 font-semibold' : 'text-gray-400'
              }`}>
              <Icon size={22} strokeWidth={2} />
              <span className="mt-1">{item.label}</span>
              {active && (
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              )}
            </button>
          )
        })}
      </nav>
    </div>
  )
}

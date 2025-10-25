'use client'

import React from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Home, ShoppingBag, BookOpen, User } from 'lucide-react'

interface StudentLayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: StudentLayoutProps) {
  const pathname = usePathname()
  const router = useRouter()

  const navItems = [
    {
      id: 'dashboard',
      label: 'Beranda',
      icon: Home,
      path: '/student/dashboard',
    },
    {
      id: 'tutor',
      label: 'Tutor',
      icon: ShoppingBag,
      path: '/student/tutor',
    },
    {
      id: 'study',
      label: 'Belajar',
      icon: BookOpen,
      path: '/student/study',
    },
    {
      id: 'profile',
      label: 'Profil',
      icon: User,
      path: '/student/profile',
    },
  ]

  const handleNavigation = (path: string) => {
    router.push(path)
  }

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="w-full pb-20">{children}</main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
        <div className="w-full max-w-screen-sm mx-auto">
          <div className="flex justify-around items-center px-4 py-3">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.path

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.path)}
                  className={`flex flex-col items-center transition-all duration-200 ${
                    isActive
                      ? 'text-emerald-600'
                      : 'text-gray-400 hover:text-gray-600'
                  }`}>
                  <Icon size={24} strokeWidth={2} />
                  <span className="text-xs mt-1 font-medium">{item.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </nav>
    </div>
  )
}

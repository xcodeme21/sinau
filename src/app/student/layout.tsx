'use client'

import React from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Home, Grid3x3, Layers, MessageSquare, User } from 'lucide-react'

interface StudentLayoutProps {
  children: React.ReactNode
}

const navItems = [
  { name: 'Home', icon: Home, path: '/student/dashboard' },
  { name: 'Explore', icon: Grid3x3, path: '/student/tutor' },
  { name: 'Message', icon: MessageSquare, path: '/student/chat' },
  { name: 'Profile', icon: User, path: '/student/profile' },
]

export default function Layout({ children }: StudentLayoutProps) {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <main className="w-full pb-24">{children}</main>

      <nav className="fixed bottom-0 left-0 right-0 bg-white z-50">
        <div className="w-full max-w-screen-sm mx-auto relative">
          <div className="flex justify-around items-end px-4 py-3">
            {navItems.slice(0, 2).map((item) => (
              <button
                key={item.name}
                onClick={() => router.push(item.path)}
                className="flex flex-col items-center justify-center min-w-[60px] pb-1">
                <item.icon
                  size={24}
                  strokeWidth={2}
                  className={
                    pathname === item.path ? 'text-gray-900' : 'text-gray-400'
                  }
                />
                <span className="text-[10px] font-medium text-gray-500 mt-1">
                  {item.name}
                </span>
              </button>
            ))}

            {/* Center Big Button */}
            <button
              onClick={() => router.push('/student/study')}
              className="flex flex-col items-center justify-center -mt-6">
              <div className="bg-blue-500 text-white p-5 rounded-full shadow-2xl border-4 border-white">
                <Layers size={32} strokeWidth={2.5} />
              </div>
            </button>

            {navItems.slice(2).map((item) => (
              <button
                key={item.name}
                onClick={() => router.push(item.path)}
                className="flex flex-col items-center justify-center min-w-[60px] pb-1">
                <item.icon
                  size={24}
                  strokeWidth={2}
                  className={
                    pathname === item.path ? 'text-gray-900' : 'text-gray-400'
                  }
                />
                <span className="text-[10px] font-medium text-gray-500 mt-1">
                  {item.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </div>
  )
}

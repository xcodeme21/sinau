'use client'

import React from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Home, Grid3x3, Layers, MessageSquare, User } from 'lucide-react'

interface StudentLayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: StudentLayoutProps) {
  const pathname = usePathname()
  const router = useRouter()

  const handleNavigation = (path: string) => {
    router.push(path)
  }

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="w-full pb-24">{children}</main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white z-50">
        <div className="w-full max-w-screen-sm mx-auto relative">
          <div className="flex justify-around items-end px-4 py-3">
            {/* Home */}
            <button
              onClick={() => handleNavigation('/student/dashboard')}
              className="flex flex-col items-center justify-center min-w-[60px] pb-1">
              <Home
                size={24}
                strokeWidth={2}
                className={
                  pathname === '/student/dashboard'
                    ? 'text-gray-900'
                    : 'text-gray-400'
                }
              />
              <span className="text-[10px] font-medium text-gray-500 mt-1">
                Home
              </span>
            </button>

            {/* Explore */}
            <button
              onClick={() => handleNavigation('/student/tutor')}
              className="flex flex-col items-center justify-center min-w-[60px] pb-1">
              <Grid3x3
                size={24}
                strokeWidth={2}
                className={
                  pathname === '/student/tutor'
                    ? 'text-gray-900'
                    : 'text-gray-400'
                }
              />
              <span className="text-[10px] font-medium text-gray-500 mt-1">
                Explore
              </span>
            </button>

            {/* Center Big Button - Floating */}
            <button
              onClick={() => handleNavigation('/student/study')}
              className="flex flex-col items-center justify-center -mt-6">
              <div className="bg-blue-500 text-white p-5 rounded-full shadow-2xl border-4 border-white">
                <Layers size={32} strokeWidth={2.5} />
              </div>
            </button>

            {/* Message */}
            <button
              onClick={() => handleNavigation('/student/chat')}
              className="flex flex-col items-center justify-center min-w-[60px] pb-1">
              <MessageSquare
                size={24}
                strokeWidth={2}
                className={
                  pathname === '/student/chat'
                    ? 'text-gray-900'
                    : 'text-gray-400'
                }
              />
              <span className="text-[10px] font-medium text-gray-500 mt-1">
                Message
              </span>
            </button>

            {/* Profile */}
            <button
              onClick={() => handleNavigation('/student/profile')}
              className="flex flex-col items-center justify-center min-w-[60px] pb-1">
              <User
                size={24}
                strokeWidth={2}
                className={
                  pathname === '/student/profile'
                    ? 'text-gray-900'
                    : 'text-gray-400'
                }
              />
              <span className="text-[10px] font-medium text-gray-500 mt-1">
                Profile
              </span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}

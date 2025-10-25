// ============================================
// FILE: src/components/layout/StudentLayout.tsx
// ============================================
'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Home, ShoppingBag, BookOpen, User } from 'lucide-react';

interface StudentLayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: StudentLayoutProps) {
    const pathname = usePathname();
    const router = useRouter();

    const navItems = [
        {
            id: 'dashboard',
            label: 'Beranda',
            icon: Home,
            path: '/student/dashboard'
        },
        {
            id: 'tutor',
            label: 'Tutor',
            icon: ShoppingBag,
            path: '/student/tutor'
        },
        {
            id: 'study',
            label: 'Belajar',
            icon: BookOpen,
            path: '/student/study'
        },
        {
            id: 'profile',
            label: 'Profil',
            icon: User,
            path: '/student/profile'
        }
    ];

    const handleNavigation = (path: string) => {
        router.push(path);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
            {/* Main Content */}
            <main className="pb-20">
                {children}
            </main>

            {/* Bottom Navigation */}
            <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3 shadow-lg z-50">
                <div className="flex justify-around items-center max-w-lg mx-auto">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.path;

                        return (
                            <button
                                key={item.id}
                                onClick={() => handleNavigation(item.path)}
                                className={`flex flex-col items-center transition-colors ${
                                    isActive ? 'text-emerald-600' : 'text-gray-400'
                                }`}
                            >
                                <Icon size={24} />
                                <span className="text-xs mt-1 font-medium">{item.label}</span>
                            </button>
                        );
                    })}
                </div>
            </nav>
        </div>
    );
}
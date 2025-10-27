'use client'

import React, { useState } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Award,
  BookOpen,
  Clock,
  Settings,
  LogOut,
  Edit,
  ChevronRight,
  Star,
  Trophy,
  Target,
  CreditCard,
  Bell,
  Shield,
  HelpCircle,
  TrendingUp,
} from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import EditProfileContainer from '@/containers/student/profile/EditProfileContainer'

export default function ProfileContainer() {
  const router = useRouter()
  const [showEditModal, setShowEditModal] = useState(false)

  const userProfile = {
    name: 'Agus Siswanto',
    email: 'xcodeme21@gmail.com',
    phone: '+6285703696988',
    location: 'Jakarta Selatan',
    joinDate: 'Januari 2024',
    avatar: '👨‍🎓',
    totalCourses: 4,
    completedCourses: 1,
    learningHours: 21,
    certificates: 1,
  }

  const achievements = [
    {
      id: 1,
      title: 'Pemula Bersemangat',
      description: 'Menyelesaikan kursus pertama',
      icon: '🎯',
      date: 'Oktober 2024',
    },
    {
      id: 2,
      title: 'Konsisten Belajar',
      description: 'Belajar 7 hari berturut-turut',
      icon: '🔥',
      date: 'Oktober 2024',
    },
    {
      id: 3,
      title: 'Expert Learner',
      description: 'Total 20 jam pembelajaran',
      icon: '⭐',
      date: 'Oktober 2024',
    },
  ]

  const recentActivity = [
    {
      id: 1,
      title: 'Menyelesaikan Sesi',
      description: 'React Development - Advanced Hooks',
      date: '2 jam yang lalu',
      type: 'class',
    },
    {
      id: 2,
      title: 'Mendapat Pencapaian',
      description: 'Expert Learner - 20 jam belajar',
      date: '1 hari yang lalu',
      type: 'achievement',
    },
    {
      id: 3,
      title: 'Pembayaran Berhasil',
      description: 'Paket 5 sesi English Conversation',
      date: '3 hari yang lalu',
      type: 'payment',
    },
  ]

  const menuItems = [
    {
      icon: <Settings size={20} />,
      label: 'Pengaturan Akun',
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      href: '/student/profile/settings',
    },
    {
      icon: <CreditCard size={20} />,
      label: 'Metode Pembayaran',
      color: 'text-purple-600',
      bg: 'bg-purple-50',
      href: '/student/profile/payment-methods',
    },
    {
      icon: <Award size={20} />,
      label: 'Sertifikat Saya',
      color: 'text-yellow-600',
      bg: 'bg-yellow-50',
      href: '/student/profile/certificates',
    },
    {
      icon: <BookOpen size={20} />,
      label: 'Riwayat Pembelajaran',
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
      href: '/student/profile/learning-history',
    },
    {
      icon: <Bell size={20} />,
      label: 'Notifikasi',
      color: 'text-orange-600',
      bg: 'bg-orange-50',
      href: '/student/profile/notification-settings',
    },
    {
      icon: <Shield size={20} />,
      label: 'Privasi & Keamanan',
      color: 'text-red-600',
      bg: 'bg-red-50',
      href: '/student/profile/privacy',
    },
    {
      icon: <HelpCircle size={20} />,
      label: 'Bantuan & Dukungan',
      color: 'text-indigo-600',
      bg: 'bg-indigo-50',
      href: '/student/profile/help',
    },
  ]

  const stats = [
    {
      id: 1,
      label: 'Kursus Aktif',
      value: userProfile.totalCourses,
      icon: BookOpen,
      color: 'blue',
      trend: '+2 bulan ini',
      trendUp: true,
    },
    {
      id: 2,
      label: 'Diselesaikan',
      value: userProfile.completedCourses,
      icon: Target,
      color: 'emerald',
      trend: '25% progress',
      trendUp: true,
    },
    {
      id: 3,
      label: 'Jam Belajar',
      value: userProfile.learningHours,
      icon: Clock,
      color: 'purple',
      trend: '+5 minggu ini',
      trendUp: true,
    },
    {
      id: 4,
      label: 'Sertifikat',
      value: userProfile.certificates,
      icon: Award,
      color: 'yellow',
      trend: 'Segera!',
      trendUp: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pb-24">
      {/* Header */}
      <div className="bg-white px-5 pt-12 pb-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Profil Saya</h1>
            <p className="text-xs text-gray-500">Selamat datang kembali!</p>
          </div>
          <button
            onClick={() => setShowEditModal(true)}
            className="p-2.5 rounded-xl bg-gray-50 hover:bg-gray-100">
            <Edit size={20} className="text-gray-600" />
          </button>
        </div>

        {/* Profile Card */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-5 text-white shadow-lg">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-3xl">
              {userProfile.avatar}
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-bold">{userProfile.name}</h2>
              <p className="text-xs text-white/80">
                Member sejak {userProfile.joinDate}
              </p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 space-y-2">
            <div className="flex items-center gap-2 text-xs">
              <Mail size={14} className="text-white/80" />
              <span className="text-white/90">{userProfile.email}</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <Phone size={14} className="text-white/80" />
              <span className="text-white/90">{userProfile.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <MapPin size={14} className="text-white/80" />
              <span className="text-white/90">{userProfile.location}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 py-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-3 mb-6">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.id}
                className="bg-white rounded-2xl p-3 shadow-sm text-center">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <Icon size={18} className="text-blue-500" />
                </div>
                <p className="text-xl font-bold text-gray-800">{stat.value}</p>
                <p className="text-[9px] text-gray-500 leading-tight">
                  {stat.label}
                </p>
              </div>
            )
          })}
        </div>

        {/* Achievements */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-base font-semibold text-gray-800 flex items-center gap-2">
              <Trophy className="text-yellow-500" size={18} />
              Pencapaian
            </h3>
            <button className="text-xs text-blue-500 hover:underline">
              Lihat Semua
            </button>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {achievements.map((ach) => (
              <div
                key={ach.id}
                className="bg-white rounded-2xl p-3 shadow-sm text-center">
                <div className="text-3xl mb-1">{ach.icon}</div>
                <h4 className="font-semibold text-gray-800 text-[10px] mb-0.5">
                  {ach.title}
                </h4>
                <p className="text-[8px] text-gray-500 leading-tight">
                  {ach.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <div className="mb-6">
          <h3 className="text-base font-semibold text-gray-800 mb-3">
            Pengaturan
          </h3>
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            {menuItems.map((item, i) => (
              <button
                key={i}
                onClick={() => router.push(item.href)}
                className="w-full flex items-center justify-between px-4 py-3.5 hover:bg-gray-50 border-b border-gray-100 last:border-none transition">
                <div className="flex items-center gap-3">
                  <div
                    className={`${item.bg} w-9 h-9 rounded-xl flex items-center justify-center`}>
                    <span className={item.color}>{item.icon}</span>
                  </div>
                  <span className="text-gray-800 font-medium text-sm">
                    {item.label}
                  </span>
                </div>
                <ChevronRight size={18} className="text-gray-400" />
              </button>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mb-6">
          <h3 className="text-base font-semibold text-gray-800 mb-3">
            Aktivitas Terbaru
          </h3>
          <div className="space-y-2">
            {recentActivity.map((act) => (
              <div
                key={act.id}
                className="bg-white rounded-2xl shadow-sm p-3 flex items-start gap-3">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    act.type === 'class'
                      ? 'bg-blue-50 text-blue-500'
                      : act.type === 'achievement'
                        ? 'bg-yellow-50 text-yellow-500'
                        : 'bg-emerald-50 text-emerald-500'
                  }`}>
                  {act.type === 'class' && <BookOpen size={18} />}
                  {act.type === 'achievement' && <Star size={18} />}
                  {act.type === 'payment' && <CreditCard size={18} />}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-800 text-sm">
                    {act.title}
                  </h4>
                  <p className="text-xs text-gray-500 line-clamp-1">
                    {act.description}
                  </p>
                  <p className="text-[10px] text-gray-400 mt-0.5">{act.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Logout */}
        <Link
          href="/"
          className="w-full bg-white rounded-2xl shadow-sm py-3.5 flex items-center justify-center gap-2 text-red-500 font-semibold hover:bg-red-50 transition">
          <LogOut size={18} />
          Keluar
        </Link>

        {showEditModal && (
          <EditProfileContainer onClose={() => setShowEditModal(false)} />
        )}
      </div>
    </div>
  )
}

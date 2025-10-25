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

interface Achievement {
  id: number
  title: string
  description: string
  icon: string
  date: string
}

interface Activity {
  id: number
  title: string
  description: string
  date: string
  type: 'class' | 'achievement' | 'payment'
}

export default function ProfileContainer() {
  const [isEditing, setIsEditing] = useState(false)

  const userProfile = {
    name: 'Ahmad Rizki',
    email: 'ahmad.rizki@email.com',
    phone: '+62 812-3456-7890',
    location: 'Jakarta Selatan',
    joinDate: 'Januari 2024',
    avatar: '👨‍🎓',
    totalCourses: 4,
    completedCourses: 1,
    learningHours: 21,
    certificates: 1,
  }

  const achievements: Achievement[] = [
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

  const recentActivity: Activity[] = [
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
      bg: 'bg-blue-100',
    },
    {
      icon: <CreditCard size={20} />,
      label: 'Metode Pembayaran',
      color: 'text-purple-600',
      bg: 'bg-purple-100',
    },
    {
      icon: <Award size={20} />,
      label: 'Sertifikat Saya',
      color: 'text-yellow-600',
      bg: 'bg-yellow-100',
    },
    {
      icon: <BookOpen size={20} />,
      label: 'Riwayat Pembelajaran',
      color: 'text-emerald-600',
      bg: 'bg-emerald-100',
    },
    {
      icon: <Bell size={20} />,
      label: 'Notifikasi',
      color: 'text-orange-600',
      bg: 'bg-orange-100',
    },
    {
      icon: <Shield size={20} />,
      label: 'Privasi & Keamanan',
      color: 'text-red-600',
      bg: 'bg-red-100',
    },
    {
      icon: <HelpCircle size={20} />,
      label: 'Bantuan & Dukungan',
      color: 'text-indigo-600',
      bg: 'bg-indigo-100',
    },
  ]

  const stats = [
    {
      id: 1,
      label: 'Kursus Aktif',
      value: userProfile.totalCourses,
      icon: BookOpen,
      bgColor: 'from-blue-500 to-blue-600',
      lightBg: 'bg-blue-50',
      iconColor: 'text-blue-600',
      trend: '+2 bulan ini',
      trendUp: true,
    },
    {
      id: 2,
      label: 'Diselesaikan',
      value: userProfile.completedCourses,
      icon: Target,
      bgColor: 'from-emerald-500 to-emerald-600',
      lightBg: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
      trend: '25% progress',
      trendUp: true,
    },
    {
      id: 3,
      label: 'Jam Belajar',
      value: userProfile.learningHours,
      icon: Clock,
      bgColor: 'from-purple-500 to-purple-600',
      lightBg: 'bg-purple-50',
      iconColor: 'text-purple-600',
      trend: '+5 minggu ini',
      trendUp: true,
    },
    {
      id: 4,
      label: 'Sertifikat',
      value: userProfile.certificates,
      icon: Award,
      bgColor: 'from-yellow-500 to-yellow-600',
      lightBg: 'bg-yellow-50',
      iconColor: 'text-yellow-600',
      trend: 'Segera!',
      trendUp: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 pt-8 pb-24 rounded-b-3xl shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Profil Saya</h1>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="bg-white bg-opacity-20 p-2 rounded-full backdrop-blur-sm hover:bg-opacity-30 transition">
            <Edit size={20} />
          </button>
        </div>
      </div>

      <div className="px-6 -mt-16">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full w-20 h-20 flex items-center justify-center text-4xl">
              {userProfile.avatar}
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-800 mb-1">
                {userProfile.name}
              </h2>
              <p className="text-sm text-gray-600 mb-2">
                Member sejak {userProfile.joinDate}
              </p>
              <div className="flex items-center gap-2">
                <span className="bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full font-medium">
                  ⭐ Active Learner
                </span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 text-gray-600">
              <Mail size={18} className="text-emerald-500" />
              <span className="text-sm">{userProfile.email}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <Phone size={18} className="text-emerald-500" />
              <span className="text-sm">{userProfile.phone}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <MapPin size={18} className="text-emerald-500" />
              <span className="text-sm">{userProfile.location}</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <div
                  key={stat.id}
                  className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border border-gray-100">
                  <div
                    className={`bg-gradient-to-br ${stat.bgColor} w-12 h-12 rounded-xl flex items-center justify-center mb-3 shadow-md`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  <p className="text-3xl font-bold text-gray-800 mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs font-medium text-gray-600 mb-2">
                    {stat.label}
                  </p>
                  <div className="flex items-center gap-1">
                    <TrendingUp
                      size={12}
                      className={`${stat.trendUp ? 'text-green-500' : 'text-gray-400'}`}
                    />
                    <span className="text-xs text-gray-500">{stat.trend}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
              <Trophy className="text-yellow-500" size={20} />
              Pencapaian
            </h2>
            <button className="text-emerald-600 text-sm font-medium">
              Lihat Semua
            </button>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className="bg-white rounded-xl shadow-lg p-4 text-center hover:shadow-xl transition">
                <div className="text-4xl mb-2">{achievement.icon}</div>
                <h3 className="font-bold text-gray-800 text-xs mb-1">
                  {achievement.title}
                </h3>
                <p className="text-xs text-gray-600 leading-tight">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition border-b border-gray-100 last:border-b-0">
              <div className="flex items-center gap-3">
                <div
                  className={`${item.bg} w-10 h-10 rounded-full flex items-center justify-center`}>
                  <span className={item.color}>{item.icon}</span>
                </div>
                <span className="text-gray-800 font-medium text-sm">
                  {item.label}
                </span>
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </button>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-3">
            Aktivitas Terbaru
          </h2>
          <div className="space-y-3">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="bg-white rounded-xl shadow p-4">
                <div className="flex items-start gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                      activity.type === 'class'
                        ? 'bg-blue-100'
                        : activity.type === 'achievement'
                          ? 'bg-yellow-100'
                          : 'bg-emerald-100'
                    }`}>
                    {activity.type === 'class' && (
                      <BookOpen size={18} className="text-blue-600" />
                    )}
                    {activity.type === 'achievement' && (
                      <Star size={18} className="text-yellow-600" />
                    )}
                    {activity.type === 'payment' && (
                      <CreditCard size={18} className="text-emerald-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 text-sm mb-1">
                      {activity.title}
                    </h3>
                    <p className="text-xs text-gray-600 mb-1">
                      {activity.description}
                    </p>
                    <p className="text-xs text-gray-400">{activity.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Logout Button */}
        <button className="w-full bg-white rounded-xl shadow-lg p-4 flex items-center justify-center gap-3 text-red-600 font-semibold hover:bg-red-50 transition">
          <LogOut size={20} />
          <span>Keluar</span>
        </button>
      </div>
    </div>
  )
}

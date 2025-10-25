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

export default function ProfileContainer() {
  const [isEditing, setIsEditing] = useState(false)

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
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-white pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-emerald-400 via-emerald-500 to-teal-500 text-white px-6 pt-8 pb-28 rounded-b-[40px] shadow-lg">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Profil Saya</h1>
            <p className="text-sm opacity-80">Selamat datang kembali!</p>
          </div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="bg-white bg-opacity-20 p-3 rounded-2xl backdrop-blur-sm hover:bg-opacity-30 transition">
            <Edit size={20} />
          </button>
        </div>
      </div>

      <div className="px-6 -mt-24">
        {/* Profile Info */}
        <div className="bg-white rounded-3xl shadow-xl p-6 mb-6">
          <div className="flex items-center gap-5 mb-6">
            <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full w-20 h-20 flex items-center justify-center text-4xl">
              {userProfile.avatar}
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-800">
                {userProfile.name}
              </h2>
              <p className="text-sm text-gray-500">
                Member sejak {userProfile.joinDate}
              </p>
              <span className="mt-2 inline-block bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full font-medium">
                ⭐ Active Learner
              </span>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-3 text-gray-600 mb-6">
            <div className="flex items-center gap-3 text-sm">
              <Mail size={18} className="text-emerald-500" />{' '}
              {userProfile.email}
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Phone size={18} className="text-emerald-500" />{' '}
              {userProfile.phone}
            </div>
            <div className="flex items-center gap-3 text-sm">
              <MapPin size={18} className="text-emerald-500" />{' '}
              {userProfile.location}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <div
                  key={stat.id}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-5 shadow-md hover:shadow-lg hover:scale-[1.03] transition duration-300 border border-gray-100 cursor-pointer">
                  <div
                    className={`bg-${stat.color}-100 w-12 h-12 rounded-xl flex items-center justify-center mb-3`}>
                    <Icon size={22} className={`text-${stat.color}-600`} />
                  </div>
                  <p className="text-2xl font-bold text-gray-800 mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs font-medium text-gray-500 mb-1">
                    {stat.label}
                  </p>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <TrendingUp
                      size={12}
                      className={`${stat.trendUp ? 'text-green-500' : 'text-gray-400'}`}
                    />
                    {stat.trend}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
              <Trophy className="text-yellow-500" size={20} /> Pencapaian
            </h2>
            <button className="text-emerald-600 text-sm font-medium hover:underline">
              Lihat Semua
            </button>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {achievements.map((ach) => (
              <div
                key={ach.id}
                className="bg-white rounded-2xl shadow-md p-4 text-center hover:shadow-lg hover:scale-[1.03] transition">
                <div className="text-4xl mb-2">{ach.icon}</div>
                <h3 className="font-semibold text-gray-800 text-sm mb-1">
                  {ach.title}
                </h3>
                <p className="text-xs text-gray-500">{ach.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Menu */}
        <div className="bg-white rounded-3xl shadow-md overflow-hidden mb-6">
          {menuItems.map((item, i) => (
            <button
              key={i}
              className="w-full flex items-center justify-between px-5 py-4 hover:bg-gray-50 border-b border-gray-100 last:border-none transition">
              <div className="flex items-center gap-3">
                <div
                  className={`${item.bg} w-10 h-10 rounded-xl flex items-center justify-center`}>
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
            {recentActivity.map((act) => (
              <div
                key={act.id}
                className="bg-white rounded-2xl shadow-md p-4 flex items-start gap-3 hover:shadow-lg transition">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    act.type === 'class'
                      ? 'bg-blue-100 text-blue-600'
                      : act.type === 'achievement'
                        ? 'bg-yellow-100 text-yellow-600'
                        : 'bg-emerald-100 text-emerald-600'
                  }`}>
                  {act.type === 'class' && <BookOpen size={18} />}
                  {act.type === 'achievement' && <Star size={18} />}
                  {act.type === 'payment' && <CreditCard size={18} />}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm">
                    {act.title}
                  </h3>
                  <p className="text-xs text-gray-500">{act.description}</p>
                  <p className="text-[11px] text-gray-400 mt-1">{act.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Logout */}
        <Link
          href="/"
          className="w-full bg-white rounded-2xl shadow-md py-4 flex items-center justify-center gap-2 text-red-600 font-semibold hover:bg-red-50 transition">
          <LogOut size={18} />
          Keluar
        </Link>
      </div>
    </div>
  )
}

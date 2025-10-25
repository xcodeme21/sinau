'use client'

import React, { useState } from 'react'
import {
  Calendar,
  Bell,
  CreditCard,
  MapPin,
  Star,
  Clock,
  Play,
  BookOpen,
  Search,
  MessageSquare,
  Award,
} from 'lucide-react'
import PromoBanner from '@/containers/student/dashboard/PromoBanner'

interface Teacher {
  id: number
  name: string
  subject: string
  category: string
  rating: number
  reviews: number
  price: string
  location: string
  experience: string
  image: string
  available: string
  certified: boolean
  bio: string
}

interface Announcement {
  title: string
  desc: string
  time: string
  category: string
}

interface Category {
  id: string
  name: string
  icon: string
}

export default function DashboardContainer() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [showNotifications, setShowNotifications] = useState(false)

  const categories: Category[] = [
    { id: 'all', name: 'Semua', icon: '📚' },
    { id: 'music', name: 'Musik', icon: '🎵' },
    { id: 'language', name: 'Bahasa', icon: '💬' },
    { id: 'coding', name: 'Coding', icon: '💻' },
    { id: 'sports', name: 'Olahraga', icon: '⚽' },
    { id: 'art', name: 'Seni', icon: '🎨' },
  ]

  const teachers: Teacher[] = [
    {
      id: 1,
      name: 'Budi Santoso',
      subject: 'Gitar & Musik',
      category: 'music',
      rating: 4.9,
      reviews: 127,
      price: 'Rp 150.000/jam',
      location: 'Jakarta Selatan',
      experience: '8 tahun',
      image: '🎸',
      available: 'Senin, Rabu, Jumat',
      certified: true,
      bio: 'Guru musik profesional dengan spesialisasi gitar klasik dan modern.',
    },
    {
      id: 2,
      name: 'Sarah Wijaya',
      subject: 'Bahasa Inggris',
      category: 'language',
      rating: 5.0,
      reviews: 203,
      price: 'Rp 200.000/jam',
      location: 'Jakarta Pusat',
      experience: '10 tahun',
      image: '📖',
      available: 'Setiap hari',
      certified: true,
      bio: 'Native speaker dengan sertifikasi TESOL dan IELTS.',
    },
    {
      id: 3,
      name: 'Andi Prasetyo',
      subject: 'Web Development',
      category: 'coding',
      rating: 4.8,
      reviews: 89,
      price: 'Rp 250.000/jam',
      location: 'Online',
      experience: '6 tahun',
      image: '👨‍💻',
      available: 'Selasa, Kamis, Sabtu',
      certified: true,
      bio: 'Full-stack developer dengan pengalaman di startup teknologi.',
    },
    {
      id: 4,
      name: 'Linda Kusuma',
      subject: 'Yoga & Fitness',
      category: 'sports',
      rating: 4.9,
      reviews: 156,
      price: 'Rp 175.000/sesi',
      location: 'Jakarta Barat',
      experience: '5 tahun',
      image: '🧘‍♀️',
      available: 'Senin–Jumat pagi',
      certified: true,
      bio: 'Instruktur yoga bersertifikat internasional (RYT-200).',
    },
  ]

  const announcements: Announcement[] = [
    {
      title: 'Promo Ramadan - Diskon 25%',
      desc: 'Dapatkan diskon spesial 25% untuk pembelian paket 10 sesi pembelajaran.',
      time: '2 jam yang lalu',
      category: 'Promo',
    },
    {
      title: 'Tutor Baru: Kelas Desain UI/UX',
      desc: 'Instruktur senior dari industri tech kini tersedia.',
      time: '1 hari yang lalu',
      category: 'Kelas Baru',
    },
  ]

  const filteredTeachers =
    selectedCategory === 'all'
      ? teachers
      : teachers.filter((t) => t.category === selectedCategory)

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-emerald-500 to-teal-500 text-white px-6 pt-8 pb-28 rounded-b-[36px] shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-1">Dashboard</h1>
            <p className="text-sm text-white/90">
              Selamat datang, Agus Siswanto 👋
            </p>
          </div>

          {/* Notification */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="bg-white/20 p-3 rounded-2xl hover:bg-white/25 transition-all backdrop-blur-sm relative">
              <Bell size={22} />
              {announcements.length > 0 && (
                <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse" />
              )}
            </button>

            {/* Dropdown */}
            {showNotifications && (
              <div className="absolute right-0 mt-3 w-80 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden z-50">
                <div className="p-4 border-b text-gray-800 font-semibold">
                  Notifikasi
                </div>
                <div className="max-h-60 overflow-y-auto">
                  {announcements.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start p-4 hover:bg-gray-50 border-b border-gray-100">
                      <div
                        className={`p-3 rounded-xl mr-3 ${
                          item.category === 'Promo'
                            ? 'bg-rose-50 text-rose-500'
                            : 'bg-blue-50 text-blue-500'
                        }`}>
                        <Bell size={18} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm">{item.title}</h4>
                        <p className="text-xs text-gray-500 leading-snug">
                          {item.desc}
                        </p>
                        <div className="text-[10px] text-gray-400 flex items-center mt-1">
                          <Clock size={10} className="mr-1" /> {item.time}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="relative px-6 -mt-20 pb-10 max-w-md mx-auto">
        {/* Quick Actions */}
        <div className="bg-white border border-gray-100 rounded-2xl p-5 mb-6 shadow-sm">
          <div className="grid grid-cols-3 gap-4">
            {[
              {
                icon: Search,
                color: 'text-blue-500',
                bg: 'bg-blue-50',
                label: 'Cari Tutor',
              },
              {
                icon: Calendar,
                color: 'text-purple-500',
                bg: 'bg-purple-50',
                label: 'Jadwal Kelas',
              },
              {
                icon: BookOpen,
                color: 'text-teal-500',
                bg: 'bg-teal-50',
                label: 'Kelas Saya',
              },
              {
                icon: MessageSquare,
                color: 'text-orange-500',
                bg: 'bg-orange-50',
                label: 'Pesan',
              },
              {
                icon: CreditCard,
                color: 'text-pink-500',
                bg: 'bg-pink-50',
                label: 'Pembayaran',
              },
              {
                icon: Award,
                color: 'text-amber-500',
                bg: 'bg-amber-50',
                label: 'Sertifikat',
              },
            ].map((item, i) => (
              <button
                key={i}
                className="flex flex-col items-center text-center hover:scale-105 transition-all">
                <div className={`${item.bg} p-3 rounded-xl mb-2`}>
                  <item.icon
                    size={20}
                    className={item.color}
                    strokeWidth={1.6}
                  />
                </div>
                <span className="text-[11px] text-gray-700 font-medium">
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        <PromoBanner />

        {/* Category */}
        <div className="mb-8">
          <h2 className="text-base font-semibold text-gray-800 mb-3">
            Kategori Pembelajaran
          </h2>
          <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex flex-col items-center min-w-[80px] p-3 rounded-xl border transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-500 text-white border-emerald-500 scale-105'
                    : 'bg-white border-gray-200 hover:border-emerald-300 text-gray-700'
                }`}>
                <span className="text-2xl mb-1">{cat.icon}</span>
                <span className="text-xs font-medium">{cat.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Teachers */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-base font-semibold text-gray-800">
              Tutor Terbaik
            </h2>
            <button className="text-xs text-emerald-600 font-medium hover:underline">
              Lihat Semua →
            </button>
          </div>

          <div className="space-y-3">
            {filteredTeachers.map((teacher) => (
              <div
                key={teacher.id}
                className="bg-white border border-gray-100 rounded-xl p-4 hover:border-emerald-400 transition-all">
                <div className="flex gap-3">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-emerald-100 to-teal-100 text-2xl rounded-lg">
                    {teacher.image}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-gray-800 text-sm">
                        {teacher.name}
                      </h3>
                      {teacher.certified && (
                        <span className="text-[10px] text-emerald-600 border border-emerald-200 px-2 py-0.5 rounded-full">
                          ✓ Verified
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-emerald-600">
                      {teacher.subject}
                    </p>
                    <div className="flex items-center text-[11px] text-gray-500 mt-1">
                      <Star
                        size={12}
                        className="text-yellow-500 fill-yellow-500 mr-1"
                      />
                      {teacher.rating} ({teacher.reviews})
                      <span className="mx-1 text-gray-300">•</span>
                      {teacher.experience}
                    </div>
                    <p className="text-[11px] text-gray-600 mt-1 line-clamp-2">
                      {teacher.bio}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-3 pt-2 border-t border-gray-100">
                  <div>
                    <p className="text-[10px] text-gray-500">Tarif</p>
                    <p className="text-sm font-semibold text-emerald-600">
                      {teacher.price}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-3 py-1.5 text-xs rounded-lg border border-emerald-400 text-emerald-600 hover:bg-emerald-50 flex items-center gap-1">
                      <Play size={12} />
                      Demo
                    </button>
                    <button className="px-4 py-1.5 text-xs rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 shadow-sm">
                      Pesan
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

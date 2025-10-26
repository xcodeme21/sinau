'use client'

import { useState } from 'react'
import {
  Bell,
  Search,
  Settings,
  Layers,
  ChevronRight,
  MapPin,
} from 'lucide-react'
import PromoBanner from '@/containers/student/dashboard/PromoBanner'
import TeacherCard from '@/components/ui/TeacherCard'
import NotificationPanel from '@/components/ui/NotificationPanel'
import { Teacher } from '@/types/types'

interface Category {
  id: string
  name: string
  icon: string
}

export default function DashboardContainer() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [showNotif, setShowNotif] = useState(false)

  const categories: Category[] = [
    { id: 'all', name: 'Semua', icon: '📚' },
    { id: 'music', name: 'Musik', icon: '🎵' },
    { id: 'language', name: 'Bahasa', icon: '💬' },
    { id: 'coding', name: 'Coding', icon: '💻' },
  ]

  const teachers: Teacher[] = [
    {
      id: 1,
      name: 'Budi Santoso',
      subject: 'Gitar & Musik',
      category: 'music',
      rating: 4.9,
      reviews: 127,
      price: 'Rp 150.000',
      location: 'Jakarta Selatan',
      experience: '8 tahun',
      image: '🎸',
      available: 'Senin, Rabu, Jumat',
      certified: true,
      bio: 'Tutor musik profesional dengan spesialisasi gitar klasik dan modern',
      students: 45,
      discount: '20% OFF',
      schedule: 'Senin, Rabu, Jumat',
    },
    {
      id: 2,
      name: 'Sarah Wijaya',
      subject: 'Bahasa Inggris',
      category: 'language',
      rating: 5.0,
      reviews: 203,
      price: 'Rp 200.000',
      location: 'Jakarta Pusat',
      experience: '10 tahun',
      image: '📖',
      available: 'Setiap hari',
      certified: true,
      bio: 'Native speaker dengan sertifikasi TESOL dan IELTS',
      students: 89,
      discount: '15% OFF',
      schedule: 'Setiap hari',
    },
    {
      id: 3,
      name: 'Andi Prasetyo',
      subject: 'Web Development',
      category: 'coding',
      rating: 4.8,
      reviews: 89,
      price: 'Rp 250.000',
      location: 'Online',
      experience: '6 tahun',
      image: '👨‍💻',
      available: 'Selasa, Kamis, Sabtu',
      certified: true,
      bio: 'Full-stack developer dengan pengalaman di startup teknologi',
      students: 67,
      discount: '10% OFF',
      schedule: 'Selasa, Kamis, Sabtu',
    },
    {
      id: 4,
      name: 'Linda Kusuma',
      subject: 'Yoga & Fitness',
      category: 'sports',
      rating: 4.9,
      reviews: 156,
      price: 'Rp 175.000',
      location: 'Jakarta Barat',
      experience: '5 tahun',
      image: '🧘‍♀️',
      available: 'Senin–Jumat pagi',
      certified: true,
      bio: 'Instruktur yoga bersertifikat internasional (RYT-200)',
      students: 102,
      schedule: 'Senin–Jumat pagi',
    },
  ]

  const filteredTeachers =
    selectedCategory === 'all'
      ? teachers
      : teachers.filter((t) => t.category === selectedCategory)

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-blue-50 to-white pb-24">
      {/* Header */}
      <div className="bg-white px-5 pt-8 pb-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
              A
            </div>
            <div>
              <h2 className="text-base font-semibold text-gray-800">
                Agus Siswanto
              </h2>
              <p className="text-xs text-gray-500 flex items-center gap-1">
                <MapPin size={12} />
                Jakarta, Indonesia
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2.5 rounded-xl bg-gray-50 hover:bg-gray-100">
              <Settings size={20} className="text-gray-600" />
            </button>
            <button
              onClick={() => setShowNotif(!showNotif)}
              className="p-2.5 rounded-xl bg-gray-50 hover:bg-gray-100 relative">
              <Bell size={20} className="text-gray-600" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <NotificationPanel
              show={showNotif}
              onClose={() => setShowNotif(false)}
            />
          </div>
        </div>

        {/* Search */}
        <div className="relative">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Cari Tutor..."
            className="w-full pl-12 pr-12 py-3.5 rounded-xl bg-gray-50 border-none text-sm focus:outline-none focus:ring-2 focus:ring-blue-100"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-blue-500 rounded-lg">
            <div className="flex flex-col gap-0.5">
              <div className="w-4 h-0.5 bg-white rounded"></div>
              <div className="w-3 h-0.5 bg-white rounded"></div>
              <div className="w-2 h-0.5 bg-white rounded"></div>
            </div>
          </button>
        </div>
      </div>

      <PromoBanner />

      {/* Special Request Banner */}
      <div className="px-5 mb-6">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-4 flex items-center gap-4">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm flex-shrink-0">
            <Layers size={24} className="text-white" />
          </div>
          <div className="flex-1">
            <h4 className="text-white font-semibold text-sm mb-0.5">
              Permintaan Khusus
            </h4>
            <p className="text-white/80 text-xs leading-relaxed">
              Ajukan permintaan khusus untuk pembelajaran yang Anda inginkan...
            </p>
          </div>
          <ChevronRight size={20} className="text-white/80" />
        </div>
      </div>

      {/* Categories */}
      <div className="px-5 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-semibold text-gray-800">
            Semua Kategori
          </h3>
          <button className="text-xs text-gray-500 hover:text-gray-700">
            Lihat semua
          </button>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex flex-col items-center p-3 rounded-2xl transition-all ${
                selectedCategory === cat.id
                  ? 'bg-blue-50'
                  : 'bg-gray-50 hover:bg-gray-100'
              }`}>
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2 ${
                  selectedCategory === cat.id ? 'bg-white' : 'bg-white'
                }`}>
                <span className="text-2xl">{cat.icon}</span>
              </div>
              <span className="text-xs font-medium text-gray-700">
                {cat.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Top Rated Service */}
      <div className="px-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-semibold text-gray-800">
            Tutor Terbaik
          </h3>
          <button className="text-xs text-gray-500 hover:text-gray-700">
            Lihat semua
          </button>
        </div>

        <div className="space-y-3">
          {filteredTeachers.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </div>
      </div>
    </div>
  )
}

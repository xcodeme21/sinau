'use client'

import { useState } from 'react'
import {
  Bell,
  Star,
  Search,
  Settings,
  Layers,
  ChevronRight,
  MapPin,
  Share2,
  Heart,
  Clock,
} from 'lucide-react'
import PromoBanner from '@/containers/student/dashboard/PromoBanner'

interface Teacher {
  id: number
  name: string
  subject: string
  category: string
  rating: number
  reviews: string
  price: string
  image: string
  certified: boolean
  discount?: string
  location: string
  schedule: string
}

interface Category {
  id: string
  name: string
  icon: string
}

export default function DashboardContainer() {
  const [selectedCategory, setSelectedCategory] = useState('all')

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
      reviews: '2k',
      price: '190.000',
      image: '🎸',
      certified: true,
      discount: '20% OFF',
      location: 'Jakarta Selatan',
      schedule: 'Senin, Rabu, Jumat',
    },
    {
      id: 2,
      name: 'Sarah Wijaya',
      subject: 'Bahasa Inggris',
      category: 'language',
      rating: 4.2,
      reviews: '6k',
      price: '170.000',
      image: '📖',
      certified: true,
      discount: '15% OFF',
      location: 'Jakarta Pusat',
      schedule: 'Setiap hari',
    },
    {
      id: 3,
      name: 'Andi Prasetyo',
      subject: 'Web Development',
      category: 'coding',
      rating: 4.9,
      reviews: '2k',
      price: '190.000',
      image: '👨‍💻',
      certified: true,
      discount: '20% OFF',
      location: 'Online',
      schedule: 'Selasa, Kamis, Sabtu',
    },
    {
      id: 4,
      name: 'Linda Kusuma',
      subject: 'Yoga & Fitness',
      category: 'sports',
      rating: 4.2,
      reviews: '6k',
      price: '170.000',
      image: '🧘‍♀️',
      certified: true,
      discount: '10% OFF',
      location: 'Jakarta Barat',
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
            <button className="p-2.5 rounded-xl bg-gray-50 hover:bg-gray-100 relative">
              <Bell size={20} className="text-gray-600" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
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
            <div
              key={teacher.id}
              className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100">
              <div className="flex gap-3">
                {/* Image */}
                <div className="relative flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center text-4xl">
                    {teacher.image}
                  </div>
                  {teacher.discount && (
                    <div className="absolute top-1 left-1 bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                      {teacher.discount}
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm text-gray-800 mb-0.5">
                    {teacher.name}
                  </h4>
                  <p className="text-xs text-gray-500 mb-2 flex items-center gap-1">
                    <span>⚡</span>
                    {teacher.subject}
                  </p>

                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      <Star
                        size={12}
                        className="text-yellow-500 fill-yellow-500"
                      />
                      <span className="text-xs font-medium text-gray-700">
                        {teacher.rating}
                      </span>
                      <span className="text-xs text-gray-400">
                        ({teacher.reviews})
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex items-center gap-1">
                      <MapPin size={12} className="text-gray-400" />
                      <span className="text-xs text-gray-500">
                        {teacher.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 mb-2">
                    <Clock size={12} className="text-gray-400" />
                    <span className="text-xs text-gray-500">
                      {teacher.schedule}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-blue-500">
                        {teacher.price}
                      </span>
                      <span className="text-xs text-gray-500"> /jam</span>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50">
                        <Share2 size={16} className="text-gray-600" />
                      </button>
                      <button className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50">
                        <Heart size={16} className="text-gray-600" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

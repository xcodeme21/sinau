'use client'

import React, { useState } from 'react'
import { Search, MapPin } from 'lucide-react'
import TeacherCard from '@/components/ui/TeacherCard'
import BottomSheetModal from '@/components/ui/BottomSheetModal'
import { Teacher } from '@/types/types'

export default function TutorContainer() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedLocation, setSelectedLocation] = useState('all')
  const [showLocationModal, setShowLocationModal] = useState(false)
  const [sortBy, setSortBy] = useState('rating')

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

  const categories = [
    { id: 'all', name: 'Semua', icon: '📘' },
    { id: 'music', name: 'Musik', icon: '🎵' },
    { id: 'language', name: 'Bahasa', icon: '💬' },
    { id: 'coding', name: 'Coding', icon: '💻' },
    { id: 'sports', name: 'Olahraga', icon: '⚽' },
    { id: 'art', name: 'Seni', icon: '🎨' },
  ]

  const locations = [
    { id: 'all', name: 'Semua Lokasi' },
    { id: 'Jakarta Selatan', name: 'Jakarta Selatan' },
    { id: 'Jakarta Pusat', name: 'Jakarta Pusat' },
    { id: 'Jakarta Barat', name: 'Jakarta Barat' },
    { id: 'Online', name: 'Online' },
  ]

  // Filtering logic, termasuk handle lokasi yg user search tapi tidak ada di daftar
  const filtered = teachers
    .filter(
      (t) => selectedCategory === 'all' || t.category === selectedCategory,
    )
    .filter((t) => {
      if (selectedLocation === 'all') return true
      const locationExists = locations.some(
        (loc) => loc.id === selectedLocation,
      )
      if (!locationExists) {
        // jika lokasi tidak ada di daftar, tampilkan Tutor Online
        return t.location === 'Online'
      }
      return t.location === selectedLocation
    })
    .filter(
      (t) =>
        t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.subject.toLowerCase().includes(searchQuery.toLowerCase()),
    )

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white pb-24">
      {/* Sticky Header */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="px-5 pt-6 pb-4">
          <h1 className="text-xl font-semibold text-gray-800 tracking-tight mb-4">
            Temukan Tutor Terbaik ✨
          </h1>

          {/* Search Bar + Location Button */}
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Cari Tutor atau mata pelajaran..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-gray-100 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:bg-white transition-all duration-200"
              />
            </div>

            <button
              onClick={() => setShowLocationModal(true)}
              className="p-3 rounded-2xl bg-gray-100 hover:bg-emerald-100 transition-all duration-200">
              <MapPin className="text-emerald-600" size={20} />
            </button>
          </div>
        </div>

        {/* Category Scroll */}
        <div className="px-5 pb-3 overflow-x-auto hide-scrollbar">
          <div className="flex gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-500 text-white shadow-md'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-emerald-300 hover:text-emerald-600'
                }`}>
                <span>{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Result & Sort */}
      <div className="flex items-center justify-between px-5 py-3">
        <p className="text-gray-600 text-sm">
          Ditemukan{' '}
          <span className="font-semibold text-emerald-600">
            {filtered.length}
          </span>{' '}
          tutor
        </p>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="text-xs border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-200">
          <option value="rating">Rating Tertinggi</option>
          <option value="price-low">Harga Terendah</option>
          <option value="price-high">Harga Tertinggi</option>
          <option value="experience">Pengalaman</option>
        </select>
      </div>

      {/* Teacher List */}
      <div className="px-5 space-y-3">
        {filtered.length === 0 ? (
          <div className="text-center py-10 text-gray-400 text-sm">
            Tidak ada Tutor ditemukan 😔
          </div>
        ) : (
          filtered.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))
        )}
      </div>

      {/* BottomSheet Location */}
      <BottomSheetModal
        show={showLocationModal}
        title="Pilih Lokasi 📍"
        onClose={() => setShowLocationModal(false)}>
        <div className="grid grid-cols-2 gap-3">
          {locations.map((loc) => (
            <button
              key={loc.id}
              onClick={() => {
                setSelectedLocation(loc.id)
                setShowLocationModal(false)
              }}
              className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl border text-sm font-medium transition-all ${
                selectedLocation === loc.id
                  ? 'bg-emerald-100 text-emerald-700 border-emerald-300'
                  : 'bg-white border-gray-200 text-gray-700 hover:border-emerald-300 hover:text-emerald-600'
              }`}>
              <MapPin size={14} />
              {loc.name}
            </button>
          ))}
        </div>
      </BottomSheetModal>
    </div>
  )
}

'use client'

import React, { useState } from 'react'
import {
  Search,
  Filter,
  MapPin,
  Star,
  Clock,
  Play,
  Award,
  Calendar,
} from 'lucide-react'

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
  students: number
}

export default function TutorContainer() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('rating')

  const categories = [
    { id: 'all', name: 'Semua', icon: '📚' },
    { id: 'music', name: 'Musik', icon: '🎵' },
    { id: 'language', name: 'Bahasa', icon: '💬' },
    { id: 'coding', name: 'Coding', icon: '💻' },
    { id: 'sports', name: 'Olahraga', icon: '⚽' },
    { id: 'art', name: 'Seni', icon: '🎨' },
    { id: 'math', name: 'Matematika', icon: '🔢' },
    { id: 'science', name: 'Sains', icon: '🔬' },
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
      bio: 'Guru musik profesional dengan spesialisasi gitar klasik dan modern',
      students: 45,
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
      bio: 'Native speaker dengan sertifikasi TESOL dan IELTS',
      students: 89,
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
      bio: 'Full-stack developer dengan pengalaman di startup teknologi',
      students: 67,
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
      available: 'Senin-Jumat pagi',
      certified: true,
      bio: 'Instruktur yoga bersertifikat internasional (RYT-200)',
      students: 102,
    },
    {
      id: 5,
      name: 'Rudi Hartono',
      subject: 'Matematika SMA',
      category: 'math',
      rating: 4.7,
      reviews: 78,
      price: 'Rp 125.000/jam',
      location: 'Jakarta Timur',
      experience: '7 tahun',
      image: '📐',
      available: 'Senin-Kamis sore',
      certified: true,
      bio: 'Spesialis persiapan ujian masuk PTN dan Olimpiade Matematika',
      students: 56,
    },
  ]

  const filteredTeachers = teachers
    .filter(
      (t) => selectedCategory === 'all' || t.category === selectedCategory,
    )
    .filter(
      (t) =>
        t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.subject.toLowerCase().includes(searchQuery.toLowerCase()),
    )

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 pt-8 pb-20 rounded-b-3xl shadow-lg">
        <h1 className="text-2xl font-bold mb-6">Temukan Guru Terbaik</h1>

        {/* Search Bar */}
        <div className="relative">
          <Search
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Cari guru atau mata pelajaran..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-300"
          />
        </div>
      </div>

      <div className="px-6 -mt-12">
        {/* Categories */}
        <div className="bg-white rounded-2xl shadow-lg p-4 mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-800">Kategori</h3>
            <button className="text-emerald-600 text-sm font-medium">
              <Filter size={18} />
            </button>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}>
                <span>{cat.icon}</span>
                <span className="text-sm font-medium">{cat.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-gray-600 text-sm">
            Ditemukan{' '}
            <span className="font-bold text-emerald-600">
              {filteredTeachers.length}
            </span>{' '}
            guru
          </p>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-sm border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-300">
            <option value="rating">Rating Tertinggi</option>
            <option value="price-low">Harga Terendah</option>
            <option value="price-high">Harga Tertinggi</option>
            <option value="experience">Pengalaman</option>
          </select>
        </div>

        {/* Teacher List */}
        <div className="space-y-4">
          {filteredTeachers.map((teacher) => (
            <div
              key={teacher.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="p-5">
                <div className="flex gap-4 mb-4">
                  <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl w-20 h-20 flex items-center justify-center text-4xl flex-shrink-0">
                    {teacher.image}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-1">
                      <div>
                        <h3 className="font-bold text-gray-800 text-lg">
                          {teacher.name}
                        </h3>
                        <p className="text-emerald-600 text-sm font-medium">
                          {teacher.subject}
                        </p>
                      </div>
                      {teacher.certified && (
                        <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full font-medium">
                          <Award size={12} className="inline mr-1" />
                          Verified
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex items-center">
                        <Star
                          size={14}
                          className="text-yellow-500 fill-yellow-500"
                        />
                        <span className="text-sm font-bold text-gray-800 ml-1">
                          {teacher.rating}
                        </span>
                        <span className="text-xs text-gray-500 ml-1">
                          ({teacher.reviews})
                        </span>
                      </div>
                      <span className="text-gray-300">•</span>
                      <span className="text-xs text-gray-600">
                        {teacher.students} siswa
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">
                      {teacher.bio}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin size={14} className="mr-2 text-emerald-500" />
                    <span className="text-xs">{teacher.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock size={14} className="mr-2 text-emerald-500" />
                    <span className="text-xs">{teacher.experience}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Tarif</p>
                    <p className="text-lg font-bold text-emerald-600">
                      {teacher.price}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-200 transition">
                      <Play size={14} className="inline mr-1" />
                      Demo
                    </button>
                    <button className="bg-emerald-500 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-emerald-600 transition">
                      <Calendar size={14} className="inline mr-1" />
                      Pesan
                    </button>
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

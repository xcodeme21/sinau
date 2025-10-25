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
      bio: 'Guru musik profesional dengan spesialisasi gitar klasik dan modern',
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
    },
  ]

  const announcements: Announcement[] = [
    {
      title: 'Promo Ramadan - Diskon 25%',
      desc: 'Dapatkan diskon spesial 25% untuk pembelian paket 10 sesi pembelajaran. Promo berlaku hingga akhir bulan!',
      time: '2 jam yang lalu',
      category: 'Promo',
    },
    {
      title: 'Tutor Baru: Kelas Desain UI/UX',
      desc: 'Instruktur senior dari industri tech kini tersedia. Belajar desain dari basic hingga portfolio-ready!',
      time: '1 hari yang lalu',
      category: 'Kelas Baru',
    },
  ]

  const filteredTeachers =
    selectedCategory === 'all'
      ? teachers
      : teachers.filter((t) => t.category === selectedCategory)

  return (
    <div className="w-full">
      {/* Header */}
      <div className="bg-gradient-to-br from-emerald-400 via-emerald-500 to-teal-500 text-white px-6 pt-8 pb-32 rounded-b-[40px]">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
            <p className="text-white text-opacity-90 text-sm">
              Selamat datang, Agus Siswanto
            </p>
          </div>
          <button className="bg-white bg-opacity-20 p-3 rounded-2xl backdrop-blur-sm hover:bg-opacity-30 transition">
            <Bell size={22} />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative px-6 -mt-20 pb-6">
        {/* Quick Actions */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-6">
          <div className="grid grid-cols-3 gap-6">
            <button className="flex flex-col items-center">
              <div className="bg-blue-50 p-5 rounded-2xl mb-3 hover:bg-blue-100 transition-all">
                <Search className="text-blue-500" size={28} strokeWidth={1.5} />
              </div>
              <span className="text-sm font-medium text-gray-700 text-center">
                Cari Tutor
              </span>
            </button>
            <button className="flex flex-col items-center">
              <div className="bg-purple-50 p-5 rounded-2xl mb-3 hover:bg-purple-100 transition-all">
                <Calendar
                  className="text-purple-500"
                  size={28}
                  strokeWidth={1.5}
                />
              </div>
              <span className="text-sm font-medium text-gray-700 text-center">
                Jadwal Kelas
              </span>
            </button>
            <button className="flex flex-col items-center">
              <div className="bg-teal-50 p-5 rounded-2xl mb-3 hover:bg-teal-100 transition-all">
                <BookOpen
                  className="text-teal-500"
                  size={28}
                  strokeWidth={1.5}
                />
              </div>
              <span className="text-sm font-medium text-gray-700 text-center">
                Kelas Saya
              </span>
            </button>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-6">
            <button className="flex flex-col items-center">
              <div className="bg-orange-50 p-5 rounded-2xl mb-3 hover:bg-orange-100 transition-all">
                <MessageSquare
                  className="text-orange-500"
                  size={28}
                  strokeWidth={1.5}
                />
              </div>
              <span className="text-sm font-medium text-gray-700 text-center">
                Pesan
              </span>
            </button>
            <button className="flex flex-col items-center">
              <div className="bg-pink-50 p-5 rounded-2xl mb-3 hover:bg-pink-100 transition-all">
                <CreditCard
                  className="text-pink-500"
                  size={28}
                  strokeWidth={1.5}
                />
              </div>
              <span className="text-sm font-medium text-gray-700 text-center">
                Pembayaran
              </span>
            </button>
            <button className="flex flex-col items-center">
              <div className="bg-amber-50 p-5 rounded-2xl mb-3 hover:bg-amber-100 transition-all">
                <Award className="text-amber-500" size={28} strokeWidth={1.5} />
              </div>
              <span className="text-sm font-medium text-gray-700 text-center">
                Sertifikat
              </span>
            </button>
          </div>
        </div>

        {/* Announcements */}
        <div className="mb-6">
          <div className="flex items-center mb-4">
            <Bell size={20} className="text-gray-700 mr-2" />
            <h2 className="text-xl font-bold text-gray-800">
              Pengumuman Terbaru
            </h2>
          </div>
          {announcements.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md p-5 mb-3 hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <div
                  className={`p-3 rounded-xl mr-4 ${
                    item.category === 'Promo' ? 'bg-rose-50' : 'bg-blue-50'
                  }`}>
                  <Bell
                    className={`${
                      item.category === 'Promo'
                        ? 'text-rose-500'
                        : 'text-blue-500'
                    }`}
                    size={20}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-gray-800 text-base">
                      {item.title}
                    </h3>
                    <span
                      className={`text-xs px-3 py-1.5 rounded-full font-medium ${
                        item.category === 'Promo'
                          ? 'bg-rose-50 text-rose-600'
                          : 'bg-blue-50 text-blue-600'
                      }`}>
                      {item.category}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-400 flex items-center">
                      <Clock size={12} className="mr-1" />
                      {item.time}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Kategori Pembelajaran
          </h2>
          <div className="flex gap-3 overflow-x-auto pb-2 hide-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex flex-col items-center min-w-[85px] p-4 rounded-2xl transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-500 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                }`}>
                <span className="text-3xl mb-2">{cat.icon}</span>
                <span className="text-xs font-medium">{cat.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Teacher Marketplace */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">Tutor Terbaik</h2>
            <button className="text-sm text-emerald-600 font-semibold">
              Lihat Semua →
            </button>
          </div>

          <div className="space-y-4">
            {filteredTeachers.map((teacher) => (
              <div
                key={teacher.id}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
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
                          <p className="text-emerald-600 text-sm font-semibold">
                            {teacher.subject}
                          </p>
                        </div>
                        {teacher.certified && (
                          <span className="bg-blue-50 text-blue-600 text-xs px-3 py-1.5 rounded-full font-semibold">
                            ✓ Verified
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 mb-2">
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
                          {teacher.experience}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {teacher.bio}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-4 text-sm">
                    <div className="flex items-center text-gray-600">
                      <MapPin size={14} className="mr-1" />
                      <span className="text-xs">{teacher.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock size={14} className="mr-1" />
                      <span className="text-xs">{teacher.available}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Tarif</p>
                      <p className="text-base font-bold text-emerald-600">
                        {teacher.price}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button className="bg-emerald-50 text-emerald-600 px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-emerald-100 transition-all flex items-center gap-1.5">
                        <Play size={14} />
                        Demo
                      </button>
                      <button className="bg-emerald-500 text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-emerald-600 transition-all shadow-md">
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
    </div>
  )
}

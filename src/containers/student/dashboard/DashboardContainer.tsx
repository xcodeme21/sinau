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
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="bg-white bg-opacity-20 p-3 rounded-2xl backdrop-blur-sm hover:bg-opacity-30 transition relative">
              <Bell size={22} />
              {/* Badge notifikasi */}
              {announcements.length > 0 && (
                <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
              )}
            </button>

            {/* Dropdown notifikasi */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg overflow-hidden z-50">
                <div className="p-4 border-b border-gray-200 font-semibold text-gray-800">
                  Notifikasi
                </div>
                <div className="max-h-60 overflow-y-auto">
                  {announcements.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
                      <div
                        className={`p-3 rounded-xl mr-3 ${
                          item.category === 'Promo'
                            ? 'bg-rose-50'
                            : 'bg-blue-50'
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
                        <h4 className="font-semibold text-gray-800 text-sm">
                          {item.title}
                        </h4>
                        <p className="text-xs text-gray-500">{item.desc}</p>
                        <span className="text-[10px] text-gray-400 flex items-center mt-1">
                          <Clock size={10} className="mr-1" /> {item.time}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative px-6 -mt-24 pb-6">
        {/* Quick Actions */}
        <div className="bg-white rounded-3xl shadow-xl p-6 mb-6">
          <div className="grid grid-cols-3 gap-4">
            <button className="flex flex-col items-center">
              <div className="bg-blue-50 p-3 rounded-2xl mb-2 hover:bg-blue-100 transition-all">
                <Search className="text-blue-500" size={22} strokeWidth={1.5} />
              </div>
              <span className="text-xs font-medium text-gray-700 text-center">
                Cari Tutor
              </span>
            </button>
            <button className="flex flex-col items-center">
              <div className="bg-purple-50 p-3 rounded-2xl mb-2 hover:bg-purple-100 transition-all">
                <Calendar
                  className="text-purple-500"
                  size={22}
                  strokeWidth={1.5}
                />
              </div>
              <span className="text-xs font-medium text-gray-700 text-center">
                Jadwal Kelas
              </span>
            </button>
            <button className="flex flex-col items-center">
              <div className="bg-teal-50 p-3 rounded-2xl mb-2 hover:bg-teal-100 transition-all">
                <BookOpen
                  className="text-teal-500"
                  size={22}
                  strokeWidth={1.5}
                />
              </div>
              <span className="text-xs font-medium text-gray-700 text-center">
                Kelas Saya
              </span>
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <button className="flex flex-col items-center">
              <div className="bg-orange-50 p-3 rounded-2xl mb-2 hover:bg-orange-100 transition-all">
                <MessageSquare
                  className="text-orange-500"
                  size={22}
                  strokeWidth={1.5}
                />
              </div>
              <span className="text-xs font-medium text-gray-700 text-center">
                Pesan
              </span>
            </button>
            <button className="flex flex-col items-center">
              <div className="bg-pink-50 p-3 rounded-2xl mb-2 hover:bg-pink-100 transition-all">
                <CreditCard
                  className="text-pink-500"
                  size={22}
                  strokeWidth={1.5}
                />
              </div>
              <span className="text-xs font-medium text-gray-700 text-center">
                Pembayaran
              </span>
            </button>
            <button className="flex flex-col items-center">
              <div className="bg-amber-50 p-3 rounded-2xl mb-2 hover:bg-amber-100 transition-all">
                <Award className="text-amber-500" size={22} strokeWidth={1.5} />
              </div>
              <span className="text-xs font-medium text-gray-700 text-center">
                Sertifikat
              </span>
            </button>
          </div>
        </div>

        <PromoBanner />

        {/* Categories */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-3">
            Kategori Pembelajaran
          </h2>
          <div className="flex gap-3 overflow-x-auto pb-2 hide-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex flex-col items-center min-w-[75px] p-3 rounded-2xl transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-500 text-white shadow-md scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
                }`}>
                <span className="text-3xl mb-2">{cat.icon}</span>
                <span className="text-xs font-medium">{cat.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Teacher Marketplace */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-bold text-gray-800">Tutor Terbaik</h2>
            <button className="text-sm text-emerald-600 font-semibold">
              Lihat Semua →
            </button>
          </div>

          <div className="space-y-3">
            {filteredTeachers.map((teacher) => (
              <div
                key={teacher.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-4">
                  <div className="flex gap-3 mb-2">
                    <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl w-16 h-16 flex items-center justify-center text-3xl flex-shrink-0">
                      {teacher.image}
                    </div>
                    <div className="flex-1">
                      {/* Nama & Badge */}
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-gray-800 text-sm">
                          {teacher.name}
                        </h3>
                        {teacher.certified && (
                          <span className="bg-blue-50 text-blue-600 text-xs px-2 py-0.5 rounded-full font-medium">
                            ✓ Verified
                          </span>
                        )}
                      </div>

                      {/* Subjek */}
                      <p className="text-emerald-600 text-xs font-medium mb-1">
                        {teacher.subject}
                      </p>

                      {/* Rating & pengalaman */}
                      <div className="flex items-center gap-1 mb-1 text-xs text-gray-500">
                        <div className="flex items-center gap-0.5">
                          <Star
                            size={12}
                            className="text-yellow-500 fill-yellow-500"
                          />
                          <span className="font-semibold text-gray-800">
                            {teacher.rating}
                          </span>
                          <span>({teacher.reviews})</span>
                        </div>
                        <span>•</span>
                        <span>{teacher.experience}</span>
                      </div>

                      {/* Bio */}
                      <p className="text-xs text-gray-600">{teacher.bio}</p>
                    </div>
                  </div>

                  {/* Lokasi & Jadwal */}
                  <div className="flex items-center gap-3 mb-2 text-xs text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin size={12} />
                      <span>{teacher.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={12} />
                      <span>{teacher.available}</span>
                    </div>
                  </div>

                  {/* Tarif & tombol */}
                  <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">Tarif</p>
                      <p className="text-sm font-bold text-emerald-600">
                        {teacher.price}
                      </p>
                    </div>
                    <div className="flex gap-1">
                      <button className="bg-emerald-50 text-emerald-600 px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-emerald-100 flex items-center gap-1">
                        <Play size={12} />
                        Demo
                      </button>
                      <button className="bg-emerald-500 text-white px-4 py-1.5 rounded-lg text-xs font-medium hover:bg-emerald-600 shadow-sm">
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

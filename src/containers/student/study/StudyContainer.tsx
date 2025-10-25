'use client'

import React, { useState } from 'react'
import {
  Clock,
  Video,
  CheckCircle,
  Calendar,
  Award,
  BookOpen,
  TrendingUp,
} from 'lucide-react'

interface Course {
  id: number
  title: string
  teacher: string
  progress: number
  totalSessions: number
  completedSessions: number
  nextSession: string
  category: string
  image: string
  status: 'active' | 'completed' | 'upcoming'
}

interface Schedule {
  id: number
  title: string
  teacher: string
  date: string
  time: string
  type: 'online' | 'offline'
  image: string
}

export default function StudyContainer() {
  const [activeTab, setActiveTab] = useState<'ongoing' | 'completed'>('ongoing')

  const ongoingCourses: Course[] = [
    {
      id: 1,
      title: 'Gitar untuk Pemula',
      teacher: 'Budi Santoso',
      progress: 65,
      totalSessions: 10,
      completedSessions: 6,
      nextSession: 'Senin, 28 Okt - 15:00',
      category: 'Musik',
      image: '🎸',
      status: 'active',
    },
    {
      id: 2,
      title: 'English Conversation',
      teacher: 'Sarah Wijaya',
      progress: 40,
      totalSessions: 15,
      completedSessions: 6,
      nextSession: 'Selasa, 29 Okt - 10:00',
      category: 'Bahasa',
      image: '💬',
      status: 'active',
    },
    {
      id: 3,
      title: 'React Development',
      teacher: 'Andi Prasetyo',
      progress: 80,
      totalSessions: 12,
      completedSessions: 9,
      nextSession: 'Kamis, 31 Okt - 19:00',
      category: 'Coding',
      image: '⚛️',
      status: 'active',
    },
  ]

  const completedCourses: Course[] = [
    {
      id: 4,
      title: 'Yoga Dasar',
      teacher: 'Linda Kusuma',
      progress: 100,
      totalSessions: 8,
      completedSessions: 8,
      nextSession: '-',
      category: 'Olahraga',
      image: '🧘‍♀️',
      status: 'completed',
    },
  ]

  const upcomingSchedule: Schedule[] = [
    {
      id: 1,
      title: 'Gitar - Teknik Fingerstyle',
      teacher: 'Budi Santoso',
      date: 'Senin, 28 Okt',
      time: '15:00 - 16:00',
      type: 'offline',
      image: '🎸',
    },
    {
      id: 2,
      title: 'English - Daily Conversation',
      teacher: 'Sarah Wijaya',
      date: 'Selasa, 29 Okt',
      time: '10:00 - 11:00',
      type: 'online',
      image: '💬',
    },
  ]

  const displayedCourses =
    activeTab === 'ongoing' ? ongoingCourses : completedCourses

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 pt-8 pb-16 rounded-b-3xl shadow-lg">
        <h1 className="text-2xl font-bold mb-2">Pembelajaran Saya</h1>
        <p className="text-emerald-100 text-sm">Terus berkembang setiap hari</p>
      </div>

      <div className="px-6 -mt-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white rounded-xl shadow-lg p-4 text-center">
            <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">
              <BookOpen size={20} className="text-blue-600" />
            </div>
            <p className="text-2xl font-bold text-gray-800">3</p>
            <p className="text-xs text-gray-600">Kelas Aktif</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-4 text-center">
            <div className="bg-emerald-100 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">
              <TrendingUp size={20} className="text-emerald-600" />
            </div>
            <p className="text-2xl font-bold text-gray-800">21</p>
            <p className="text-xs text-gray-600">Jam Belajar</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-4 text-center">
            <div className="bg-yellow-100 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">
              <Award size={20} className="text-yellow-600" />
            </div>
            <p className="text-2xl font-bold text-gray-800">1</p>
            <p className="text-xs text-gray-600">Sertifikat</p>
          </div>
        </div>

        {/* Upcoming Schedule */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-800">
              Jadwal Mendatang
            </h2>
            <button className="text-emerald-600 text-sm font-medium">
              Lihat Semua
            </button>
          </div>
          <div className="space-y-3">
            {upcomingSchedule.map((schedule) => (
              <div
                key={schedule.id}
                className="bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl w-14 h-14 flex items-center justify-center text-2xl flex-shrink-0">
                    {schedule.image}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800 mb-1">
                      {schedule.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {schedule.teacher}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span className="flex items-center">
                        <Calendar size={12} className="mr-1" />
                        {schedule.date}
                      </span>
                      <span className="flex items-center">
                        <Clock size={12} className="mr-1" />
                        {schedule.time}
                      </span>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      schedule.type === 'online'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-purple-100 text-purple-700'
                    }`}>
                    {schedule.type === 'online' ? '🌐 Online' : '📍 Offline'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Course Tabs */}
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setActiveTab('ongoing')}
            className={`flex-1 py-3 rounded-xl font-medium transition ${
              activeTab === 'ongoing'
                ? 'bg-emerald-500 text-white shadow-lg'
                : 'bg-white text-gray-600'
            }`}>
            Sedang Berjalan ({ongoingCourses.length})
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`flex-1 py-3 rounded-xl font-medium transition ${
              activeTab === 'completed'
                ? 'bg-emerald-500 text-white shadow-lg'
                : 'bg-white text-gray-600'
            }`}>
            Selesai ({completedCourses.length})
          </button>
        </div>

        {/* Course List */}
        <div className="space-y-4">
          {displayedCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-5">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl w-16 h-16 flex items-center justify-center text-3xl flex-shrink-0">
                    {course.image}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-1">
                      <div>
                        <h3 className="font-bold text-gray-800 text-lg">
                          {course.title}
                        </h3>
                        <p className="text-emerald-600 text-sm">
                          {course.teacher}
                        </p>
                      </div>
                      <span className="bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full font-medium">
                        {course.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Progress</span>
                    <span className="text-sm font-bold text-emerald-600">
                      {course.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full transition-all"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {course.completedSessions} dari {course.totalSessions} sesi
                    selesai
                  </p>
                </div>

                {course.status === 'active' && (
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock size={14} className="mr-2 text-emerald-500" />
                      <span className="text-xs">
                        Sesi berikutnya: {course.nextSession}
                      </span>
                    </div>
                    <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-600 transition flex items-center gap-2">
                      <Video size={14} />
                      Mulai
                    </button>
                  </div>
                )}

                {course.status === 'completed' && (
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center text-emerald-600">
                      <CheckCircle size={18} className="mr-2" />
                      <span className="text-sm font-medium">
                        Kursus Selesai
                      </span>
                    </div>
                    <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-200 transition">
                      Lihat Sertifikat
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pb-24">
      {/* Header */}
      <div className="bg-white px-5 pt-12 pb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-1">
          Pembelajaran Saya
        </h1>
        <p className="text-sm text-gray-500">Terus berkembang setiap hari</p>
      </div>

      <div className="px-5 py-6">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white rounded-2xl shadow-sm p-4 text-center">
            <div className="bg-blue-50 w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-2">
              <BookOpen size={18} className="text-blue-500" />
            </div>
            <p className="text-2xl font-bold text-gray-800">3</p>
            <p className="text-[10px] text-gray-500">Kelas Aktif</p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-4 text-center">
            <div className="bg-emerald-50 w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-2">
              <TrendingUp size={18} className="text-emerald-500" />
            </div>
            <p className="text-2xl font-bold text-gray-800">21</p>
            <p className="text-[10px] text-gray-500">Jam Belajar</p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-4 text-center">
            <div className="bg-yellow-50 w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-2">
              <Award size={18} className="text-yellow-500" />
            </div>
            <p className="text-2xl font-bold text-gray-800">1</p>
            <p className="text-[10px] text-gray-500">Sertifikat</p>
          </div>
        </div>

        {/* Upcoming Schedule */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-semibold text-gray-800">
              Jadwal Mendatang
            </h2>
            <button className="text-xs text-blue-500 hover:underline">
              Lihat Semua
            </button>
          </div>
          <div className="space-y-2">
            {upcomingSchedule.map((schedule) => (
              <div
                key={schedule.id}
                className="bg-white rounded-2xl shadow-sm p-3">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl w-12 h-12 flex items-center justify-center text-2xl flex-shrink-0">
                    {schedule.image}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-800 text-sm mb-0.5">
                      {schedule.title}
                    </h3>
                    <p className="text-xs text-gray-500 mb-1">
                      {schedule.teacher}
                    </p>
                    <div className="flex items-center gap-2 text-[10px] text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar size={10} />
                        {schedule.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock size={10} />
                        {schedule.time}
                      </span>
                    </div>
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full text-[9px] font-medium flex-shrink-0 ${
                      schedule.type === 'online'
                        ? 'bg-blue-50 text-blue-600'
                        : 'bg-purple-50 text-purple-600'
                    }`}>
                    {schedule.type === 'online' ? 'Online' : 'Offline'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Course Tabs */}
        <div className="flex gap-2 mb-4 bg-gray-100 p-1 rounded-xl">
          <button
            onClick={() => setActiveTab('ongoing')}
            className={`flex-1 py-2 rounded-lg font-medium text-sm transition ${
              activeTab === 'ongoing'
                ? 'bg-white text-gray-800 shadow-sm'
                : 'text-gray-500'
            }`}>
            Sedang Berjalan ({ongoingCourses.length})
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`flex-1 py-2 rounded-lg font-medium text-sm transition ${
              activeTab === 'completed'
                ? 'bg-white text-gray-800 shadow-sm'
                : 'text-gray-500'
            }`}>
            Selesai ({completedCourses.length})
          </button>
        </div>

        {/* Course List */}
        <div className="space-y-3">
          {displayedCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="p-4">
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl w-14 h-14 flex items-center justify-center text-2xl flex-shrink-0">
                    {course.image}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="font-semibold text-gray-800 text-sm">
                        {course.title}
                      </h3>
                      <span className="bg-blue-50 text-blue-600 text-[9px] px-2 py-0.5 rounded-full font-medium flex-shrink-0">
                        {course.category}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">{course.teacher}</p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-3">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs text-gray-500">Progress</span>
                    <span className="text-xs font-semibold text-blue-600">
                      {course.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-1.5">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-1.5 rounded-full transition-all"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                  <p className="text-[10px] text-gray-400 mt-1">
                    {course.completedSessions} dari {course.totalSessions} sesi
                    selesai
                  </p>
                </div>

                {course.status === 'active' && (
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-1.5 text-[10px] text-gray-500">
                      <Clock size={12} className="text-blue-500" />
                      <span>Sesi: {course.nextSession}</span>
                    </div>
                    <button className="bg-blue-500 text-white px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-blue-600 transition flex items-center gap-1.5">
                      <Video size={12} />
                      Mulai
                    </button>
                  </div>
                )}

                {course.status === 'completed' && (
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-1.5 text-emerald-600">
                      <CheckCircle size={14} />
                      <span className="text-xs font-medium">
                        Kursus Selesai
                      </span>
                    </div>
                    <button className="bg-blue-50 text-blue-600 px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-blue-100 transition">
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

'use client'

import { useState } from 'react'
import {
  Bell,
  CheckCircle,
  XCircle,
  Clock,
  MessageCircle,
  Circle,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface Notification {
  id: number
  title: string
  message: string
  time: string
  type: 'success' | 'warning' | 'info'
  read: boolean
}

interface NotificationPanelProps {
  show: boolean
  onClose: () => void
}

export default function NotificationPanel({
  show,
  onClose,
}: NotificationPanelProps) {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      title: 'Kelas Baru Dimulai 🎉',
      message: 'Tutor Andi Prasetyo sudah memulai sesi “Web Development” kamu.',
      time: '5 menit lalu',
      type: 'success',
      read: false,
    },
    {
      id: 2,
      title: 'Diskon Spesial 🔥',
      message: 'Dapatkan potongan 20% untuk semua tutor bahasa minggu ini!',
      time: '2 jam lalu',
      type: 'info',
      read: true,
    },
    {
      id: 3,
      title: 'Reschedule Diterima ✅',
      message:
        'Permintaan ubah jadwal kelas Yoga oleh Linda Kusuma telah disetujui.',
      time: '1 hari lalu',
      type: 'success',
      read: false,
    },
    {
      id: 4,
      title: 'Tagihan Pembayaran 💳',
      message: 'Tagihan untuk kelas Gitar akan jatuh tempo besok.',
      time: '2 hari lalu',
      type: 'warning',
      read: true,
    },
    {
      id: 5,
      title: 'Tutor Baru Tersedia 🧑‍🏫',
      message: 'Coba tutor baru “Rizky Hidayat” untuk kelas Bahasa Jepang.',
      time: '3 hari lalu',
      type: 'info',
      read: false,
    },
    {
      id: 6,
      title: 'Kelas Dibatalkan ❌',
      message:
        'Sesi “Piano Dasar” dibatalkan oleh tutor karena alasan pribadi.',
      time: '4 hari lalu',
      type: 'warning',
      read: true,
    },
    {
      id: 7,
      title: 'Penilaian Tutor ⭐',
      message:
        'Berikan ulasan untuk tutor “Sarah Wijaya” setelah kelas selesai.',
      time: '5 hari lalu',
      type: 'info',
      read: false,
    },
    {
      id: 8,
      title: 'Pengingat Kelas ⏰',
      message: 'Jangan lupa kelas Yoga dimulai 30 menit lagi!',
      time: '6 hari lalu',
      type: 'warning',
      read: false,
    },
    {
      id: 9,
      title: 'Bonus Poin 🎁',
      message: 'Kamu mendapatkan 50 poin dari aktivitas belajar minggu ini!',
      time: '1 minggu lalu',
      type: 'success',
      read: true,
    },
    {
      id: 10,
      title: 'Update Sistem ⚙️',
      message: 'Aplikasi kami akan maintenance malam ini pukul 23:00.',
      time: '1 minggu lalu',
      type: 'info',
      read: false,
    },
    {
      id: 11,
      title: 'Promo Spesial 💥',
      message: 'Dapatkan cashback 10% untuk setiap booking baru minggu ini!',
      time: '2 minggu lalu',
      type: 'info',
      read: true,
    },
  ])

  const iconForType = (type: Notification['type']) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="text-green-500" size={18} />
      case 'warning':
        return <XCircle className="text-red-500" size={18} />
      default:
        return <MessageCircle className="text-blue-500" size={18} />
    }
  }

  const markAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n)),
    )
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.25 }}
          className="absolute top-16 right-5 w-80 bg-white/90 backdrop-blur-md shadow-2xl border border-gray-100 rounded-2xl overflow-hidden z-50">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
            <h4 className="text-sm font-semibold text-gray-800 flex items-center gap-2">
              <Bell size={16} className="text-blue-500" />
              Notifikasi
            </h4>
            <button
              onClick={onClose}
              className="text-xs text-gray-400 hover:text-gray-600 transition">
              Tutup
            </button>
          </div>

          {/* Notification List */}
          <div className="max-h-80 overflow-y-auto hide-scrollbar">
            {notifications.map((n) => (
              <motion.div
                key={n.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => markAsRead(n.id)}
                className={`px-4 py-3 flex gap-3 items-start cursor-pointer border-b border-gray-50 transition-all ${
                  n.read
                    ? 'bg-white hover:bg-gray-50'
                    : 'bg-blue-50/50 hover:bg-blue-100/60'
                }`}>
                {/* Unread indicator */}
                {!n.read && (
                  <div className="mt-1">
                    <Circle size={7} className="text-blue-500 fill-blue-500" />
                  </div>
                )}
                {n.read && <div className="w-2" />} {/* Spacer */}
                <div className="mt-0.5">{iconForType(n.type)}</div>
                <div className="flex-1">
                  <h5
                    className={`text-sm font-semibold ${
                      n.read ? 'text-gray-700' : 'text-gray-900'
                    }`}>
                    {n.title}
                  </h5>
                  <p
                    className={`text-xs mt-0.5 leading-snug ${
                      n.read ? 'text-gray-500' : 'text-gray-600'
                    }`}>
                    {n.message}
                  </p>
                  <div className="flex items-center gap-1 text-[11px] text-gray-400 mt-1">
                    <Clock size={11} />
                    {n.time}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer */}
          <div className="px-4 py-2 bg-gray-50 text-[11px] text-gray-500 text-center">
            Klik notifikasi untuk menandai sebagai sudah dibaca
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

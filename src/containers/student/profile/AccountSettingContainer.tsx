'use client'

import React from 'react'
import {
  ArrowLeft,
  Shield,
  Lock,
  Eye,
  EyeOff,
  ChevronRight,
} from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function AccountSettingContainer() {
  const router = useRouter()

  const securityItems = [
    {
      icon: <Lock size={20} />,
      label: 'Ubah Password',
      description: 'Terakhir diubah 3 bulan yang lalu',
      action: 'change-password',
    },
    {
      icon: <Shield size={20} />,
      label: 'Autentikasi Dua Faktor',
      description: 'Tingkatkan keamanan akun Anda',
      action: '2fa',
    },
    {
      icon: <Eye size={20} />,
      label: 'Privasi Akun',
      description: 'Atur siapa yang dapat melihat profil',
      action: 'privacy',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pb-24">
      {/* Header */}
      <div className="bg-white px-5 pt-12 pb-6 border-b border-gray-100">
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.back()}
            className="p-2 hover:bg-gray-100 rounded-xl transition">
            <ArrowLeft size={20} className="text-gray-700" />
          </button>
          <div>
            <h1 className="text-xl font-bold text-gray-800">Pengaturan Akun</h1>
            <p className="text-xs text-gray-500">Kelola akun dan keamanan</p>
          </div>
        </div>
      </div>

      <div className="px-5 py-6">
        {/* Account Info */}
        <div className="bg-white rounded-2xl shadow-sm p-4 mb-6">
          <h3 className="text-sm font-semibold text-gray-800 mb-3">
            Informasi Akun
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2">
              <span className="text-sm text-gray-600">ID Pengguna</span>
              <span className="text-sm font-medium text-gray-800">
                #AG2024001
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-t border-gray-100">
              <span className="text-sm text-gray-600">Status Akun</span>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                Aktif
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-t border-gray-100">
              <span className="text-sm text-gray-600">Bergabung Sejak</span>
              <span className="text-sm font-medium text-gray-800">
                Januari 2024
              </span>
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-800 mb-3">Keamanan</h3>
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            {securityItems.map((item, index) => (
              <button
                key={index}
                className="w-full flex items-center justify-between p-4 hover:bg-gray-50 border-b border-gray-100 last:border-none transition">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                    {item.icon}
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium text-gray-800">
                      {item.label}
                    </p>
                    <p className="text-xs text-gray-500">{item.description}</p>
                  </div>
                </div>
                <ChevronRight size={18} className="text-gray-400" />
              </button>
            ))}
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-white rounded-2xl shadow-sm p-4">
          <h3 className="text-sm font-semibold text-red-600 mb-3">
            Zona Berbahaya
          </h3>
          <button className="w-full bg-red-50 text-red-600 py-3 rounded-xl text-sm font-medium hover:bg-red-100 transition">
            Nonaktifkan Akun
          </button>
          <p className="text-xs text-gray-500 text-center mt-2">
            Tindakan ini dapat dibatalkan dalam 30 hari
          </p>
        </div>
      </div>
    </div>
  )
}

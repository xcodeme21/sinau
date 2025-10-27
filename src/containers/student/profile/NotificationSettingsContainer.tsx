'use client'

import React, { useState } from 'react'
import { ArrowLeft, Bell, Volume2, Mail, MessageSquare } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function NotificationSettingsContainer() {
  const router = useRouter()
  const [settings, setSettings] = useState({
    pushNotif: true,
    emailNotif: true,
    smsNotif: false,
    classReminder: true,
    paymentAlert: true,
    promoNotif: true,
    achievementNotif: true,
  })

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }))
  }

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
            <h1 className="text-xl font-bold text-gray-800">Notifikasi</h1>
            <p className="text-xs text-gray-500">Atur preferensi notifikasi</p>
          </div>
        </div>
      </div>

      <div className="px-5 py-6">
        {/* Notification Channels */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-800 mb-3">
            Saluran Notifikasi
          </h3>
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                  <Bell size={18} className="text-blue-500" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    Push Notification
                  </p>
                  <p className="text-xs text-gray-500">
                    Notifikasi di aplikasi
                  </p>
                </div>
              </div>
              <button
                onClick={() => toggleSetting('pushNotif')}
                className={`w-12 h-6 rounded-full transition ${
                  settings.pushNotif ? 'bg-blue-500' : 'bg-gray-300'
                }`}>
                <div
                  className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${
                    settings.pushNotif ? 'translate-x-6' : 'translate-x-0.5'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center">
                  <Mail size={18} className="text-purple-500" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">Email</p>
                  <p className="text-xs text-gray-500">Notifikasi via email</p>
                </div>
              </div>
              <button
                onClick={() => toggleSetting('emailNotif')}
                className={`w-12 h-6 rounded-full transition ${
                  settings.emailNotif ? 'bg-blue-500' : 'bg-gray-300'
                }`}>
                <div
                  className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${
                    settings.emailNotif ? 'translate-x-6' : 'translate-x-0.5'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
                  <MessageSquare size={18} className="text-green-500" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">SMS</p>
                  <p className="text-xs text-gray-500">Notifikasi via SMS</p>
                </div>
              </div>
              <button
                onClick={() => toggleSetting('smsNotif')}
                className={`w-12 h-6 rounded-full transition ${
                  settings.smsNotif ? 'bg-blue-500' : 'bg-gray-300'
                }`}>
                <div
                  className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${
                    settings.smsNotif ? 'translate-x-6' : 'translate-x-0.5'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Notification Types */}
        <div>
          <h3 className="text-sm font-semibold text-gray-800 mb-3">
            Jenis Notifikasi
          </h3>
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            {[
              {
                key: 'classReminder' as const,
                label: 'Pengingat Kelas',
                desc: 'Notifikasi sebelum kelas dimulai',
              },
              {
                key: 'paymentAlert' as const,
                label: 'Pembayaran',
                desc: 'Status pembayaran dan invoice',
              },
              {
                key: 'promoNotif' as const,
                label: 'Promo & Penawaran',
                desc: 'Diskon dan penawaran spesial',
              },
              {
                key: 'achievementNotif' as const,
                label: 'Pencapaian',
                desc: 'Badge dan sertifikat baru',
              },
            ].map((item, index) => (
              <div
                key={item.key}
                className="flex items-center justify-between p-4 border-b border-gray-100 last:border-none">
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    {item.label}
                  </p>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
                <button
                  onClick={() => toggleSetting(item.key)}
                  className={`w-12 h-6 rounded-full transition ${
                    settings[item.key] ? 'bg-blue-500' : 'bg-gray-300'
                  }`}>
                  <div
                    className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${
                      settings[item.key] ? 'translate-x-6' : 'translate-x-0.5'
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

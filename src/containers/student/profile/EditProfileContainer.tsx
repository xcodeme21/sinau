'use client'

import React, { useState } from 'react'
import { Mail, Phone, MapPin, Calendar, User, Camera, Save } from 'lucide-react'
import BottomSheetModal from '@/components/ui/BottomSheetModal'
import Button from '@/components/Button'

export default function EditProfileContainer({
  onClose,
}: {
  onClose: () => void
}) {
  const [formData, setFormData] = useState({
    name: 'Agus Siswanto',
    email: 'xcodeme21@gmail.com',
    phone: '+6285703696988',
    location: 'Jakarta Selatan',
    bio: 'Passionate learner yang suka belajar hal baru',
    birthDate: '1995-05-15',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Saved:', formData)
    onClose()
  }

  return (
    <BottomSheetModal show={true} title="Edit Profil" onClose={onClose}>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Avatar */}
        <div className="flex flex-col items-center mb-4">
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-3xl">
              👨‍🎓
            </div>
            <button
              type="button"
              className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full shadow-lg">
              <Camera size={14} />
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2">Klik untuk ubah foto</p>
        </div>

        {/* Form Fields */}
        {[
          {
            name: 'name',
            label: 'Nama Lengkap',
            icon: User,
            type: 'text',
            placeholder: 'Masukkan nama lengkap',
          },
          {
            name: 'email',
            label: 'Email',
            icon: Mail,
            type: 'email',
            placeholder: 'email@example.com',
          },
          {
            name: 'phone',
            label: 'Nomor Telepon',
            icon: Phone,
            type: 'tel',
            placeholder: '+62...',
          },
          {
            name: 'location',
            label: 'Lokasi',
            icon: MapPin,
            type: 'text',
            placeholder: 'Kota, Provinsi',
          },
        ].map((f) => (
          <div key={f.name}>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <f.icon size={16} className="text-blue-500" /> {f.label}
            </label>
            <input
              type={f.type}
              name={f.name}
              value={(formData as any)[f.name]}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 rounded-xl border-none text-sm focus:outline-none focus:ring-2 focus:ring-blue-100"
              placeholder={f.placeholder}
            />
          </div>
        ))}

        {/* Birth Date */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
            <Calendar size={16} className="text-blue-500" /> Tanggal Lahir
          </label>
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-50 rounded-xl border-none text-sm focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Bio */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 block">
            Bio
          </label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-3 bg-gray-50 rounded-xl border-none text-sm focus:ring-2 focus:ring-blue-100 resize-none"
            placeholder="Ceritakan tentang diri Anda..."
          />
        </div>

        <div>
          <Button type="submit" className="w-full bg-blue-500 mb-20">
            <Save size={18} /> Simpan Perubahan
          </Button>
        </div>
      </form>
    </BottomSheetModal>
  )
}

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import {
  MobileInput,
  PrimaryButton,
  SegmentedControl,
} from '@/components/auth/FormElements'

export default function RegisterPage() {
  const [role, setRole] = useState<'student' | 'teacher'>('student')
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  })
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (formData.fullName.length < 3) newErrors.fullName = 'Minimal 3 karakter'
    if (!formData.email.match(/\S+@\S+\.\S+/))
      newErrors.email = 'Email tidak valid'
    if (formData.phone.length < 10) newErrors.phone = 'Nomor tidak valid'
    if (formData.password.length < 6) newErrors.password = 'Minimal 6 karakter'
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = 'Password tidak sama'
    if (!formData.agreeToTerms) newErrors.agreeToTerms = 'Harus disetujui'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = () => {
    if (validate()) {
      console.log('Register data:', { role, ...formData })
    }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="h-12" />
      <div className="px-6 py-4 flex items-center border-b border-gray-100">
        <Link
          href="/auth/login"
          className="p-2 -ml-2 active:scale-95 transition-transform">
          <ArrowLeft className="w-6 h-6 text-gray-900" />
        </Link>
        <h1 className="text-xl font-semibold text-gray-900 ml-2">Daftar</h1>
      </div>

      {/* Form */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6 pb-32">
        <SegmentedControl value={role} onChange={setRole} />

        <div className="space-y-4">
          <MobileInput
            placeholder="Nama Lengkap"
            value={formData.fullName}
            onChange={(e) => handleChange('fullName', e.target.value)}
            error={errors.fullName}
          />

          <MobileInput
            placeholder="Email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            error={errors.email}
          />

          <MobileInput
            placeholder="Nomor Telepon"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            error={errors.phone}
          />

          <MobileInput
            placeholder="Password"
            value={formData.password}
            onChange={(e) => handleChange('password', e.target.value)}
            showPassword={showPassword}
            onTogglePassword={() => setShowPassword(!showPassword)}
            error={errors.password}
          />

          <MobileInput
            placeholder="Konfirmasi Password"
            value={formData.confirmPassword}
            onChange={(e) => handleChange('confirmPassword', e.target.value)}
            showPassword={showPassword}
            onTogglePassword={() => setShowPassword(!showPassword)}
            error={errors.confirmPassword}
          />

          <label className="flex items-start gap-3 active:opacity-70 transition-opacity">
            <input
              type="checkbox"
              checked={formData.agreeToTerms}
              onChange={(e) => handleChange('agreeToTerms', e.target.checked)}
              className="w-5 h-5 mt-0.5 rounded-lg border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-600 leading-relaxed">
              Saya setuju dengan{' '}
              <button type="button" className="text-blue-600 font-medium">
                Syarat & Ketentuan
              </button>{' '}
              dan{' '}
              <button type="button" className="text-blue-600 font-medium">
                Kebijakan Privasi
              </button>
            </span>
          </label>
          {errors.agreeToTerms && (
            <p className="text-xs text-red-500 px-1">{errors.agreeToTerms}</p>
          )}
        </div>

        <p className="text-center text-gray-500">
          Sudah punya akun?{' '}
          <Link href="/auth/login" className="font-semibold text-gray-900">
            Masuk
          </Link>
        </p>
      </div>

      {/* Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 safe-area-bottom">
        <div className="max-w-md mx-auto">
          <PrimaryButton
            onClick={handleSubmit}
            disabled={!formData.agreeToTerms}
            variant={role === 'student' ? 'purple' : 'green'}>
            Buat Akun
          </PrimaryButton>
        </div>
      </div>
    </div>
  )
}

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Check } from 'lucide-react'
import {
  MobileInput,
  PrimaryButton,
  SegmentedControl,
} from '@/components/auth/FormElements'

export default function ForgotPasswordPage() {
  const [role, setRole] = useState<'student' | 'teacher'>('student')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = () => {
    if (!email.match(/\S+@\S+\.\S+/)) {
      setError('Email tidak valid')
      return
    }
    setSent(true)
  }

  if (sent) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <div className="max-w-sm w-full text-center space-y-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <Check className="w-10 h-10 text-green-600" />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Cek Email Anda
            </h2>
            <p className="text-gray-500 text-sm">
              Kami telah mengirim link reset ke <br />
              <span className="font-medium text-gray-900">{email}</span>
            </p>
          </div>

          <div className="bg-blue-50 rounded-2xl p-4">
            <p className="text-sm text-blue-900">
              Link berlaku 1 jam. Cek folder spam jika tidak ada di inbox.
            </p>
          </div>

          <Link href="/auth/login">
            <PrimaryButton onClick={() => {}} variant="blue">
              Kembali ke Login
            </PrimaryButton>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="h-12" />
      <div className="px-6 py-4 flex items-center border-b border-gray-100">
        <Link
          href="/auth/login"
          className="p-2 -ml-2 active:scale-95 transition-transform">
          <ArrowLeft className="w-6 h-6 text-gray-900" />
        </Link>
        <h1 className="text-xl font-semibold text-gray-900 ml-2">
          Lupa Password
        </h1>
      </div>

      <div className="flex-1 px-6 py-8 space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Reset Password
          </h2>
          <p className="text-gray-500">
            Masukkan email untuk menerima link reset
          </p>
        </div>

        <SegmentedControl value={role} onChange={setRole} />

        <MobileInput
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            setError('')
          }}
          error={error}
        />

        <div className="bg-blue-50 rounded-2xl p-4">
          <p className="text-sm text-blue-900">
            Link reset akan dikirim ke email Anda dan berlaku selama 1 jam.
          </p>
        </div>

        <PrimaryButton
          onClick={handleSubmit}
          disabled={!email}
          variant={role === 'student' ? 'purple' : 'green'}>
          Kirim Link
        </PrimaryButton>

        <p className="text-center text-gray-500">
          Ingat password?{' '}
          <Link href="/auth/login" className="font-semibold text-gray-900">
            Masuk
          </Link>
        </p>
      </div>
    </div>
  )
}

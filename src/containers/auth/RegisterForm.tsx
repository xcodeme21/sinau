'use client'

import { useState } from 'react'
import {
  User,
  Lock,
  Mail,
  Phone,
  ArrowLeft,
  GraduationCap,
  BookOpen,
} from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import MobileInput from '@/components/MobileInput'
import Button from '@/components/Button'

const schema = z
  .object({
    fullName: z.string().min(3, 'Nama minimal 3 karakter'),
    email: z
      .string()
      .min(1, 'Email wajib diisi')
      .email('Format email tidak valid'),
    phone: z.string().min(10, 'Nomor telepon tidak valid'),
    password: z.string().min(6, 'Password minimal 6 karakter'),
    confirmPassword: z.string(),
    agreeToTerms: z.boolean().refine((val) => val === true, {
      message: 'Harus menyetujui syarat dan ketentuan',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Password tidak cocok',
    path: ['confirmPassword'],
  })

const variantMap: Record<'student' | 'teacher', 'primary' | 'success'> = {
  student: 'primary',
  teacher: 'success',
}

export default function RegisterPage() {
  const searchParams = useSearchParams()
  const typeParam = searchParams.get('type')
  const initialTab = typeParam === 'teacher' ? 'teacher' : 'student'
  const [activeTab, setActiveTab] = useState<'student' | 'teacher'>(initialTab)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      agreeToTerms: false,
    },
  })

  const onSubmit = (data: any) => {
    console.log('Register attempt:', { type: activeTab, ...data })
  }

  const agreeToTerms = watch('agreeToTerms')

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="w-full flex items-center h-16 px-4 bg-white shadow-sm fixed top-0 z-10">
        <Link href="/" className="p-2 -ml-2">
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </Link>
        <h1 className="text-lg font-bold text-gray-800 ml-2">Daftar Akun</h1>
      </header>

      <div className="flex w-full px-4 py-2 mt-16 bg-gray-100 rounded-full gap-1">
        <button
          onClick={() => setActiveTab('student')}
          className={`flex-1 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
            activeTab === 'student'
              ? 'bg-purple-500 text-white shadow-md'
              : 'text-gray-500 hover:bg-gray-200'
          } flex justify-center items-center gap-2`}>
          <GraduationCap className="w-4 h-4" /> Siswa
        </button>
        <button
          onClick={() => setActiveTab('teacher')}
          className={`flex-1 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
            activeTab === 'teacher'
              ? 'bg-green-500 text-white shadow-md'
              : 'text-gray-500 hover:bg-gray-200'
          } flex justify-center items-center gap-2`}>
          <BookOpen className="w-4 h-4" /> Tutor
        </button>
      </div>

      <main className="flex-1 overflow-y-auto px-4 pt-6 pb-24 space-y-4">
        <form
          id="registerForm"
          onSubmit={handleSubmit(onSubmit)}
          className="flex-1 overflow-y-auto px-4 pt-6 pb-24 space-y-4">
          <div>
            <MobileInput
              icon={<User className="w-5 h-5 text-gray-400" />}
              label="Nama Lengkap"
              placeholder={
                activeTab === 'student'
                  ? 'Masukkan nama kamu'
                  : 'Masukkan nama Tutor'
              }
              {...register('fullName')}
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.fullName.message}
              </p>
            )}
          </div>

          <div>
            <MobileInput
              icon={<Mail className="w-5 h-5 text-gray-400" />}
              type="email"
              label="Email"
              placeholder="email@example.com"
              {...register('email')}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <MobileInput
              icon={<Phone className="w-5 h-5 text-gray-400" />}
              type="tel"
              label="Nomor Telepon"
              placeholder="08xxxxxxxxxx"
              {...register('phone')}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div>
            <MobileInput
              icon={<Lock className="w-5 h-5 text-gray-400" />}
              type="password"
              label="Password"
              placeholder="••••••••"
              {...register('password')}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div>
            <MobileInput
              icon={<Lock className="w-5 h-5 text-gray-400" />}
              type="password"
              label="Konfirmasi Password"
              placeholder="••••••••"
              {...register('confirmPassword')}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <div className="flex items-start gap-3 px-1">
            <input
              type="checkbox"
              {...register('agreeToTerms')}
              className="mt-1 w-4 h-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
            />
            <label className="text-sm text-gray-600 leading-relaxed">
              Dengan mendaftar, saya menyetujui{' '}
              <button type="button" className="text-purple-600 font-medium">
                Syarat dan Ketentuan
              </button>{' '}
              serta{' '}
              <button type="button" className="text-purple-600 font-medium">
                Kebijakan Privasi
              </button>
            </label>
          </div>
          {errors.agreeToTerms && (
            <p className="text-red-500 text-sm mt-1">
              {errors.agreeToTerms.message}
            </p>
          )}

          <p className="text-center text-gray-500 text-sm mt-3">
            Sudah punya akun?{' '}
            <Link href="/" className="text-purple-500 font-bold">
              Masuk
            </Link>
          </p>
        </form>
      </main>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
        <Button
          type="submit"
          disabled={!agreeToTerms}
          variant={variantMap[activeTab]}>
          Daftar Sekarang
        </Button>
      </div>
    </div>
  )
}

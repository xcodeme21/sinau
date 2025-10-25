'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Mail, Lock, GraduationCap, BookOpen } from 'lucide-react'
import Link from 'next/link'
import { InputField } from '@/components/InputField'
import { Button } from '@/components/Button'
import { useRouter } from 'next/navigation'

const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'Email wajib diisi')
    .email('Format email tidak valid'),
  password: z.string().min(6, 'Password minimal 6 karakter'),
})

type FormData = z.infer<typeof loginSchema>

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<'student' | 'teacher'>('student')
  const [rememberMe, setRememberMe] = useState(false)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
  })

  const onSubmit = (data: FormData) => {
    console.log('Login attempt:', { type: activeTab, ...data, rememberMe })
    if (activeTab === 'student') {
      router.push('/student/dashboard')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div
        className={`w-full p-6 flex flex-col items-center ${
          activeTab === 'student' ? 'bg-purple-50' : 'bg-green-50'
        }`}>
        <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg mb-3">
          {activeTab === 'student' ? (
            <GraduationCap className="w-10 h-10 text-purple-500" />
          ) : (
            <BookOpen className="w-10 h-10 text-green-500" />
          )}
        </div>
        <h1 className="text-xl font-bold text-gray-800 text-center">
          Masuk sebagai {activeTab === 'student' ? 'Siswa' : 'Tutor'}
        </h1>
        <p className="text-gray-500 text-sm mt-1 text-center">
          Selamat datang kembali!
        </p>
      </div>

      <div className="flex w-full px-4 py-2 bg-gray-100 rounded-full gap-1 mt-2">
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

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex-1 overflow-y-auto px-4 pt-6 pb-24 space-y-4">
        <div>
          <InputField
            label={activeTab === 'student' ? 'Email Siswa' : 'Email Tutor'}
            icon={<Mail className="w-5 h-5 text-gray-400" />}
            placeholder={
              activeTab === 'student' ? 'Email Siswa' : 'Email Tutor'
            }
            {...register('email')}
            className={`w-full pl-12 pr-4 py-4 rounded-xl border ${
              errors.email ? 'border-red-400' : 'border-gray-200'
            } focus:border-purple-400 focus:ring-1 focus:ring-purple-300 outline-none text-gray-800`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1 ml-1">
              {errors.email.message}
            </p>
          )}
        </div>
        <div>
          <InputField
            label="Password"
            icon={<Lock className="w-5 h-5 text-gray-400" />}
            type="password"
            placeholder="••••••••"
            {...register('password')}
            className={`w-full pl-12 pr-4 py-4 rounded-xl border ${
              errors.password ? 'border-red-400' : 'border-gray-200'
            } focus:border-purple-400 focus:ring-1 focus:ring-purple-300 outline-none text-gray-800`}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1 ml-1">
              {errors.password.message}
            </p>
          )}
        </div>
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="mr-2 w-5 h-5 accent-purple-500"
            />
            Ingat saya
          </label>
          <Link
            href="/forgot-password"
            className="text-purple-500 font-semibold">
            Lupa password?
          </Link>
        </div>

        <div className="flex flex-col space-y-3 mt-4">
          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 py-3 rounded-xl bg-white border border-gray-200 text-gray-700 font-semibold shadow-sm hover:bg-gray-50 transition">
            <div className="w-6 h-6 flex items-center justify-center rounded-full overflow-hidden">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
            </div>
            Masuk dengan Google
          </button>
        </div>

        <div className="flex-shrink-0 ml-2">
          <Link
            href={`/register?type=${activeTab}`}
            className="text-purple-500 font-bold text-sm">
            Belum punya akun?
          </Link>
        </div>
      </form>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
        <Button
          onClick={handleSubmit(onSubmit)}
          disabled={!isValid}
          variant={activeTab}>
          Masuk
        </Button>
      </div>
    </div>
  )
}

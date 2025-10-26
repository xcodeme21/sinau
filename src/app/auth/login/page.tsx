'use client'

import { useState } from 'react'
import { GraduationCap } from 'lucide-react'
import { FcGoogle } from 'react-icons/fc'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm, useWatch } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import MobileInput from '@/components/MobileInput'
import Button from '@/components/Button'
import { SegmentedControl } from '@/components/ui/FormElements'

// --- Schema Zod ---
const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'Email wajib diisi')
    .email('Format email tidak valid'),
  password: z.string().min(6, 'Password minimal 6 karakter'),
})

type LoginFormData = z.infer<typeof loginSchema>

export default function LoginPage() {
  const router = useRouter()
  const [role, setRole] = useState<'student' | 'teacher'>('student')
  const [showPassword, setShowPassword] = useState(false)

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
    defaultValues: { email: '', password: '' },
  })

  const values = useWatch({ control }) // memantau nilai email & password
  const isDisabled = !values?.email || !values?.password

  const onSubmit = (data: LoginFormData) => {
    console.log('Login attempt:', { role, ...data })
    router.push(
      role === 'student' ? '/student/dashboard' : '/teacher/dashboard',
    )
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="h-12" />
      <div className="px-6 pt-4 pb-8">
        <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl flex items-center justify-center shadow-lg shadow-purple-500/20">
          <GraduationCap className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mt-6">Masuk</h1>
        <p className="text-gray-500 mt-1">Selamat datang kembali!</p>
      </div>

      <div className="flex-1 px-6 space-y-6">
        <SegmentedControl value={role} onChange={setRole} />

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <MobileInput
            placeholder="Email"
            type="email"
            autoFocus
            {...register('email')}
            error={errors.email?.message}
          />

          <MobileInput
            placeholder="Password"
            type="password"
            showPassword={showPassword}
            onTogglePassword={() => setShowPassword(!showPassword)}
            {...register('password')}
            error={errors.password?.message}
          />

          <Link
            href="/auth/forgot-password"
            className="text-sm font-semibold text-blue-600 active:text-blue-700 block mt-1">
            Lupa password?
          </Link>

          <Button
            type="submit"
            disabled={isDisabled}
            variant={role === 'student' ? 'primary' : 'success'}>
            Masuk
          </Button>
        </form>

        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="px-3 bg-white text-gray-400 font-medium">
              ATAU
            </span>
          </div>
        </div>

        <Button
          type="button"
          onClick={() => console.log('Google login')}
          className="flex items-center justify-center gap-2">
          <FcGoogle className="w-5 h-5" />
          Lanjutkan dengan Google
        </Button>
      </div>

      <div className="px-6 py-8 text-center">
        <p className="text-gray-500">
          Belum punya akun?{' '}
          <Link href="/auth/register" className="font-semibold text-gray-900">
            Daftar
          </Link>
        </p>
      </div>
    </div>
  )
}

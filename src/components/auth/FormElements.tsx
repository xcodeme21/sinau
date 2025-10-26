'use client'

import { Eye, EyeOff, GraduationCap, BookOpen } from 'lucide-react'
import React from 'react'

export const MobileInput = ({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  error,
  showPassword,
  onTogglePassword,
  autoFocus,
}: {
  label?: string
  placeholder?: string
  type?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
  showPassword?: boolean
  onTogglePassword?: () => void
  autoFocus?: boolean
}) => (
  <div className="space-y-1">
    {label && (
      <label className="block text-xs font-medium text-gray-500 px-1">
        {label}
      </label>
    )}
    <div className="relative">
      <input
        type={
          showPassword !== undefined
            ? showPassword
              ? 'text'
              : 'password'
            : type
        }
        placeholder={placeholder}
        value={value}
        autoFocus={autoFocus}
        onChange={onChange}
        className={`w-full px-4 py-4 bg-gray-50 border-0 rounded-2xl text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 ${
          error ? 'focus:ring-red-500' : 'focus:ring-blue-500'
        } transition-shadow`}
      />
      {onTogglePassword && (
        <button
          type="button"
          onClick={onTogglePassword}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 active:scale-95 transition-transform">
          {showPassword ? (
            <EyeOff className="w-5 h-5" />
          ) : (
            <Eye className="w-5 h-5" />
          )}
        </button>
      )}
    </div>
    {error && <p className="text-xs text-red-500 px-1">{error}</p>}
  </div>
)

export const PrimaryButton = ({
  children,
  onClick,
  disabled = false,
  variant = 'purple',
}: {
  children: React.ReactNode
  onClick: () => void
  disabled?: boolean
  variant?: 'purple' | 'green' | 'blue'
}) => {
  const colors = {
    purple: 'bg-purple-600 active:bg-purple-700',
    green: 'bg-emerald-600 active:bg-emerald-700',
    blue: 'bg-blue-600 active:bg-blue-700',
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full py-4 rounded-2xl text-base font-semibold text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed active:scale-[0.98] ${colors[variant]}`}>
      {children}
    </button>
  )
}

export const SecondaryButton = ({
  children,
  onClick,
  icon,
}: {
  children: React.ReactNode
  onClick: () => void
  icon?: React.ReactNode
}) => (
  <button
    onClick={onClick}
    className="w-full py-4 px-4 bg-white border border-gray-200 rounded-2xl text-base font-medium text-gray-900 active:bg-gray-50 active:scale-[0.98] transition-all flex items-center justify-center gap-3">
    {icon}
    {children}
  </button>
)

export const SegmentedControl = ({
  value,
  onChange,
}: {
  value: 'student' | 'teacher'
  onChange: (val: 'student' | 'teacher') => void
}) => (
  <div className="flex p-1 bg-gray-100 rounded-2xl">
    <button
      onClick={() => onChange('student')}
      className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
        value === 'student'
          ? 'bg-white text-gray-900 shadow-sm'
          : 'text-gray-500'
      }`}>
      <GraduationCap className="w-4 h-4" />
      Siswa
    </button>
    <button
      onClick={() => onChange('teacher')}
      className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
        value === 'teacher'
          ? 'bg-white text-gray-900 shadow-sm'
          : 'text-gray-500'
      }`}>
      <BookOpen className="w-4 h-4" />
      Tutor
    </button>
  </div>
)

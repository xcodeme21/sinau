'use client'

import React from 'react'
import { Eye, EyeOff } from 'lucide-react'

interface MobileInputProps {
  label?: string
  type?: string
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
  showPassword?: boolean
  onTogglePassword?: () => void
  autoFocus?: boolean
  icon?: React.ReactNode
  [x: string]: any
}

const MobileInput: React.FC<MobileInputProps> = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  showPassword,
  onTogglePassword,
  autoFocus = false,
  icon,
  ...rest
}) => {
  const inputType =
    showPassword !== undefined ? (showPassword ? 'text' : 'password') : type

  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-xs font-medium text-gray-500 px-1">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
        <input
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoFocus={autoFocus}
          {...rest}
          className={`w-full ${icon ? 'pl-12' : 'px-4'} py-4 bg-gray-50 border-0 rounded-2xl text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 ${
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
}

export default MobileInput

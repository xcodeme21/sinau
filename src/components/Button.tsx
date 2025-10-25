'use client'

import { forwardRef, ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'student' | 'teacher'
  loading?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'student',
      loading = false,
      disabled,
      className = '',
      children,
      ...props
    },
    ref,
  ) => {
    const baseClasses =
      'w-full py-3.5 rounded-xl text-white font-semibold text-base transition-all disabled:cursor-not-allowed'

    const colorClasses = disabled
      ? 'bg-gray-300'
      : variant === 'student'
        ? 'bg-purple-500 active:bg-purple-600'
        : 'bg-green-500 active:bg-green-600'

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={`${baseClasses} ${colorClasses} ${className}`}
        {...props}>
        {loading ? 'Memuat...' : children}
      </button>
    )
  },
)

Button.displayName = 'Button'

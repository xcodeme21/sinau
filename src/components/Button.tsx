'use client'

import React from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  variant?: 'primary' | 'success' | 'info' | 'outline'
  icon?: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  className?: string
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  variant = 'primary',
  icon,
  type = 'button',
  className = '',
}) => {
  const variants: Record<string, string> = {
    primary: 'bg-purple-600 active:bg-purple-700 text-white',
    success: 'bg-emerald-600 active:bg-emerald-700 text-white',
    info: 'bg-blue-600 active:bg-blue-700 text-white',
    outline: 'bg-white border border-gray-200 text-gray-900 active:bg-gray-50',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={twMerge(
        'w-full py-4 rounded-2xl text-base font-semibold transition-all active:scale-[0.98]',
        'disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-3',
        variants[variant],
        className,
      )}>
      {icon}
      {children}
    </button>
  )
}

export default Button

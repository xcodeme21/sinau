'use client'

import React from 'react'
import { GraduationCap, BookOpen } from 'lucide-react'

interface SegmentedControlProps {
  value: 'student' | 'teacher'
  onChange: (value: 'student' | 'teacher') => void
}

const SegmentedControl: React.FC<SegmentedControlProps> = ({
  value,
  onChange,
}) => {
  return (
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
}

export default SegmentedControl

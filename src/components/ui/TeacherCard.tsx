'use client'

import React from 'react'
import { Star, MapPin, Clock, Share2, Heart } from 'lucide-react'

interface Teacher {
  id: number
  name: string
  subject: string
  rating: number
  reviews: string
  price: string
  image: string
  discount?: string
  location: string
  schedule: string
}

interface TeacherCardProps {
  teacher: Teacher
}

export default function TeacherCard({ teacher }: TeacherCardProps) {
  return (
    <div className="group bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-100 transition-all duration-200 flex gap-4 items-center">
      {/* Image */}
      <div className="relative flex-shrink-0">
        <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-3xl shadow-inner">
          {teacher.image}
        </div>
        {teacher.discount && (
          <div className="absolute -top-1 -left-1 bg-red-500 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded-tr-lg rounded-bl-lg shadow-sm">
            {teacher.discount}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0 flex flex-col justify-between">
        <div>
          <h4 className="font-semibold text-sm text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-1">
            {teacher.name}
          </h4>
          <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5 line-clamp-1">
            ⚡ {teacher.subject}
          </p>

          <div className="flex items-center gap-2 mt-1.5">
            <div className="flex items-center gap-1">
              <Star size={12} className="text-yellow-400 fill-yellow-400" />
              <span className="text-xs font-medium text-gray-700">
                {teacher.rating}
              </span>
              <span className="text-[11px] text-gray-400">
                ({teacher.reviews})
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
            <MapPin size={12} className="text-gray-400" />
            <span className="truncate">{teacher.location}</span>
          </div>

          <div className="flex items-center gap-1 text-xs text-gray-500 mt-0.5">
            <Clock size={12} className="text-gray-400" />
            <span className="truncate">{teacher.schedule}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-3">
          <div>
            <span className="text-base font-bold text-blue-600">
              Rp {teacher.price}
            </span>
            <span className="text-xs text-gray-500"> /jam</span>
          </div>
          <div className="flex gap-2">
            <button className="p-1.5 rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-200 transition-all">
              <Share2 size={16} className="text-gray-600" />
            </button>
            <button className="p-1.5 rounded-lg border border-gray-200 hover:bg-pink-50 hover:border-pink-200 transition-all">
              <Heart
                size={16}
                className="text-gray-600 group-hover:text-pink-500"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

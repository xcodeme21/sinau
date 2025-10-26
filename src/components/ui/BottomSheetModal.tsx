'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import React from 'react'

interface BottomSheetModalProps {
  show: boolean
  title?: string
  onClose: () => void
  children: React.ReactNode
}

export default function BottomSheetModal({
  show,
  title,
  onClose,
  children,
}: BottomSheetModalProps) {
  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Background overlay */}
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Bottom sheet */}
          <motion.div
            className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl shadow-xl p-5 pb-8 min-h-[50vh] max-h-[90vh] overflow-y-auto"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', stiffness: 220, damping: 25 }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            onDragEnd={(e, info) => {
              if (info.offset.y > 100) onClose()
            }}>
            {/* Handle Bar */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1 rounded-full bg-gray-300" />

            {/* Header */}
            <div className="flex items-center justify-between mb-4 mt-4">
              <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100 transition">
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="space-y-3">{children}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

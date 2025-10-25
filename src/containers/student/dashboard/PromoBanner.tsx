'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, PanInfo } from 'framer-motion'
import Image from 'next/image'

interface Promo {
  img: string
  url: string
}

const promos: Promo[] = [
  { img: '/banner.png', url: 'https://www.sinau.com/promo1' },
  { img: '/banner1.png', url: 'https://www.sinau.com/promo2' },
  { img: '/banner2.png', url: 'https://www.sinau.com/promo3' },
]

export default function PromoBanner() {
  const [current, setCurrent] = useState(0)

  // Slide otomatis
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % promos.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Swipe handler
  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    if (info.offset.x < -50) {
      // swipe kiri → next
      setCurrent((prev) => (prev + 1) % promos.length)
    } else if (info.offset.x > 50) {
      // swipe kanan → prev
      setCurrent((prev) => (prev - 1 + promos.length) % promos.length)
    }
  }

  return (
    <div className="relative mb-6 w-full h-32 rounded-3xl overflow-hidden shadow-lg">
      <AnimatePresence initial={false}>
        <motion.a
          key={current}
          href={promos[current].url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full block relative cursor-pointer"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}>
          <Image
            src={promos[current].img}
            alt={`Promo ${current + 1}`}
            fill
            className="object-cover rounded-3xl"
          />
        </motion.a>
      </AnimatePresence>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
        {promos.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2 h-2 rounded-full ${
              current === idx ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

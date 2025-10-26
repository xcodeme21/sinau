'use client'

import { useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
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
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      containScroll: 'trimSnaps',
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })],
  )

  const scrollTo = (index: number) => {
    if (emblaApi) emblaApi.scrollTo(index)
  }

  // Update selected index when slide changes
  if (emblaApi) {
    emblaApi.on('select', () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    })
  }

  return (
    <div className="relative w-full mb-6">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4 px-5">
          {promos.map((promo, index) => (
            <div key={index} className="flex-[0_0_85%] min-w-0">
              <a
                href={promo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-40 rounded-3xl overflow-hidden shadow-xl relative">
                <Image
                  src={promo.img}
                  alt={`Promo ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-1.5 mt-3">
        {promos.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollTo(idx)}
            className={`h-1.5 rounded-full transition-all ${
              selectedIndex === idx ? 'bg-gray-800 w-6' : 'bg-gray-300 w-1.5'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

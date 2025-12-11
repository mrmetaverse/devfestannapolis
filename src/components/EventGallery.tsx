'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface GalleryImage {
  src: string
  alt: string
  width: number
  height: number
}

const galleryImages: GalleryImage[] = [
  { src: '/images/devfest2025/1.jpg', alt: 'DevFest 2025 Volunteers', width: 1600, height: 1067 },
  { src: '/images/devfest2025/2.jpg', alt: 'Brady Cusack gives his presentation', width: 1600, height: 1067 },
  { src: '/images/devfest2025/3.jpg', alt: 'DevFest volunteers at the welcome desk', width: 1600, height: 1067 },
  { src: '/images/devfest2025/4.jpg', alt: 'Organizers Dennis Chen and Mary Cubbage', width: 1600, height: 1067 },
  { src: '/images/devfest2025/5.jpg', alt: 'Norbert Kremer talking to Dev Fest attendees', width: 1600, height: 1067 },
  { src: '/images/devfest2025/6.jpg', alt: 'Roya Kandalan giving her presentation at DevFest Annapolis 2025', width: 1600, height: 1067 },
  { src: '/images/devfest2025/7.jpg', alt: 'DevFest attendees at the Gemini CLI coding lab', width: 1600, height: 1067 },
  { src: '/images/devfest2025/8.jpg', alt: 'DevFest attendees watching a remote speaker', width: 1600, height: 1067 },
  { src: '/images/devfest2025/9.jpg', alt: 'Refreshements table', width: 1600, height: 1067 },
  { src: '/images/devfest2025/10.jpg', alt: 'Guests arriving at the check-in table', width: 1600, height: 1067 },
  { src: '/images/devfest2025/11.jpg', alt: 'Coffee and lunch compliments of our sponsors', width: 1600, height: 1067 },
  { src: '/images/devfest2025/12.jpg', alt: 'Norbert Kremer posing with DevFest attendees', width: 1600, height: 1067 },
  { src: '/images/devfest2025/13.jpg', alt: 'Michael Perry of Perry Labs gives his talk', width: 1600, height: 1067 },
  { src: '/images/devfest2025/14.jpg', alt: 'Organizer Sameer Rao under the even display showing the organizers', width: 1600, height: 1067 },
  { src: '/images/devfest2025/15.jpg', alt: 'A few DevFest volunteers', width: 1600, height: 1067 },
  { src: '/images/devfest2025/16.jpg', alt: 'Attendees listen intently to one of the DevFest 2025 presentations', width: 1600, height: 1067 },
  { src: '/images/devfest2025/17.jpg', alt: 'Mark Farmer gives his presentation', width: 1600, height: 1067 },
  { src: '/images/devfest2025/18.jpg', alt: 'DevFest organizers and presenters', width: 1600, height: 1067 },
  { src: '/images/devfest2025/19.jpg', alt: 'DevFest volunteers and presenters', width: 1600, height: 1067 },
  { src: '/images/devfest2025/20.jpg', alt: 'Hanging out in the atrium', width: 1600, height: 1067 },
]

export default function EventGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [imageLoading, setImageLoading] = useState(true)

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
    setImageLoading(true)
    document.body.style.overflow = 'hidden'
  }

  // Lazy preload all images when lightbox is open
  useEffect(() => {
    if (!lightboxOpen) return

    // Lazy preload all images with a small delay to not block initial render
    const preloadImages = () => {
      galleryImages.forEach((image, index) => {
        // Skip the current image as it's already loading
        if (index === currentImageIndex) return
        
        // Use setTimeout to lazy load with small delays
        setTimeout(() => {
          const img = new window.Image()
          img.src = image.src
        }, index * 50) // Stagger by 50ms to avoid blocking
      })
    }

    // Start preloading after a short delay
    const timeoutId = setTimeout(preloadImages, 100)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [lightboxOpen, currentImageIndex])

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false)
    document.body.style.overflow = ''
  }, [])

  const goToNext = useCallback(() => {
    setImageLoading(true)
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
  }, [])

  const goToPrevious = useCallback(() => {
    setImageLoading(true)
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }, [])

  // Keyboard navigation
  useEffect(() => {
    if (!lightboxOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') goToNext()
      if (e.key === 'ArrowLeft') goToPrevious()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxOpen, closeLightbox, goToNext, goToPrevious])

  return (
    <>
      {/* Gallery Section */}
      <div className="mt-12">
        <div className="text-center mb-8">
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Highlights from DevFest Annapolis 2025
          </h3>
          {/* Paragraph commented out */}
          {/*
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Relive the amazing moments, inspiring talks, and vibrant community that made this event unforgettable.
          </p>
          */}
        </div>

        {/* Responsive Grid Gallery */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className={`
                relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 
                ${prefersReducedMotion ? '' : 'transition-transform duration-300'} 
                hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2
                cursor-pointer group
              `}
              aria-label={`View larger: ${image.alt}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 475px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className={`
                  object-cover 
                  ${prefersReducedMotion ? '' : 'transition-transform duration-300 group-hover:scale-105'}
                `}
                loading="lazy"
              />
              {/* Overlay on hover */}
              <div className={`
                absolute inset-0 bg-black/0 ${prefersReducedMotion ? '' : 'transition-colors duration-300'} 
                group-hover:bg-black/20 group-focus:bg-black/20
              `} />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery lightbox"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 p-2 text-white hover:text-gray-300 focus:outline-none focus:ring-4 focus:ring-white/50 rounded-full bg-black/50 backdrop-blur-sm transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              goToPrevious()
            }}
            className="absolute left-4 z-50 p-2 text-white hover:text-gray-300 focus:outline-none focus:ring-4 focus:ring-white/50 rounded-full bg-black/50 backdrop-blur-sm transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
            className="absolute right-4 z-50 p-2 text-white hover:text-gray-300 focus:outline-none focus:ring-4 focus:ring-white/50 rounded-full bg-black/50 backdrop-blur-sm transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Image Container */}
          <div
            className="relative w-full max-w-5xl max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[70vh]">
              {/* Loading Spinner */}
              {imageLoading && (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                </div>
              )}
              <Image
                src={galleryImages[currentImageIndex].src}
                alt={galleryImages[currentImageIndex].alt}
                fill
                className={`object-contain transition-opacity duration-300 ${
                  imageLoading ? 'opacity-0' : 'opacity-100'
                }`}
                sizes="100vw"
                priority
                onLoad={() => setImageLoading(false)}
                onLoadingComplete={() => setImageLoading(false)}
              />
            </div>
            
            {/* Image Caption */}
            <div className="mt-4 text-center">
              <p className="text-white text-lg">
                {galleryImages[currentImageIndex].alt}
              </p>
              <p className="text-gray-400 text-sm mt-2">
                {currentImageIndex + 1} / {galleryImages.length}
              </p>
            </div>
          </div>

          {/* Exit Button - Prominent button at bottom */}
          <button
            onClick={closeLightbox}
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-50 px-4 py-2 bg-white/90 hover:bg-white text-gray-900 rounded-full font-semibold text-base shadow-lg focus:outline-none focus:ring-4 focus:ring-white/50 transition-all duration-200 flex items-center gap-2"
            aria-label="Exit gallery"
          >
            <X className="w-4 h-4" />
            Exit Gallery
          </button>
        </div>
      )}
    </>
  )
}


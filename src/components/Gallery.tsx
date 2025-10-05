import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Play, Pause } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { galleryImages, getImagesByCategory, getCategoryLabel, GalleryImage } from '../data/galleryImages';

const Gallery: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<GalleryImage['category'] | 'all'>('all');
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Filtrované obrázky podle kategorie
  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : getImagesByCategory(selectedCategory);

  // Auto-play funkce
  useEffect(() => {
    if (!isAutoPlay || filteredImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay, filteredImages.length]);

  // Navigace kolotoče
  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Lightbox funkce
  const openLightbox = (imageSrc: string) => {
    setLightboxImage(imageSrc);
    setIsAutoPlay(false);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    setIsAutoPlay(true);
  };

  // Reset indexu při změně kategorie
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory]);

  if (filteredImages.length === 0) {
    return (
      <section id="gallery" className="py-20 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-neutral-600 dark:text-neutral-300">Žádné obrázky v této kategorii.</p>
        </div>
      </section>
    );
  }

  const currentImage = filteredImages[currentIndex];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-800">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400 text-sm font-inter font-medium mb-4">
              Galerie
            </span>
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-neutral-800 dark:text-white mb-6">
              Naše
              <span className="block text-primary-600 dark:text-primary-400">práce</span>
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto font-inter leading-relaxed">
              Podívejte se na výsledky naší práce a nechte se inspirovat pro svou další návštěvu.
            </p>
          </div>

          {/* Carousel Container */}
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-700">
              
              {/* Main Image */}
              <div className="relative h-96 md:h-[500px] overflow-hidden">
                <img
                  src={currentImage.src}
                  alt={currentImage.alt}
                  className="w-full h-full object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
                  onClick={() => openLightbox(currentImage.src)}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                {/* Navigation Arrows */}
                {filteredImages.length > 1 && (
                  <>
                    <button
                      onClick={goToPrevious}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300 group"
                    >
                      <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                    </button>
                    <button
                      onClick={goToNext}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300 group"
                    >
                      <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </>
                )}

                {/* Auto-play Control */}
                {filteredImages.length > 1 && (
                  <button
                    onClick={() => setIsAutoPlay(!isAutoPlay)}
                    className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                  >
                    {isAutoPlay ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  </button>
                )}

                {/* Image Info */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-playfair font-bold text-xl text-white mb-1">
                    {currentImage.title}
                  </h3>
                  <p className="text-white/80 font-inter text-sm">
                    {currentImage.description}
                  </p>
                </div>
              </div>

              {/* Thumbnails */}
              {filteredImages.length > 1 && (
                <div className="p-4 bg-neutral-50 dark:bg-neutral-900">
                  <div className="flex space-x-2 overflow-x-auto pb-2">
                    {filteredImages.map((image, index) => (
                      <button
                        key={image.id}
                        onClick={() => goToSlide(index)}
                        className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                          index === currentIndex
                            ? 'border-primary-500 scale-110'
                            : 'border-transparent hover:border-primary-300'
                        }`}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Progress Indicators */}
              {filteredImages.length > 1 && (
                <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {filteredImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? 'bg-white scale-125'
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
              <h3 className="font-playfair font-bold text-2xl md:text-3xl text-neutral-800 dark:text-white mb-6">
                Líbí se vám naše práce?
              </h3>
              <p className="text-lg text-neutral-600 dark:text-neutral-300 font-inter leading-relaxed mb-8">
                Objednejte se a nechte si vytvořit svůj vlastní jedinečný účes v našem studiu.
              </p>
              <button
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-full font-inter font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                Objednat se na termín
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={lightboxImage}
              alt="Galerie"
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
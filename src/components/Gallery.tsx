import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Eye } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { galleryData, GalleryItem } from '../data/galleryData';

const Gallery: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();
  const [activeTab, setActiveTab] = useState(galleryData[0].id);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showBefore, setShowBefore] = useState(true);

  const activeSection = galleryData.find(section => section.id === activeTab);

  const openLightbox = (imageUrl: string, index: number) => {
    setLightboxImage(imageUrl);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (!activeSection) return;
    
    const newIndex = direction === 'next' 
      ? (currentImageIndex + 1) % activeSection.items.length
      : (currentImageIndex - 1 + activeSection.items.length) % activeSection.items.length;
    
    setCurrentImageIndex(newIndex);
    const currentItem = activeSection.items[newIndex];
    setLightboxImage(showBefore ? currentItem.before : currentItem.after);
  };

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
              Před & Po
              <span className="block text-primary-600 dark:text-primary-400">transformacích</span>
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto font-inter leading-relaxed">
              Podívejte se na úžasné proměny našich klientek. Každá fotografie vypráví příběh 
              o cestě k větší sebedůvěře a kráse.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-2 shadow-lg border border-neutral-200 dark:border-neutral-700">
              <div className="flex space-x-2">
                {galleryData.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveTab(section.id)}
                    className={`px-6 py-3 rounded-xl font-inter font-medium transition-all duration-300 ${
                      activeTab === section.id
                        ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg'
                        : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700'
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Gallery Grid */}
          {activeSection && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {activeSection.items.map((item, index) => (
                <div key={item.id} className="group relative">
                  <div className="bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-neutral-200 dark:border-neutral-700">
                    {/* Before/After Images */}
                    <div className="relative h-64 overflow-hidden">
                      <div className="flex h-full">
                        <div className="w-1/2 relative">
                          <img
                            src={item.before}
                            alt={`${item.title} - před`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-lg text-xs font-inter font-medium">
                            PŘED
                          </div>
                        </div>
                        <div className="w-1/2 relative border-l-2 border-white">
                          <img
                            src={item.after}
                            alt={`${item.title} - po`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-lg text-xs font-inter font-medium">
                            PO
                          </div>
                        </div>
                      </div>
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="flex space-x-3">
                          <button
                            onClick={() => openLightbox(item.before, index)}
                            className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                          >
                            <Eye className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="font-playfair font-bold text-lg text-neutral-800 dark:text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-300 font-inter text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
              <h3 className="font-playfair font-bold text-2xl md:text-3xl text-neutral-800 dark:text-white mb-6">
                Staňte se další úspěšnou transformací
              </h3>
              <p className="text-lg text-neutral-600 dark:text-neutral-300 font-inter leading-relaxed mb-8">
                Každá klientka je jedinečná a my se těšíme na to, až budeme moci vytvořit vaši vlastní 
                úžasnou proměnu. Objednejte se ještě dnes!
              </p>
              <button
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-full font-inter font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                Začít moji transformaci
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation */}
            <button
              onClick={() => navigateLightbox('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => navigateLightbox('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <img
              src={lightboxImage}
              alt="Galerie"
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />

            {/* Toggle Button */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              <button
                onClick={() => {
                  setShowBefore(true);
                  setLightboxImage(activeSection!.items[currentImageIndex].before);
                }}
                className={`px-4 py-2 rounded-lg font-inter font-medium transition-colors ${
                  showBefore
                    ? 'bg-red-500 text-white'
                    : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
                }`}
              >
                Před
              </button>
              <button
                onClick={() => {
                  setShowBefore(false);
                  setLightboxImage(activeSection!.items[currentImageIndex].after);
                }}
                className={`px-4 py-2 rounded-lg font-inter font-medium transition-colors ${
                  !showBefore
                    ? 'bg-green-500 text-white'
                    : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
                }`}
              >
                Po
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
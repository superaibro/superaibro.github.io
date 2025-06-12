"use client";

import { useState, useEffect, useCallback } from 'react';
import { Maximize2 } from 'lucide-react';

// Типы данных
interface Slide {
  imgSrc: string;
  title: string;
}

interface ProjectPresentationProps {
  slides: Slide[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showThumbnails?: boolean;
  enableFullscreen?: boolean;
}

export default function ProjectPresentation({ 
  slides, 
  autoPlay = false, 
  autoPlayInterval = 5000,
  showThumbnails = true,
  enableFullscreen = true
}: ProjectPresentationProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // Обработка автопроигрывания
  useEffect(() => {
    if (!isPlaying || slides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => prev === slides.length - 1 ? 0 : prev + 1);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isPlaying, slides.length, autoPlayInterval]);

  // Обработка клавиатуры
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft':
          handlePrev();
          break;
        case 'ArrowRight':
          handleNext();
          break;
        case ' ':
          e.preventDefault();
          setIsPlaying(prev => !prev);
          break;
        case 'Escape':
          setIsFullscreen(false);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  // Обработка полноэкранного режима
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Создаем демо слайды если нет данных
  const demoSlides = [
    {
      imgSrc: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><rect width="800" height="600" fill="%23f0f0f0"/><rect x="150" y="100" width="100" height="150" fill="%2300c896"/><rect x="300" y="150" width="100" height="100" fill="%2300c896"/><rect x="450" y="80" width="100" height="120" fill="%23ff4757"/><rect x="600" y="90" width="100" height="160" fill="%2300c896"/><path d="M100 500 L200 450 L300 480 L400 420 L500 460 L600 400 L700 440" stroke="%23333" stroke-width="3" fill="none"/></svg>',
      title: 'Заголовок слайда 1'
    },
    {
      imgSrc: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><rect width="800" height="600" fill="%23e8e8e8"/><circle cx="200" cy="200" r="80" fill="%2300c896"/><circle cx="400" cy="300" r="60" fill="%23ff4757"/><circle cx="600" cy="250" r="90" fill="%2300c896"/><rect x="100" y="400" width="600" height="50" fill="%23333"/></svg>',
      title: 'Заголовок слайда 2'
    },
    {
      imgSrc: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><rect width="800" height="600" fill="%23f5f5f5"/><rect x="50" y="100" width="80" height="80" fill="%2300c896"/><rect x="150" y="100" width="80" height="80" fill="%2300c896"/><rect x="250" y="100" width="80" height="80" fill="%23ff4757"/><rect x="350" y="100" width="80" height="80" fill="%2300c896"/><path d="M100 300 Q200 250 300 300 T500 300 T700 280" stroke="%23333" stroke-width="4" fill="none"/></svg>',
      title: 'Заголовок слайда 3'
    }
  ];

  const slidesToUse = slides && slides.length > 0 ? slides : demoSlides;

  if (!slidesToUse || slidesToUse.length === 0) {
    return (
      <div className="w-full h-96 flex items-center justify-center bg-gray-100 rounded-lg">
        <p className="text-gray-500 text-lg">Нет слайдов для отображения</p>
      </div>
    );
  }

  const handlePrev = useCallback(() => {
    const newIndex = currentIndex === 0 ? slidesToUse.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slidesToUse.length]);

  const handleNext = useCallback(() => {
    const newIndex = currentIndex === slidesToUse.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slidesToUse.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
  };

  const toggleFullscreen = async () => {
    if (!enableFullscreen) return;

    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.error('Ошибка при переключении полноэкранного режима:', error);
    }
  };

  const currentSlide = slidesToUse[currentIndex];

  return (
    <div className={`w-full mx-auto ${isFullscreen ? 'fixed inset-0 z-50 bg-black' : ''}`}>
      {/* Основной слайдер */}
      <div className={`relative ${isFullscreen ? 'h-screen' : 'h-96 md:h-[500px] lg:h-[600px]'} rounded-lg overflow-hidden group flex items-center justify-center`}>
        
        {/* Изображение */}
        <div 
          className="relative h-full max-w-full"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <img
            src={currentSlide.imgSrc}
            alt={currentSlide.title}
            className="h-full w-auto object-contain transition-opacity duration-300"
            onLoad={() => setIsLoading(false)}
            onLoadStart={() => setIsLoading(true)}
            onError={() => setIsLoading(false)}
          />
          
          {/* Невидимые области для клика */}
          <div 
            className="absolute left-0 top-0 w-1/2 h-full cursor-pointer z-10"
            onClick={handlePrev}
            aria-label="Предыдущий слайд"
          />
          <div 
            className="absolute right-0 top-0 w-1/2 h-full cursor-pointer z-10"
            onClick={handleNext}
            aria-label="Следующий слайд"
          />
          
          {/* Индикатор загрузки */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>
          )}

          {/* Кнопка полноэкранного режима - теперь всегда видимая */}
          {enableFullscreen && (
            <button
              onClick={toggleFullscreen}
              className="absolute top-4 right-4 p-2 bg-gray-600/80 text-white rounded-full hover:bg-gray-700/90 transition-all duration-300 z-20 backdrop-blur-sm"
              aria-label="Полный экран"
            >
              <Maximize2 size={20} />
            </button>
          )}
          
          {/* Заголовок поверх изображения */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 md:p-6">
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white">
              {currentSlide.title}
            </h3>
          </div>
        </div>

        {/* Индикаторы прогресса */}
        <div className="absolute bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
          {slidesToUse.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Перейти к слайду ${index + 1}`}
            />
          ))}
        </div>

        {/* Прогресс бар для автопроигрывания */}
        {isPlaying && (
          <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20">
            <div 
              className="h-full bg-blue-500 transition-all duration-100"
              style={{
                width: `${((currentIndex + 1) / slidesToUse.length) * 100}%`
              }}
            />
          </div>
        )}
      </div>

      {/* Миниатюры */}
      {showThumbnails && slidesToUse.length > 1 && !isFullscreen && (
        <div className="mt-4 flex justify-center">
          <div className="flex gap-2 overflow-x-auto pb-2 max-w-full">
            {slidesToUse.map((slide, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`flex-shrink-0 w-16 h-12 md:w-20 md:h-14 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  currentIndex === index 
                    ? 'border-blue-500 scale-105' 
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <img
                  src={slide.imgSrc}
                  alt={`Миниатюра ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
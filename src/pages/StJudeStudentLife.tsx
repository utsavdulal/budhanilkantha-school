import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useData, type GalleryItem } from '../context/DataContext';

export default function StJudeStudentLife() {
  const { gallery } = useData();

  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);

  const openLightbox = (item: GalleryItem) => {
    setSelectedItem(item);
    setActivePhotoIndex(0);
  };

  const closeLightbox = () => {
    setSelectedItem(null);
    setActivePhotoIndex(0);
  };

  const currentImages = selectedItem
    ? selectedItem.images && selectedItem.images.length > 0
      ? selectedItem.images
      : [selectedItem.image]
    : [];

  const handlePrevPhoto = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActivePhotoIndex((prev) => (prev > 0 ? prev - 1 : currentImages.length - 1));
  }, [currentImages.length]);

  const handleNextPhoto = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActivePhotoIndex((prev) => (prev < currentImages.length - 1 ? prev + 1 : 0));
  }, [currentImages.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!selectedItem) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        handlePrevPhoto();
      } else if (e.key === 'ArrowRight') {
        handleNextPhoto();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem, handlePrevPhoto, handleNextPhoto]);

  return (
    <div className="min-h-screen bg-surface font-body-md text-body-md text-on-surface antialiased selection:bg-tertiary-fixed selection:text-tertiary">
      <Navbar />

      <main className="w-full pt-18 sm:pt-20 bg-surface">
        {/* 1. INSPIRATION BANNER: LIFE AT BUDHANILKANTHA */}
        <section className="w-full bg-surface py-6 sm:py-8 lg:py-10">
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="relative rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-md overflow-hidden min-h-[300px] md:min-h-[360px] lg:min-h-[400px] flex flex-col md:flex-row items-stretch">
              
              {/* Left Side: Typography & Framed Title */}
              <div className="w-full md:w-[48%] p-6 sm:p-10 lg:p-14 flex items-center justify-center relative z-10 bg-surface-container-lowest">
                {/* Subtle Decorative Golden Frame in Top Left */}
                <div className="absolute top-6 left-6 w-16 h-16 border-t-2 border-l-2 border-amber-400/50 rounded-tl-lg pointer-events-none hidden sm:block" />

                <div className="py-4 text-center md:text-left">
                  <h1 className="font-display-hero text-3xl sm:text-4xl lg:text-[46px] uppercase font-bold tracking-tight text-[#d49e24] font-serif leading-tight">
                    LIFE AT BUDHANILKANTHA
                  </h1>
                </div>
              </div>

              {/* Right Side: Diagonally Clipped Campus Photo with Seamless White Background */}
              <div className="w-full md:w-[52%] relative min-h-[260px] md:min-h-[360px] lg:min-h-[400px] overflow-hidden bg-surface-container-lowest">
                <div
                  className="absolute inset-0 bg-cover bg-center md:[clip-path:polygon(14%_0,100%_0,100%_100%,0%_100%)] transform duration-700 hover:scale-105"
                  style={{ backgroundImage: `url('/images/why-community.jpg')` }}
                />
              </div>

            </div>
          </div>
        </section>

        {/* 2. EDITORIAL PHOTO GRID GALLERY (INSPIRED BY REFERENCE LAYOUT) */}
        <section className="w-full bg-surface py-8 sm:py-12 lg:py-16">
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="grid grid-cols-12 gap-3.5 sm:gap-4 lg:gap-5">
              {gallery.map((item, index) => {
                const mod = index % 6;
                const spanClass =
                  mod === 0
                    ? 'col-span-12 md:col-span-3'
                    : mod === 1
                    ? 'col-span-12 md:col-span-5'
                    : mod === 2
                    ? 'col-span-12 md:col-span-4'
                    : mod === 3
                    ? 'col-span-12 md:col-span-5'
                    : mod === 4
                    ? 'col-span-12 md:col-span-4'
                    : 'col-span-12 md:col-span-3';

                const photoCount = (item.images && item.images.length > 0) ? item.images.length : 1;

                return (
                  <div
                    key={item.id}
                    onClick={() => openLightbox(item)}
                    className={`${spanClass} group relative rounded-sm overflow-hidden bg-surface-container shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer h-72 sm:h-80 md:h-[320px] lg:h-[340px]`}
                  >
                    {/* Full-bleed Photo */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Subtle Soft Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent transition-opacity" />

                    {/* Multi-Photo Count Badge */}
                    {photoCount > 1 && (
                      <div className="absolute top-3.5 right-3.5 z-10">
                        <span className="bg-black/60 backdrop-blur-md text-white font-label-caps text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-sm font-semibold flex items-center gap-1 shadow-sm">
                          <span className="material-symbols-outlined text-[13px]">photo_library</span>
                          <span>{photoCount}</span>
                        </span>
                      </div>
                    )}

                    {/* Minimalist Bottom Left Title */}
                    <div className="absolute bottom-4 left-5 right-5 z-10">
                      <h3 className="text-white text-base sm:text-[17px] font-sans font-normal tracking-wide drop-shadow-sm leading-snug">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3. LIGHTBOX / MULTI-PHOTO PREVIEW MODAL */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 md:p-8 animate-fadeIn"
            onClick={closeLightbox}
          >
            <div
              className="bg-surface-container-lowest max-w-5xl w-full rounded-2xl overflow-hidden shadow-2xl border border-outline-variant/30 flex flex-col md:flex-row relative max-h-[92vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={closeLightbox}
                className="absolute top-3 right-3 z-30 w-10 h-10 rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center transition-colors cursor-pointer shadow-lg"
                title="Close Lightbox (Esc)"
              >
                <span className="material-symbols-outlined text-[22px]">close</span>
              </button>

              {/* Left/Main Column: Image Viewer + Carousel & Thumbnails */}
              <div className="md:w-3/5 bg-black flex flex-col justify-between relative select-none">
                {/* Image Stage */}
                <div className="relative flex-1 flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[420px] max-h-[540px] bg-black">
                  <img
                    src={currentImages[activePhotoIndex] || selectedItem.image}
                    alt={`${selectedItem.title} - photo ${activePhotoIndex + 1}`}
                    className="w-full h-full object-contain transition-all duration-300"
                  />

                  {/* Prev / Next Carousel Controls (if multi-image) */}
                  {currentImages.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={handlePrevPhoto}
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm shadow-md hover:scale-110"
                        title="Previous photo (Left arrow)"
                      >
                        <span className="material-symbols-outlined text-[24px]">chevron_left</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleNextPhoto}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm shadow-md hover:scale-110"
                        title="Next photo (Right arrow)"
                      >
                        <span className="material-symbols-outlined text-[24px]">chevron_right</span>
                      </button>

                      {/* Photo Index Indicator Badge */}
                      <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-white px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 shadow">
                        <span className="material-symbols-outlined text-[14px]">photo_library</span>
                        <span>
                          {activePhotoIndex + 1} / {currentImages.length}
                        </span>
                      </div>
                    </>
                  )}
                </div>

                {/* Thumbnails Row (if multi-image) */}
                {currentImages.length > 1 && (
                  <div className="p-3 bg-black/95 border-t border-white/10 flex items-center gap-2 overflow-x-auto scrollbar-none justify-center">
                    {currentImages.map((thumbUrl, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActivePhotoIndex(idx)}
                        className={`w-14 h-12 rounded-lg overflow-hidden border-2 transition-all cursor-pointer shrink-0 ${
                          idx === activePhotoIndex
                            ? 'border-tertiary-fixed ring-2 ring-tertiary-fixed/50 scale-105 opacity-100'
                            : 'border-transparent opacity-50 hover:opacity-90'
                        }`}
                      >
                        <img
                          src={thumbUrl}
                          alt={`Thumbnail ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Column: Event Details */}
              <div className="md:w-2/5 p-space-xl flex flex-col justify-between space-y-space-md overflow-y-auto bg-surface">
                <div className="space-y-space-sm">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="bg-primary-container text-tertiary-fixed font-label-caps text-[11px] uppercase tracking-wider px-3 py-1 rounded-full font-bold inline-block">
                      {selectedItem.tag}
                    </span>
                    {currentImages.length > 1 && (
                      <span className="bg-surface-container-high text-secondary font-label-caps text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full font-semibold">
                        {currentImages.length} Photos in Album
                      </span>
                    )}
                  </div>

                  {selectedItem.date && (
                    <span className="font-caption text-caption text-secondary block">
                      {selectedItem.date}
                    </span>
                  )}
                  <h3 className="font-headline-md text-headline-md text-primary font-serif font-bold leading-snug">
                    {selectedItem.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {selectedItem.description}
                  </p>
                </div>

                <div className="pt-space-md border-t border-outline-variant/30 flex items-center justify-between">
                  <span className="font-caption text-caption text-secondary">
                    Budhanilkantha Campus Life
                  </span>
                  <Link
                    to="/admissions"
                    className="px-4 py-2 bg-primary-container hover:bg-primary text-on-primary rounded font-label-caps text-[11px] uppercase tracking-wider font-bold transition-colors"
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

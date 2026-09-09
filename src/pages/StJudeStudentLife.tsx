import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useData, type GalleryItem } from '../context/DataContext';

export default function StJudeStudentLife() {
  const [activeTab, setActiveTab] = useState('all');
  const { gallery } = useData();

  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);

  const filtered =
    activeTab === 'all'
      ? gallery
      : gallery.filter((item) => item.category === activeTab);

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

      <main className="w-full pt-28 bg-surface">
        {/* 1. HERO SECTION */}
        <section className="relative w-full bg-primary-container text-on-primary py-space-3xl md:py-space-4xl overflow-hidden">
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 relative z-10">
            <div className="flex flex-wrap items-center gap-space-sm text-caption mb-space-md text-surface-variant">
              <Link to="/" className="hover:text-tertiary-fixed transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-tertiary-fixed font-semibold">Student Life Gallery</span>
            </div>

            <div className="max-w-4xl space-y-space-md">
              <span className="font-label-caps text-label-caps uppercase tracking-[0.25em] text-tertiary-fixed font-bold block">
                STUDENT LIFE &amp; CAMPUS GALLERY
              </span>
              <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-on-primary font-normal tracking-tight font-serif">
                Life at Budhanilkantha in Moments.
              </h1>
              <p className="font-body-lead text-body-lead text-surface-variant leading-relaxed">
                Explore our vibrant photographic chronicle of athletic championships, robotics innovation, international science delegations to NASA and Japan, stage oratory, and daily joyful life on our Shankarpur campus.
              </p>
            </div>
          </div>
        </section>

        {/* 2. GALLERY FILTER TABS */}
        <section className="w-full bg-surface-container-low border-b border-outline-variant/30 py-space-md sticky top-20 z-20 backdrop-blur-md bg-surface-container-low/95">
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                {[
                  { label: 'All Moments', key: 'all' },
                  { label: 'Sports & Cricket', key: 'sports' },
                  { label: 'Robotics & STEM', key: 'stem' },
                  { label: 'Global & NASA', key: 'global' },
                  { label: 'Oratory & Arts', key: 'arts' },
                  { label: 'Campus & Houses', key: 'community' },
                ].map((tab) => (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setActiveTab(tab.key)}
                    className={`px-4 py-2 rounded-full font-label-caps text-[12px] uppercase tracking-wider font-bold transition-all shrink-0 cursor-pointer ${
                      activeTab === tab.key
                        ? 'bg-primary-container text-on-primary shadow-sm scale-[1.02]'
                        : 'bg-surface-container hover:bg-surface-container-high text-on-surface-variant'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <span className="text-caption text-secondary hidden md:block whitespace-nowrap">
                Showing {filtered.length} events
              </span>
            </div>
          </div>
        </section>

        {/* 3. INTERACTIVE MASONRY / PHOTO GRID GALLERY */}
        <section className="w-full bg-surface py-space-3xl md:py-space-4xl">
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-space-lg">
              {filtered.map((item) => {
                const photoCount = (item.images && item.images.length > 0) ? item.images.length : 1;
                return (
                  <div
                    key={item.id}
                    onClick={() => openLightbox(item)}
                    className="group relative rounded-2xl overflow-hidden bg-surface-container border border-outline-variant/30 shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer h-72 sm:h-80"
                  >
                    {/* Photo */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transform duration-500 ease-out group-hover:scale-105"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity" />

                    {/* Top Category Badge */}
                    <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                      <span className="bg-black/60 backdrop-blur-md border border-white/20 text-white font-label-caps text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full font-semibold shadow-sm">
                        {item.tag}
                      </span>
                    </div>

                    {/* Multi-Photo Count Badge */}
                    {photoCount > 1 && (
                      <div className="absolute top-3.5 right-3.5">
                        <span className="bg-primary/90 backdrop-blur-md border border-white/20 text-white font-label-caps text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full font-bold shadow-md flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[13px]">photo_library</span>
                          <span>{photoCount} Photos</span>
                        </span>
                      </div>
                    )}

                    {/* Card Title Only */}
                    <div className="absolute bottom-0 inset-x-0 p-5 text-white flex flex-col gap-1">
                      <h3 className="font-headline-sm text-base sm:text-lg text-white font-serif font-bold leading-snug drop-shadow-md">
                        {item.title}
                      </h3>
                      <span className="text-[11px] text-tertiary-fixed font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <span>Click to view {photoCount > 1 ? `all ${photoCount} photos` : 'details'}</span>
                        <span className="material-symbols-outlined text-[13px]">arrow_forward</span>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. LIGHTBOX / MULTI-PHOTO PREVIEW MODAL */}
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

        {/* 5. MENTORSHIP SPOTLIGHT */}
        <section className="w-full bg-primary-container text-on-primary py-space-4xl">
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
              <div className="lg:col-span-4 rounded-xl overflow-hidden shadow-2xl bg-surface-container">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQ3yN9KLUMMRZpDlVtrJekOJJ6g2LiEKbXkxvLFSfaumNdUgB8qaaO3BKS-GtgCNmyooK-0kD0cqqJY6efqZjJJmc6QTWq-dyJZXfdBgaMGnpZivJMS43eC7sNMOiPusfBaERMFSw3P6UAsKUV1BRUAuZmW5u5hk-RKY1NGnEvbsC7bu6lr7l65pUKflrWkT0psjMeYIGA2yzx-K2mvfH7T1OMEquWHymMDO19vttF1guenmapjGyXeQ"
                  alt="Buddhi Bahadur Pradhan ICC Panel Umpire"
                  className="w-full h-80 object-cover object-top"
                />
              </div>

              <div className="lg:col-span-8 space-y-space-md">
                <span className="font-label-caps text-label-caps uppercase tracking-widest text-tertiary-fixed font-bold">
                  ATHLETIC MENTORSHIP
                </span>
                <h2 className="font-headline-xl text-headline-xl font-serif">
                  Guided by ICC Panel Umpire Buddhi B. Pradhan
                </h2>
                <blockquote className="font-headline-sm italic text-surface-bright leading-relaxed">
                  “Sport is the ultimate crucible for building resilience, honesty, and mental focus. We train our youth to compete fiercely on the pitch while upholding highest ethical standards.”
                </blockquote>
                <p className="font-body-md text-surface-variant leading-relaxed">
                  Under the stewardship of Mr. Buddhi Bahadur Pradhan, our cricket squad receives technical batting, bowling, fielding, and sports psychology conditioning that prepares them for national and district competitions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="w-full bg-surface-container-low border-t border-outline-variant/30 text-on-surface py-space-4xl">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 flex flex-col sm:flex-row items-center justify-between text-caption text-on-surface-variant gap-space-sm">
          <p>
            © 2026 Budhanilkantha Secondary English School (बुढानिलकण्ठ विद्यालय). All rights reserved.
            Shankarpur, Biratnagar-2, Morang, Nepal.
          </p>
          <div className="flex items-center space-x-space-md">
            <Link className="hover:text-primary transition-colors" to="/about">
              About School
            </Link>
            <Link className="hover:text-primary transition-colors" to="/academics">
              Academics
            </Link>
            <Link className="hover:text-primary transition-colors" to="/student-life">
              Student Life
            </Link>
            <Link className="hover:text-primary transition-colors" to="/facilities">
              Facilities
            </Link>
            <Link className="hover:text-primary transition-colors" to="/admissions">
              Admissions
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

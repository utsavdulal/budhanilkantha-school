import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useData, type FacilityItem } from '../context/DataContext';

export default function StJudeFacilities() {
  const { facilities } = useData();
  const [selectedFacility, setSelectedFacility] = useState<FacilityItem | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const openFacilityModal = (fac: FacilityItem) => {
    setSelectedFacility(fac);
    setActiveImageIndex(0);
  };

  return (
    <div className="min-h-screen bg-surface font-body-md text-body-md text-on-surface antialiased selection:bg-tertiary-fixed selection:text-tertiary">
      <Navbar />

      <main className="w-full pt-18 sm:pt-20 bg-surface">

        {/* CAMPUS ENVIRONMENT GALLERY */}
        <section className="w-full py-space-3xl lg:py-space-4xl bg-surface">
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 space-y-space-2xl">
            <div className="flex flex-wrap items-center gap-space-sm text-caption text-secondary">
              <Link to="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-primary font-semibold">Facilities</span>
            </div>

            <div className="space-y-1">
              <h1 className="font-headline-xl text-headline-xl text-primary font-serif">
                Campus Environment &amp; Infrastructure
              </h1>
              <p className="font-body-md text-on-surface-variant max-w-2xl">
                Explore our purpose-built campus in Shankarpur, Biratnagar-2, featuring digital classrooms, robotics labs, sports grounds, and full residential facilities.
              </p>
            </div>

            {/* Dynamic Facilities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-space-lg">
              {facilities.map((fac, idx) => {
                const isHero = idx === 0;
                const colSpan = isHero ? 'md:col-span-8 h-[440px]' : idx === 1 ? 'md:col-span-4 h-[440px]' : 'md:col-span-4 h-[320px]';
                const imageList = (fac.images && fac.images.length > 0) ? fac.images : [fac.image];

                return (
                  <div
                    key={fac.id}
                    onClick={() => openFacilityModal(fac)}
                    className={`${colSpan} relative rounded-xl overflow-hidden bg-surface-container shadow-md group cursor-pointer`}
                  >
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      alt={fac.title}
                      src={fac.image || imageList[0]}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-transparent to-transparent"></div>
                    
                    {imageList.length > 1 && (
                      <span className="absolute top-space-md right-space-md bg-black/75 text-white font-label-caps text-[10px] uppercase font-bold px-2.5 py-1 rounded flex items-center gap-1 shadow">
                        <span className="material-symbols-outlined text-[14px]">photo_library</span>
                        <span>{imageList.length} Photos</span>
                      </span>
                    )}

                    <div className="absolute bottom-0 left-0 right-0 p-space-lg lg:p-space-xl text-on-primary">
                      {fac.tag && (
                        <span className="font-label-caps text-label-caps uppercase tracking-widest text-tertiary-fixed block mb-1">
                          {fac.tag}
                        </span>
                      )}
                      <h3 className={`${isHero ? 'font-headline-md text-headline-md' : 'font-headline-sm text-headline-sm'} text-surface-container-lowest font-serif`}>
                        {fac.title}
                      </h3>
                      {fac.description && (
                        <p className="font-body-sm text-body-sm text-on-primary-container line-clamp-2 mt-1 max-w-xl">
                          {fac.description}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. VISIT INVITATION CALLOUT */}
        <section className="w-full bg-primary-container text-on-primary py-space-4xl">
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
            <div className="bg-surface-container-low/10 rounded-2xl p-space-2xl md:p-space-4xl border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-space-2xl">
              <div className="max-w-2xl space-y-space-sm">
                <span className="font-label-caps text-label-caps uppercase tracking-widest text-tertiary-fixed font-bold">
                  EXPERIENCE OUR CAMPUS IN PERSON
                </span>
                <h2 className="font-headline-xl text-headline-xl font-normal font-serif">
                  Schedule an In-Person Campus Walkthrough.
                </h2>
                <p className="font-body-md text-body-md text-surface-variant leading-relaxed">
                  We warmly invite parents and prospective scholars to visit our Shankarpur campus, view our classrooms, science &amp; robotics laboratories, auditorium, and interact directly with our school faculty.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-space-sm shrink-0">
                <Link
                  to="/admissions"
                  className="px-space-xl py-3 bg-tertiary-fixed hover:bg-tertiary-fixed-dim text-primary font-label-caps text-label-caps uppercase tracking-wider rounded font-bold transition-all shadow-md text-center"
                >
                  Register Campus Visit
                </Link>
                <a
                  href="tel:021514168"
                  className="px-space-xl py-3 bg-white/20 hover:bg-white/30 text-white border border-white/25 font-label-caps text-label-caps uppercase tracking-wider rounded font-bold transition-all text-center"
                >
                  Call: 021-514168
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <Footer />

      {/* FACILITY DETAIL & MULTI-IMAGE LIGHTBOX MODAL */}
      {selectedFacility && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedFacility(null)}
        >
          <div
            className="bg-surface max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh] border border-outline-variant/30 animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-outline-variant/20 flex items-center justify-between bg-surface-container-low">
              <div>
                <span className="font-label-caps text-[10px] uppercase font-bold text-primary tracking-widest block">
                  {selectedFacility.tag || 'Campus Facility'}
                </span>
                <h3 className="font-headline-sm text-lg sm:text-xl font-bold text-on-surface font-serif">
                  {selectedFacility.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedFacility(null)}
                className="w-8 h-8 rounded-full bg-surface-container-highest hover:bg-surface-container-high text-on-surface flex items-center justify-center transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            {/* Modal Body / Multi-image Carousel */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-4">
              {(() => {
                const images = (selectedFacility.images && selectedFacility.images.length > 0)
                  ? selectedFacility.images
                  : [selectedFacility.image];
                const currentImg = images[activeImageIndex] || images[0];

                return (
                  <div className="space-y-4">
                    {/* Main Active Image Frame */}
                    <div className="relative rounded-xl overflow-hidden bg-black aspect-[16/10] max-h-[460px] flex items-center justify-center">
                      <img
                        src={currentImg}
                        alt={selectedFacility.title}
                        className="w-full h-full object-contain"
                      />

                      {images.length > 1 && (
                        <>
                          <button
                            type="button"
                            onClick={() => setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))}
                            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-all cursor-pointer shadow-lg"
                          >
                            <span className="material-symbols-outlined text-[20px]">chevron_left</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => setActiveImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))}
                            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-all cursor-pointer shadow-lg"
                          >
                            <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                          </button>
                          <span className="absolute bottom-3 right-3 bg-black/80 text-white font-label-caps text-[10px] uppercase font-bold px-2 py-0.5 rounded">
                            {activeImageIndex + 1} / {images.length} Photos
                          </span>
                        </>
                      )}
                    </div>

                    {/* Thumbnails if Multiple Images */}
                    {images.length > 1 && (
                      <div className="flex gap-2 overflow-x-auto pb-2">
                        {images.map((img, i) => (
                          <button
                            key={i}
                            type="button"
                            onClick={() => setActiveImageIndex(i)}
                            className={`w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                              activeImageIndex === i ? 'border-primary ring-2 ring-primary/40' : 'border-outline-variant/30 opacity-60 hover:opacity-100'
                            }`}
                          >
                            <img src={img} alt="thumb" className="w-full h-full object-cover" />
                          </button>
                        ))}
                      </div>
                    )}

                    <div className="space-y-2 pt-2">
                      <p className="font-body-md text-sm sm:text-base text-on-surface leading-relaxed">
                        {selectedFacility.description}
                      </p>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

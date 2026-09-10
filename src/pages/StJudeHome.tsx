import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function StJudeHome() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const whyFeatures = [
    {
      id: 'future-ready',
      title: 'Future-Ready Education',
      tagline: 'STEM & Robotics Innovation',
      description:
        'In our Shankarpur campus, Budhanilkantha School is a center for advanced learning and technological innovation. Cutting-edge robotics labs, early computer programming, smart classrooms, and individualized Super Learning programs empower students to discover their passions and shape their path as 21st-century leaders.',
      image: '/images/why-future-ready.jpg',
      icon: 'rocket_launch',
      badgeText: 'FUTURE-READY EDUCATION',
    },
    {
      id: 'opportunities',
      title: 'A World of Opportunities',
      tagline: 'Global Exposure & Leadership',
      description:
        'From international youth delegations to NASA in the USA and Asian Camp in Japan, to championship-winning cricket training under ICC Panel Umpire Buddhi Bahadur Pradhan, we provide our scholars with world-class platforms to represent Nepal and excel on the world stage.',
      image: '/images/why-opportunities.jpg',
      icon: 'public',
      badgeText: 'WORLD OF OPPORTUNITIES',
    },
    {
      id: 'community',
      title: 'Dynamic Community',
      tagline: 'House System & Campus Life',
      description:
        'A vibrant and inclusive student culture driven by our active 4-House leadership system, competitive inter-school oratory leagues, annual science exhibitions, cultural arts festivals, taekwondo martial arts, and community outreach initiatives.',
      image: '/images/why-community.jpg',
      icon: 'groups',
      badgeText: 'DYNAMIC COMMUNITY',
    },
    {
      id: 'friendly-env',
      title: 'Friendly Learning Environment',
      tagline: 'Caring Mentorship & Care',
      description:
        'A nurturing, child-centric atmosphere where every learner is valued. Featuring dedicated remedial support clinics, personalized academic tracking, 250-seat multimedia conference hall, interactive TV rooms for early childhood, and safe residential hostel care in Biratnagar-2.',
      image: '/images/why-friendly-env.jpg',
      icon: 'sentiment_satisfied',
      badgeText: 'FRIENDLY ENVIRONMENT',
    },
  ];

  // Auto-scroll every 3.5 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (!scrollContainerRef.current) return;
      const nextIndex = (activeSlide + 1) % whyFeatures.length;
      scrollToSlide(nextIndex);
    }, 3500);

    return () => clearInterval(interval);
  }, [activeSlide, isPaused, whyFeatures.length]);

  const scrollToSlide = (index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cards = container.children;
    if (cards[index]) {
      const card = cards[index] as HTMLElement;
      container.scrollTo({
        left: card.offsetLeft - container.offsetLeft,
        behavior: 'smooth',
      });
      setActiveSlide(index);
    }
  };

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollLeft = container.scrollLeft;
    const cardWidth = container.children[0]?.clientWidth || 1;
    const newIndex = Math.round(scrollLeft / (cardWidth + 24));
    if (newIndex >= 0 && newIndex < whyFeatures.length && newIndex !== activeSlide) {
      setActiveSlide(newIndex);
    }
  };

  return (
    <div className="min-h-screen bg-surface font-body-md text-body-md text-on-surface antialiased selection:bg-tertiary-fixed selection:text-tertiary">
      <Navbar />

      {/* MAIN CONTENT WRAPPER */}
      <main className="w-full pt-18 sm:pt-20 bg-surface">
        <div className="flex flex-col w-full">
          {/* 1. HERO SECTION */}
          <section className="relative w-full overflow-hidden bg-primary-container min-h-[78vh] lg:min-h-[74vh] flex items-center">
            {/* Background Image with Scrim Layer */}
            <div className="absolute inset-0 z-0">
              <img
                alt="Budhanilkantha Secondary English School Campus and Students"
                className="w-full h-full object-cover object-[center_35%]"
                src="/images/school-hero.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/75 to-primary/60 md:bg-gradient-to-r md:from-primary/90 md:via-primary/70 md:to-transparent"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 pt-space-2xl pb-space-3xl">
              {/* Upper Metadata / Editorial Kicker */}
              <div className="flex flex-col md:flex-row md:items-end justify-between pb-space-lg gap-space-sm border-b border-on-primary-fixed-variant/30">
                <div className="space-y-space-2xs">
                  <span className="font-label-caps text-label-caps uppercase tracking-[0.2em] text-tertiary-fixed font-bold">
                    EXCELLENCE IN EDUCATION SINCE 2040 B.S. (1983 A.D.)
                  </span>
                  <p className="font-caption text-caption text-surface-variant">
                    Shankarpur, Biratnagar-2, Morang • Koshi Province, Nepal
                  </p>
                </div>
              </div>

              {/* Main Headline & Action Buttons */}
              <div className="pt-space-2xl pb-space-2xl max-w-4xl space-y-space-lg">
                <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-on-primary font-normal tracking-tight drop-shadow-sm leading-tight">
                  Where Curiosity Becomes{' '}
                  <span className="italic text-tertiary-fixed font-headline-md font-serif">
                    Confidence.
                  </span>
                  <span className="block text-headline-lg md:text-headline-xl font-headline-xl text-surface-bright mt-space-2xs">
                    Quality Education Since 2040 B.S.
                  </span>
                </h1>

                <div className="flex flex-col items-start gap-space-sm pt-space-sm">
                  <Link
                    className="inline-flex items-center justify-center px-space-xl py-3 bg-tertiary-fixed hover:bg-tertiary-fixed-dim text-primary font-label-caps text-label-caps uppercase tracking-wider rounded font-bold transition-all duration-200 shadow-md active:scale-[0.99] text-center"
                    to="/academics"
                  >
                    EXPLORE PROGRAMS
                  </Link>
                  <Link
                    className="inline-flex items-center justify-center px-space-xl py-3 bg-white/20 hover:bg-white/30 text-white border border-white/25 font-label-caps text-label-caps uppercase tracking-wider rounded font-bold transition-all duration-200 text-center backdrop-blur-sm shadow-sm"
                    to="/admissions"
                  >
                    INQUIRE FOR ADMISSION
                  </Link>
                </div>
              </div>


            </div>
          </section>

          {/* 2. WHY BUDHANILKANTHA SCHOOL? (Horizontal Scroll Showcase) */}
          <section className="w-full bg-surface py-space-4xl lg:py-space-5xl relative overflow-hidden" id="why-budhanilkantha">
            <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 space-y-space-xl">
              {/* Main Section Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
                <div className="max-w-3xl space-y-space-xs">
                  <span className="font-label-caps text-label-caps uppercase tracking-[0.2em] text-on-tertiary-container font-semibold block">
                    THE BUDHANILKANTHA ADVANTAGE
                  </span>
                  <h2 className="font-headline-xl text-headline-xl text-primary font-normal font-serif">
                    Why Budhanilkantha School?
                  </h2>
                </div>

                {/* Animated Slide Progress Indicators */}
                <div className="flex items-center gap-2">
                  {whyFeatures.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => scrollToSlide(i)}
                      className={`h-2.5 rounded-full transition-all duration-500 cursor-pointer ${
                        activeSlide === i
                          ? 'w-10 bg-primary-container shadow-sm'
                          : 'w-2.5 bg-outline-variant hover:bg-secondary/60'
                      }`}
                      aria-label={`Jump to feature ${i + 1}`}
                      type="button"
                    />
                  ))}
                </div>
              </div>

              {/* Horizontal Scroll Track (Full-Scale Showcase Cards with Auto-Scroll) */}
              <div
                ref={scrollContainerRef}
                onScroll={handleScroll}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={() => setIsPaused(true)}
                onTouchEnd={() => setIsPaused(false)}
                className="flex gap-space-xl md:gap-space-2xl overflow-x-auto snap-x snap-mandatory pb-6 pt-2 -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-10 xl:-mx-12 2xl:-mx-16 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 scrollbar-none"
              >
                {whyFeatures.map((feat) => (
                  <div
                    key={feat.id}
                    className="w-[90vw] md:w-[86vw] lg:w-[1050px] xl:w-[1180px] shrink-0 snap-center bg-surface-container-low rounded-2xl sm:rounded-3xl p-space-lg sm:p-space-xl lg:p-space-2xl border border-outline-variant/30 shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl lg:gap-space-3xl items-center">
                      {/* Left Column: Title & Description */}
                      <div className="lg:col-span-5 space-y-space-md">
                        <div className="space-y-space-xs">
                          <span className="font-label-caps text-[11px] sm:text-[12px] uppercase tracking-[0.2em] text-secondary font-semibold block">
                            {feat.tagline}
                          </span>
                          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-primary font-semibold leading-tight">
                            {feat.title}
                          </h3>
                        </div>

                        <p className="font-body-lead text-body-lead text-on-surface-variant leading-relaxed">
                          {feat.description}
                        </p>

                        <div className="pt-space-xs flex items-center gap-1.5 text-caption text-secondary font-medium">
                          <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">check_circle</span>
                          <span>{feat.badgeText}</span>
                        </div>
                      </div>

                      {/* Right Column: Full Sized Rounded Image Card with Left Sidebar Badge */}
                      <div className="lg:col-span-7">
                        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg bg-surface-container-lowest border border-outline-variant/30 flex flex-row min-h-[320px] sm:min-h-[380px] md:min-h-[420px] relative group">
                          {/* Left Sidebar Badge */}
                          <div className="w-24 sm:w-28 md:w-32 bg-primary-container text-on-primary flex flex-col items-center justify-center p-3 sm:p-4 text-center shrink-0 border-r border-outline-variant/30 space-y-3 z-10">
                            {/* Icon */}
                            <div className="w-10 h-10 rounded-lg border border-tertiary-fixed/30 flex items-center justify-center bg-primary text-tertiary-fixed">
                              <span className="material-symbols-outlined text-[22px]">
                                {feat.icon}
                              </span>
                            </div>
                            <span className="font-label-caps text-[10px] sm:text-[11px] font-bold uppercase tracking-wider leading-tight text-on-primary">
                              {feat.badgeText}
                            </span>
                          </div>

                          {/* Image */}
                          <div className="relative flex-1 overflow-hidden">
                            <img
                              src={feat.image}
                              alt={feat.title}
                              className="w-full h-full object-cover transform duration-700 group-hover:scale-105"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 3. SCHOOL STATISTICS STRIP */}
          <section className="w-full bg-surface-container-low py-space-2xl border-y border-outline-variant/30">
            <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-space-lg">
                <div className="space-y-space-2xs">
                  <p className="font-headline-lg text-headline-lg text-primary font-normal font-serif">
                    40+ Years
                  </p>
                  <p className="font-label-caps text-[11px] text-secondary uppercase tracking-wider">
                    Excellence (Estd. 2040 B.S.)
                  </p>
                </div>
                <div className="space-y-space-2xs">
                  <p className="font-headline-lg text-headline-lg text-primary font-normal font-serif">
                    1,350+
                  </p>
                  <p className="font-label-caps text-[11px] text-secondary uppercase tracking-wider">
                    Students (PG to Grade 10)
                  </p>
                </div>
                <div className="space-y-space-2xs">
                  <p className="font-headline-lg text-headline-lg text-primary font-normal font-serif">
                    100%
                  </p>
                  <p className="font-label-caps text-[11px] text-secondary uppercase tracking-wider">
                    SEE / SLC Board Distinction
                  </p>
                </div>
                <div className="space-y-space-2xs">
                  <p className="font-headline-lg text-headline-lg text-primary font-normal font-serif">
                    PG – 10
                  </p>
                  <p className="font-label-caps text-[11px] text-secondary uppercase tracking-wider">
                    Nursery to Secondary
                  </p>
                </div>
                <div className="space-y-space-2xs">
                  <p className="font-headline-lg text-headline-lg text-primary font-normal font-serif">
                    NASA / Japan
                  </p>
                  <p className="font-label-caps text-[11px] text-secondary uppercase tracking-wider">
                    International Exposure
                  </p>
                </div>
                <div className="space-y-space-2xs">
                  <p className="font-headline-lg text-headline-lg text-primary font-normal font-serif">
                    250 Seats
                  </p>
                  <p className="font-label-caps text-[11px] text-secondary uppercase tracking-wider">
                    Digital Conference Hall
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 4. ACADEMIC PROGRAMS */}
          <section className="w-full bg-surface-container-lowest py-space-4xl" id="academic-pathway">
            <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 space-y-space-3xl">
              <div className="max-w-3xl mx-auto text-center space-y-space-xs">
                <span className="font-label-caps text-label-caps uppercase tracking-[0.2em] text-on-tertiary-container font-semibold block">
                  Our Curriculum
                </span>
                <h2 className="font-headline-xl text-headline-xl text-primary font-normal font-serif">
                  Academic Programs
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto pt-space-2xs">
                  Tailored learning for every stage of growth — playful, purposeful, and ambitious.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
                {/* 01 Pre-Primary */}
                <div className="bg-surface-container-low rounded-lg p-space-xl flex flex-col justify-between group transition-all duration-300 hover:bg-surface-container border border-outline-variant/30">
                  <div className="space-y-space-md">
                    <div className="flex items-center justify-between">
                      <span className="px-space-sm py-space-2xs bg-surface-container-highest text-primary font-label-caps text-[11px] uppercase tracking-wider rounded font-semibold">
                        Playgroup to UKG
                      </span>
                      <span className="font-headline-md text-headline-md text-secondary/40 font-light font-serif">
                        01
                      </span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-primary font-serif">
                      Pre-Primary Wing
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      Child-centered environment offering playful, stress-free foundational learning.
                      Equipped with specialized Kids' Entertainment Hall and smart TV-based interactive
                      audio-visual learning.
                    </p>
                    <div className="pt-space-xs space-y-space-2xs font-caption text-caption text-secondary">
                      <p>• Kids' Entertainment Hall &amp; Joyful Play Corner</p>
                      <p>• TV-Based Smart Audio-Visual Learning</p>
                      <p>• Early Phonics, Numeracy &amp; Value Foundation</p>
                    </div>
                  </div>
                  <div className="pt-space-xl border-t border-outline-variant/30 mt-space-md">
                    <Link
                      className="inline-flex items-center gap-space-2xs text-primary font-label-caps text-label-caps uppercase tracking-wider group-hover:text-on-tertiary-container font-bold"
                      to="/academics/pre-primary"
                    >
                      <span>Explore Pre-Primary</span>
                      <span className="material-symbols-outlined text-[16px]">north_east</span>
                    </Link>
                  </div>
                </div>

                {/* 02 Primary */}
                <div className="bg-surface-container-low rounded-lg p-space-xl flex flex-col justify-between group transition-all duration-300 hover:bg-surface-container border border-outline-variant/30">
                  <div className="space-y-space-md">
                    <div className="flex items-center justify-between">
                      <span className="px-space-sm py-space-2xs bg-surface-container-highest text-primary font-label-caps text-[11px] uppercase tracking-wider rounded font-semibold">
                        Grades 1 to 5
                      </span>
                      <span className="font-headline-md text-headline-md text-secondary/40 font-light font-serif">
                        02
                      </span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-primary font-serif">
                      Primary Wing
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      Super learning pedagogy fostering conceptual clarity across languages, mathematics,
                      social studies, and sciences, bolstered with remedial classes for student development.
                    </p>
                    <div className="pt-space-xs space-y-space-2xs font-caption text-caption text-secondary">
                      <p>• Strong English &amp; Nepali Bilingual Competence</p>
                      <p>• Foundational Mathematics &amp; Daily Super Learning</p>
                      <p>• Dedicated Remedial Support &amp; Moral Instruction</p>
                    </div>
                  </div>
                  <div className="pt-space-xl border-t border-outline-variant/30 mt-space-md">
                    <Link
                      className="inline-flex items-center gap-space-2xs text-primary font-label-caps text-label-caps uppercase tracking-wider group-hover:text-on-tertiary-container font-bold"
                      to="/academics/primary"
                    >
                      <span>Explore Primary Wing</span>
                      <span className="material-symbols-outlined text-[16px]">north_east</span>
                    </Link>
                  </div>
                </div>

                {/* 03 Secondary */}
                <div className="bg-primary-container text-on-primary rounded-lg p-space-xl flex flex-col justify-between group shadow-xl border border-tertiary-fixed/30">
                  <div className="space-y-space-md">
                    <div className="flex items-center justify-between">
                      <span className="px-space-sm py-space-2xs bg-surface-tint/30 text-tertiary-fixed font-label-caps text-[11px] uppercase tracking-wider rounded font-semibold">
                        Grades 6 to 10
                      </span>
                      <span className="font-headline-md text-headline-md text-tertiary-fixed/40 font-light font-serif">
                        03
                      </span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-on-primary font-serif">
                      Secondary Wing (SEE Board)
                    </h3>
                    <p className="font-body-md text-body-md text-on-primary-container leading-relaxed">
                      Rigorous analytical sciences, computing &amp; National SEE examination preparation delivering regular board distinction. Advanced robotics and international exposure.
                    </p>
                    <div className="pt-space-xs space-y-space-2xs font-caption text-caption text-on-primary-container">
                      <p>• 100% Board Pass Rate &amp; Distinction Mentorship</p>
                      <p>• Science Practicals, Computer Labs &amp; Robotics</p>
                      <p>• Global Platforms (NASA USA, Asian Camp Japan)</p>
                    </div>
                  </div>
                  <div className="pt-space-xl border-t border-on-primary-fixed-variant/30 mt-space-md">
                    <Link
                      className="inline-flex items-center gap-space-2xs text-tertiary-fixed font-label-caps text-label-caps uppercase tracking-wider hover:underline font-bold"
                      to="/academics/secondary"
                    >
                      <span>Explore Secondary Wing</span>
                      <span className="material-symbols-outlined text-[16px]">north_east</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 5. PARENT & STUDENT TESTIMONIAL */}
          <section className="w-full bg-primary-container text-on-primary py-space-5xl">
            <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
              <div className="max-w-4xl mx-auto text-center space-y-space-xl">
                <span className="font-label-caps text-label-caps uppercase tracking-[0.3em] text-tertiary-fixed block font-bold">
                  VOICES FROM OUR COMMUNITY
                </span>
                <blockquote className="font-display-hero-mobile md:font-headline-xl text-headline-xl font-normal leading-snug italic text-on-primary font-serif">
                  “Budhanilkantha gave our children the disciplined foundation to top their board exams while
                  providing the confidence to represent Nepal on international platforms like NASA and Japan.”
                </blockquote>
                <div className="pt-space-md flex flex-col items-center justify-center space-y-space-2xs">
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-surface-tint mb-space-xs border border-tertiary-fixed/30 flex items-center justify-center text-tertiary-fixed font-headline-sm font-bold">
                    BS
                  </div>
                  <div className="font-headline-sm text-headline-sm text-tertiary-fixed font-serif">
                    Proud Parents Community
                  </div>
                  <div className="font-caption text-caption text-on-primary-container">
                    Shankarpur, Biratnagar-2 • SEE Distinction &amp; Global Exchange Alumni
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 6. FINAL ADMISSIONS CALL TO ACTION */}
          <section className="w-full bg-surface-container-lowest py-space-5xl" id="admissions-portal">
            <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
              <div className="bg-surface-container-low rounded-2xl p-space-2xl md:p-space-3xl lg:p-space-4xl border border-outline-variant/30 overflow-hidden shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl lg:gap-space-3xl items-center">
                  {/* Left Column: Enrollment Details & Contact */}
                  <div className="lg:col-span-7 space-y-space-lg">
                    <span className="font-label-caps text-label-caps uppercase tracking-[0.2em] text-on-tertiary-container font-semibold block">
                      THE 2081–2082 ENROLLMENT CYCLE (PLAYGROUP TO GRADE 10)
                    </span>
                    <h2 className="font-display-hero-mobile md:font-headline-xl text-headline-xl text-primary font-normal leading-tight font-serif">
                      Begin Your Child's Journey of Excellence.
                    </h2>
                    <p className="font-body-lead text-body-lead text-on-surface-variant leading-relaxed">
                      Admissions for the upcoming academic session are now open for Playgroup through Grade 10.
                      We warmly invite parents and prospective students to visit our Shankarpur campus, meet our
                      dedicated educators, and experience our vibrant academic community.
                    </p>
                    <div className="pt-space-sm flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md">
                      <a
                        className="inline-flex items-center justify-center px-space-xl py-space-md bg-primary-container hover:bg-primary text-on-primary font-label-caps text-label-caps uppercase tracking-wider rounded font-bold transition-all duration-200 shadow-sm"
                        href="tel:021514168"
                      >
                        Call Admissions: 021-514168
                      </a>
                      <Link
                        className="inline-flex items-center justify-center px-space-xl py-space-md bg-surface hover:bg-surface-container-high text-primary font-label-caps text-label-caps uppercase tracking-wider rounded font-bold transition-all duration-200 border border-outline-variant/50 shadow-sm"
                        to="/admissions"
                      >
                        Inquire for Admission
                      </Link>
                    </div>
                    <div className="pt-space-md flex items-start sm:items-center gap-space-2xs text-caption font-caption text-secondary">
                      <span className="material-symbols-outlined text-[18px] text-on-tertiary-container shrink-0 mt-0.5 sm:mt-0">
                        location_on
                      </span>
                      <span>
                        Shankarpur, Biratnagar-2, Morang, Koshi Province 56613, Nepal (Google Plus Code:
                        F7CM+43 Biratnagar)
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Students in front of School Building Photo */}
                  <div className="lg:col-span-5 flex justify-center">
                    <div className="relative w-full max-w-lg lg:max-w-none rounded-2xl overflow-hidden shadow-lg border border-outline-variant/30 group">
                      <img
                        src="/images/enrollment-students.jpg"
                        alt="Budhanilkantha Secondary English School Students in front of Campus Building"
                        className="w-full h-[360px] sm:h-[420px] lg:h-[450px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary-container/90 text-on-primary text-[10px] font-label-caps uppercase tracking-widest backdrop-blur-md mb-1.5 font-bold shadow">
                          <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed animate-pulse" />
                          Admissions Open · Estd. 2040 B.S.
                        </div>
                        <p className="font-headline-sm text-sm sm:text-base font-semibold drop-shadow text-white leading-snug">
                          Budhanilkantha Secondary English School
                        </p>
                        <p className="text-xs text-white/85 font-light">
                          Shankarpur, Biratnagar-2
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

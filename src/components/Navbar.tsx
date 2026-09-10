import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [academicsDropdownOpen, setAcademicsDropdownOpen] = useState(false);
  const [mobileAcademicsOpen, setMobileAcademicsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string, hash?: string) => {
    if (hash) {
      return location.pathname === path && location.hash === hash;
    }
    return location.pathname === path && (!location.hash || location.hash === '');
  };

  const closeMobile = () => {
    setMobileMenuOpen(false);
    setMobileAcademicsOpen(false);
    setAcademicsDropdownOpen(false);
  };

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setAcademicsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const academicWings = [
    {
      title: 'Kids School',
      subtitle: 'Playgroup – UKG',
      href: '/academics/pre-primary',
      badge: 'PG–UKG',
      icon: 'child_care',
    },
    {
      title: 'Primary Level',
      subtitle: 'Grade 1 – 5',
      href: '/academics/primary',
      badge: 'Grade 1–5',
      icon: 'menu_book',
    },
    {
      title: 'Secondary School',
      subtitle: 'Grade 6 – 10 (SEE Board)',
      href: '/academics/secondary',
      badge: 'Grade 6–10',
      icon: 'school',
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Main Navbar */}
      <div className="h-18 sm:h-20 bg-surface/95 backdrop-blur-md border-b border-outline-variant/30 shadow-[0_1px_8px_rgba(15,30,54,0.04)]">
        <div className="w-full h-full px-3 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 flex items-center justify-between gap-2 sm:gap-space-lg">
          {/* School Brand & Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-space-md shrink-0 min-w-0" onClick={closeMobile}>
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded bg-primary-container text-tertiary-fixed flex items-center justify-center font-headline-md text-base sm:text-[20px] font-bold border border-tertiary-fixed/30 shadow-sm shrink-0">
              B
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-headline-sm text-sm sm:text-base md:text-headline-sm text-primary tracking-tight leading-tight font-bold truncate">
                Budhanilkantha School
              </span>
              <span className="font-label-caps text-[9px] sm:text-[10px] text-secondary tracking-wider uppercase mt-0.5 font-semibold truncate">
                ESTD. 2040 B.S. · BIRATNAGAR
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-space-xl h-full font-medium">
            <Link
              className={`font-body-sm text-body-sm py-space-xs transition-colors duration-200 ${
                isActive('/about')
                  ? 'text-primary font-bold border-b-2 border-primary'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
              to="/about"
            >
              About
            </Link>

            {/* Academics Dropdown Container */}
            <div
              ref={dropdownRef}
              className="relative h-full flex items-center"
              onMouseEnter={() => setAcademicsDropdownOpen(true)}
              onMouseLeave={() => setAcademicsDropdownOpen(false)}
            >
              <button
                type="button"
                className={`font-body-sm text-body-sm py-space-xs flex items-center gap-1 transition-colors duration-200 cursor-pointer ${
                  location.pathname.startsWith('/academics')
                    ? 'text-primary font-bold border-b-2 border-primary'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
                onClick={() => setAcademicsDropdownOpen((prev) => !prev)}
                aria-expanded={academicsDropdownOpen}
                aria-haspopup="true"
              >
                <span>Academics</span>
                <span className={`material-symbols-outlined text-[18px] transition-transform duration-200 ${academicsDropdownOpen ? 'rotate-180 text-primary' : ''}`}>
                  expand_more
                </span>
              </button>

              {/* Dropdown Menu Panel */}
              {academicsDropdownOpen && (
                <div className="absolute top-[calc(100%-4px)] left-1/2 -translate-x-1/2 w-80 bg-surface rounded-xl shadow-2xl border border-outline-variant/40 py-2.5 z-50 animate-fadeIn">
                  <div className="px-3 pb-2 mb-1 border-b border-outline-variant/30 flex items-center justify-between">
                    <span className="font-label-caps text-[10px] uppercase tracking-wider text-secondary font-bold">
                      Select Academic Level
                    </span>
                  </div>

                  <div className="flex flex-col gap-0.5 px-1.5">
                    {academicWings.map((wing) => (
                      <Link
                        key={wing.href}
                        to={wing.href}
                        onClick={() => setAcademicsDropdownOpen(false)}
                        className="group flex items-start gap-3 p-2.5 rounded-lg hover:bg-surface-container transition-colors text-left"
                      >
                        <div className="w-8 h-8 rounded-md bg-surface-container group-hover:bg-primary-container text-primary group-hover:text-tertiary-fixed flex items-center justify-center shrink-0 mt-0.5 transition-colors">
                          <span className="material-symbols-outlined text-[18px]">
                            {wing.icon}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-1">
                            <span className="font-body-sm text-body-sm font-bold text-primary group-hover:text-primary leading-snug">
                              {wing.title}
                            </span>
                            <span className="font-label-caps text-[9px] uppercase px-1.5 py-0.5 bg-surface-container group-hover:bg-surface-container-high rounded text-secondary font-semibold shrink-0">
                              {wing.badge}
                            </span>
                          </div>
                          <p className="font-caption text-[11px] text-on-surface-variant leading-tight mt-0.5">
                            {wing.subtitle}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              className={`font-body-sm text-body-sm py-space-xs transition-colors duration-200 ${
                isActive('/admissions')
                  ? 'text-primary font-bold border-b-2 border-primary'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
              to="/admissions"
            >
              Admissions
            </Link>
            <Link
              className={`font-body-sm text-body-sm py-space-xs transition-colors duration-200 ${
                isActive('/student-life')
                  ? 'text-primary font-bold border-b-2 border-primary'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
              to="/student-life"
            >
              Student Life
            </Link>
            <Link
              className={`font-body-sm text-body-sm py-space-xs transition-colors duration-200 ${
                isActive('/facilities')
                  ? 'text-primary font-bold border-b-2 border-primary'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
              to="/facilities"
            >
              Facilities
            </Link>
            <Link
              className={`font-body-sm text-body-sm py-space-xs transition-colors duration-200 ${
                isActive('/news-events')
                  ? 'text-primary font-bold border-b-2 border-primary'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
              to="/news-events"
            >
              News &amp; Events
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-space-md shrink-0">
            <Link
              className="hidden sm:inline-flex text-on-surface font-label-caps text-label-caps uppercase tracking-wider px-space-xs py-space-2xs transition-colors font-bold hover:text-primary"
              to="/contact"
            >
              CONTACT
            </Link>
            <Link
              className="inline-flex items-center justify-center bg-primary-container hover:bg-primary text-on-primary font-label-caps text-[11px] uppercase tracking-widest px-space-lg py-2.5 rounded transition-all shadow-[0_2px_4px_rgba(15,30,54,0.15)] active:scale-[0.99] font-bold"
              to="/admissions"
            >
              ENROLL NOW
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              className="xl:hidden w-10 h-10 flex items-center justify-center rounded-lg text-primary hover:bg-surface-container transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              <span className="material-symbols-outlined text-[26px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-surface border-b border-outline-variant/30 shadow-lg px-6 py-4 flex flex-col gap-2 font-medium animate-fadeIn max-h-[85vh] overflow-y-auto">
          <Link
            className={`py-2 px-3 rounded text-base transition-colors ${
              isActive('/about') ? 'bg-primary-container text-on-primary font-bold' : 'text-on-surface hover:bg-surface-container'
            }`}
            to="/about"
            onClick={closeMobile}
          >
            About
          </Link>

          {/* Academics Mobile Collapsible */}
          <div className="flex flex-col">
            <button
              type="button"
              className={`w-full py-2 px-3 rounded text-base transition-colors flex items-center justify-between text-left ${
                location.pathname.startsWith('/academics')
                  ? 'bg-primary-container/10 text-primary font-bold'
                  : 'text-on-surface hover:bg-surface-container'
              }`}
              onClick={() => setMobileAcademicsOpen((prev) => !prev)}
              aria-expanded={mobileAcademicsOpen}
            >
              <span className="flex items-center gap-2">
                <span>Academics</span>
                <span className="text-[10px] uppercase font-bold text-secondary bg-surface-container px-1.5 py-0.5 rounded">
                  3 Levels
                </span>
              </span>
              <span className={`material-symbols-outlined text-[20px] text-primary transition-transform duration-200 ${mobileAcademicsOpen ? 'rotate-180' : ''}`}>
                expand_more
              </span>
            </button>

            {/* Sub-wings inside Mobile Drawer */}
            {mobileAcademicsOpen && (
              <div className="ml-3 pl-3 border-l-2 border-primary/20 flex flex-col gap-1 py-1.5 animate-fadeIn">
                {academicWings.map((wing) => (
                  <Link
                    key={wing.href}
                    to={wing.href}
                    onClick={closeMobile}
                    className="py-2 px-2.5 rounded text-sm text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[16px] text-primary">
                        {wing.icon}
                      </span>
                      <span className="font-medium">{wing.title}</span>
                    </div>
                    <span className="text-[10px] uppercase font-bold text-secondary">{wing.badge}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            className={`py-2 px-3 rounded text-base transition-colors ${
              isActive('/admissions') ? 'bg-primary-container text-on-primary font-bold' : 'text-on-surface hover:bg-surface-container'
            }`}
            to="/admissions"
            onClick={closeMobile}
          >
            Admissions
          </Link>
          <Link
            className={`py-2 px-3 rounded text-base transition-colors ${
              isActive('/student-life') ? 'bg-primary-container text-on-primary font-bold' : 'text-on-surface hover:bg-surface-container'
            }`}
            to="/student-life"
            onClick={closeMobile}
          >
            Student Life
          </Link>
          <Link
            className={`py-2 px-3 rounded text-base transition-colors ${
              isActive('/facilities') ? 'bg-primary-container text-on-primary font-bold' : 'text-on-surface hover:bg-surface-container'
            }`}
            to="/facilities"
            onClick={closeMobile}
          >
            Facilities
          </Link>
          <Link
            className={`py-2 px-3 rounded text-base transition-colors ${
              isActive('/news-events') ? 'bg-primary-container text-on-primary font-bold' : 'text-on-surface hover:bg-surface-container'
            }`}
            to="/news-events"
            onClick={closeMobile}
          >
            News &amp; Events
          </Link>
          <Link
            className={`py-2 px-3 rounded text-base transition-colors ${
              isActive('/contact') ? 'bg-primary-container text-on-primary font-bold' : 'text-on-surface hover:bg-surface-container'
            }`}
            to="/contact"
            onClick={closeMobile}
          >
            Contact Us
          </Link>

          <div className="pt-2 mt-1 border-t border-outline-variant/30 flex flex-col gap-2">
            <Link
              className="py-2.5 px-3 rounded text-center bg-primary-container text-on-primary font-bold"
              to="/admissions"
              onClick={closeMobile}
            >
              ENROLL NOW
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

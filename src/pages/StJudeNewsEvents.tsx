import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useData } from '../context/DataContext';

export default function StJudeNewsEvents() {
  const [filter, setFilter] = useState('all');
  const { news } = useData();

  const filteredArticles =
    filter === 'all'
      ? news
      : news.filter((item) => item.category === filter);

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
              <span className="text-tertiary-fixed font-semibold">News &amp; Events</span>
            </div>

            <div className="max-w-4xl space-y-space-md">
              <span className="font-label-caps text-label-caps uppercase tracking-[0.25em] text-tertiary-fixed font-bold block">
                THE BUDHANILKANTHA CHRONICLES
              </span>
              <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-on-primary font-normal tracking-tight font-serif">
                Official Dispatches, Notices &amp; Student Achievements.
              </h1>
              <p className="font-body-lead text-body-lead text-surface-variant leading-relaxed">
                Stay updated with our latest academic milestones, admissions announcements, inter-school sports championships, science and robotics accolades, and campus events in Shankarpur, Biratnagar-2.
              </p>
            </div>
          </div>
        </section>

        {/* 2. FILTER BAR */}
        <section className="w-full bg-surface-container-low border-b border-outline-variant/30 py-space-xl">
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {[
                { label: 'All Updates', key: 'all' },
                { label: 'Admissions & Notices', key: 'notices' },
                { label: 'STEM & Robotics', key: 'stem' },
                { label: 'Sports & Cricket', key: 'sports' },
                { label: 'Academic & SEE', key: 'academic' },
              ].map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setFilter(tab.key)}
                  className={`px-space-md py-2 rounded-lg font-label-caps text-[11px] uppercase tracking-wider font-bold transition-all shrink-0 ${
                    filter === tab.key
                      ? 'bg-primary-container text-on-primary shadow-sm'
                      : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* 3. ARTICLES GRID */}
        <section className="w-full bg-surface py-space-4xl">
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 space-y-space-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-xl">
              {filteredArticles.map((item) => (
                <article
                  key={item.id}
                  className="bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant/30 shadow-sm flex flex-col justify-between group hover:shadow-lg transition-all duration-300"
                >
                  <div>
                    <div className="h-60 w-full overflow-hidden relative bg-surface-container">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 bg-primary-container/90 backdrop-blur-sm text-tertiary-fixed font-label-caps text-[10px] uppercase tracking-wider px-2.5 py-1 rounded font-bold">
                        {item.badge}
                      </span>
                    </div>

                    <div className="p-space-xl space-y-space-sm">
                      <div className="flex items-center gap-space-xs text-caption font-label-caps uppercase text-on-tertiary-container font-semibold">
                        <span>{item.date}</span>
                        <span>•</span>
                        <span>{item.tag}</span>
                      </div>

                      <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-on-tertiary-container transition-colors font-serif font-bold leading-snug">
                        {item.title}
                      </h3>

                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed line-clamp-3">
                        {item.summary}
                      </p>
                    </div>
                  </div>

                  <div className="p-space-xl pt-0 mt-space-sm border-t border-outline-variant/20">
                    <Link
                      to="/admissions"
                      className="pt-3 inline-flex items-center gap-1 font-label-caps text-[11px] uppercase tracking-wider text-primary font-bold hover:underline"
                    >
                      <span>Inquire Regarding Update</span>
                      <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 4. NEWSLETTER & INQUIRY NOTICE */}
        <section className="w-full bg-primary-container text-on-primary py-space-4xl">
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
            <div className="max-w-3xl mx-auto text-center space-y-space-md">
              <span className="font-label-caps text-label-caps uppercase tracking-widest text-tertiary-fixed font-bold">
                COMMUNICATIONS DESK
              </span>
              <h2 className="font-headline-xl text-headline-xl font-serif">
                Never Miss a School Notice or Event
              </h2>
              <p className="font-body-md text-surface-variant leading-relaxed">
                Receive important academic calendars, examination notices, and co-curricular updates directly to your phone or email.
              </p>
              <form
                className="flex flex-col sm:flex-row items-center justify-center gap-space-xs max-w-md mx-auto pt-space-xs"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Thank you! You will receive future notices.');
                }}
              >
                <input
                  type="text"
                  placeholder="Enter phone or email"
                  required
                  className="w-full h-11 px-4 rounded-lg bg-surface text-on-surface font-body-sm text-sm focus:outline-none focus:ring-2 focus:ring-tertiary-fixed"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto h-11 px-6 bg-tertiary-fixed hover:bg-tertiary-fixed-dim text-primary font-label-caps text-[11px] uppercase tracking-wider rounded-lg font-bold transition-colors shrink-0"
                >
                  Subscribe
                </button>
              </form>
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
            <Link className="hover:text-primary transition-colors" to="/facilities">
              Facilities
            </Link>
            <Link className="hover:text-primary transition-colors" to="/news-events">
              News &amp; Events
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

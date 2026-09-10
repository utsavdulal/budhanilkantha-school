import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PrePrimaryAcademics() {
  return (
    <div className="min-h-screen bg-surface font-body-md text-body-md text-on-surface antialiased selection:bg-tertiary-fixed selection:text-tertiary">
      <Navbar />
      <main className="w-full pt-18 sm:pt-20 bg-surface">
        <div className="flex flex-col w-full">
          {/* 1. HERO SECTION */}
          <section className="w-full bg-surface-container-lowest px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-space-3xl border-b border-outline-variant/30">
            <div className="max-w-container-max mx-auto space-y-space-xl">
              {/* Breadcrumb & Metadata */}
              <div className="flex flex-wrap items-center justify-between gap-space-sm pb-space-sm border-b border-outline-variant/20">
                <nav aria-label="Breadcrumb" className="flex items-center gap-space-2xs text-caption font-caption text-secondary">
                  <Link className="hover:text-primary transition-colors" to="/">Home</Link>
                  <span className="text-outline-variant/60">/</span>
                  <span className="text-secondary">Academics</span>
                  <span className="text-outline-variant/60">/</span>
                  <span className="text-primary font-semibold">Kids School (PG to UKG)</span>
                </nav>
                <div className="flex items-center gap-space-xs text-caption font-label-caps uppercase tracking-wider text-secondary">
                  <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim animate-pulse"></span>
                  <span>Early Childhood Development · Biratnagar-2</span>
                </div>
              </div>

              {/* Headline & Intro Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
                <div className="lg:col-span-7 space-y-space-md">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-tertiary-fixed/30 text-on-tertiary-container rounded-full text-[11px] font-label-caps uppercase tracking-widest font-bold">
                    <span className="material-symbols-outlined text-[16px]">child_care</span>
                    Kids School · Playgroup, Nursery, LKG &amp; UKG
                  </div>
                  <h1 className="font-display-hero-mobile md:font-headline-xl text-headline-xl text-primary font-serif tracking-tight leading-tight">
                    Where Little Minds Blossom with Joy &amp; Wonder.
                  </h1>
                  <p className="font-body-lead text-body-lead text-on-surface-variant leading-relaxed">
                    A magical foundation of child-centric discovery, play-way methodologies, interactive smart TV classrooms, and affectionate nurturing designed to make your child’s earliest school years joyful, safe, and academically enriching.
                  </p>
                  <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                    <Link
                      to="/admissions"
                      className="inline-flex items-center justify-center px-space-xl py-space-md bg-primary-container hover:bg-primary text-on-primary font-label-caps text-label-caps uppercase tracking-wider rounded font-bold transition-all shadow-md active:scale-95"
                    >
                      Enroll for 2081–82
                    </Link>
                    <a
                      href="tel:021514168"
                      className="inline-flex items-center justify-center px-space-lg py-space-md bg-surface hover:bg-surface-container text-primary font-label-caps text-label-caps uppercase tracking-wider rounded font-bold border border-outline-variant/40 transition-all"
                    >
                      Call Desk: 021-514168
                    </a>
                  </div>
                </div>

                {/* Right Hero Image Card */}
                <div className="lg:col-span-5">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl border border-outline-variant/30 group">
                    <img
                      src="/images/why-friendly-env.jpg"
                      alt="Happy children learning in playful modern classroom at Budhanilkantha School"
                      className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="font-label-caps text-[10px] uppercase tracking-widest bg-white/20 backdrop-blur-md px-2 py-0.5 rounded font-semibold inline-block mb-1">
                        Play-Way &amp; Smart TV Learning
                      </span>
                      <p className="font-headline-sm text-base font-semibold leading-snug">
                        Dedicated Kids' Entertainment Hall &amp; Phonics Center
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 2. THREE PILLARS: WHY PARENTS LOVE OUR KIDS SCHOOL */}
          <section className="w-full bg-surface-container-low px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-space-4xl border-b border-outline-variant/30">
            <div className="max-w-container-max mx-auto space-y-space-2xl">
              <div className="text-center max-w-2xl mx-auto space-y-space-xs">
                <span className="font-label-caps text-label-caps text-on-tertiary-container tracking-widest uppercase block font-semibold">
                  Holistic Early Care
                </span>
                <h2 className="font-headline-xl text-headline-xl text-primary tracking-tight">
                  Nurturing the Whole Child with Love &amp; Safety
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  The formative early years are crucial for cognitive agility and emotional resilience. We provide a warm, home-like sanctuary where children thrive naturally.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-xl">
                {/* Pillar 1 */}
                <div className="bg-surface p-space-xl rounded-xl border border-outline-variant/30 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div className="space-y-space-sm">
                    <div className="w-12 h-12 rounded-xl bg-primary-container/10 text-primary flex items-center justify-center">
                      <span className="material-symbols-outlined text-[28px]">volunteer_activism</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-primary">Emotional &amp; Moral Support</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Trained, empathetic educators and support staff who provide gentle one-on-one attention, encouraging self-expression, kindness, and joyful social bonds.
                    </p>
                  </div>
                  <div className="pt-space-md mt-space-md border-t border-outline-variant/20 flex items-center gap-2 text-caption text-secondary">
                    <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">verified</span>
                    <span>Low Student-to-Teacher Ratio</span>
                  </div>
                </div>

                {/* Pillar 2 */}
                <div className="bg-surface p-space-xl rounded-xl border border-outline-variant/30 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div className="space-y-space-sm">
                    <div className="w-12 h-12 rounded-xl bg-primary-container/10 text-primary flex items-center justify-center">
                      <span className="material-symbols-outlined text-[28px]">smart_display</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-primary">Interactive TV &amp; Play-Way</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Transforming numeracy, rhymes, and phonics into vibrant animated stories, Montessori sensory blocks, and engaging musical movement sessions.
                    </p>
                  </div>
                  <div className="pt-space-md mt-space-md border-t border-outline-variant/20 flex items-center gap-2 text-caption text-secondary">
                    <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">verified</span>
                    <span>Montessori Play Kits &amp; Smart Displays</span>
                  </div>
                </div>

                {/* Pillar 3 */}
                <div className="bg-surface p-space-xl rounded-xl border border-outline-variant/30 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div className="space-y-space-sm">
                    <div className="w-12 h-12 rounded-xl bg-primary-container/10 text-primary flex items-center justify-center">
                      <span className="material-symbols-outlined text-[28px]">shield_with_heart</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-primary">Safe &amp; Secure Environment</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Child-proofed activity areas, dedicated hygienic washrooms, round-the-clock campus supervision, and safe supervised bus transportation across Biratnagar.
                    </p>
                  </div>
                  <div className="pt-space-md mt-space-md border-t border-outline-variant/20 flex items-center gap-2 text-caption text-secondary">
                    <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">verified</span>
                    <span>100% Supervised Campus &amp; Fleet</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 3. DAILY LEARNING EXPLORATIONS */}
          <section className="w-full bg-surface px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-space-4xl">
            <div className="max-w-container-max mx-auto space-y-space-2xl">
              <div className="text-center max-w-2xl mx-auto space-y-space-xs">
                <span className="font-label-caps text-label-caps text-on-tertiary-container tracking-widest uppercase block font-semibold">
                  Curriculum Elements
                </span>
                <h2 className="font-headline-xl text-headline-xl text-primary tracking-tight">
                  What Children Discover &amp; Explore Everyday
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Traditional learning transformed into fun, bite-sized explorations tailored to natural curiosity and youthful energy.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-space-lg">
                {[
                  {
                    icon: 'translate',
                    title: 'Phonics & Speech',
                    desc: 'Letter recognition, phonetic sounds, storytelling sessions, and early bilingual vocabulary in English and Nepali.',
                  },
                  {
                    icon: 'calculate',
                    title: 'Numbers & Spatial Logic',
                    desc: 'Counting with colorful abacus frames, geometric pattern recognition, shape sorting, and puzzle-solving.',
                  },
                  {
                    icon: 'palette',
                    title: 'Creative Arts & Craft',
                    desc: 'Crayon coloring, finger painting, clay modeling, and paper craft to strengthen fine motor coordination.',
                  },
                  {
                    icon: 'music_note',
                    title: 'Rhymes & Rhythm',
                    desc: 'Interactive action songs, nursery rhymes, dance movement, and percussion instruments to build rhythm.',
                  },
                  {
                    icon: 'eco',
                    title: 'Nature & Senses',
                    desc: 'Gardening corners, tactile exploration of textures, animal identification, and environmental appreciation.',
                  },
                  {
                    icon: 'groups',
                    title: 'Social & Dining Etiquette',
                    desc: 'Sharing snacks, tidying up play stations, saying polite greetings, and building lifelong early friendships.',
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-space-lg rounded-xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/40 transition-colors flex items-start gap-space-md group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary-container text-tertiary-fixed flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-headline-sm text-base font-bold text-primary mb-1">{item.title}</h4>
                      <p className="font-caption text-caption text-on-surface-variant leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 4. GROWTH MILESTONES: STAGE BY STAGE */}
          <section className="w-full bg-surface-container-lowest px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-space-4xl border-t border-outline-variant/30">
            <div className="max-w-container-max mx-auto space-y-space-2xl">
              <div className="text-center max-w-2xl mx-auto space-y-space-xs">
                <span className="font-label-caps text-label-caps text-on-tertiary-container tracking-widest uppercase block font-semibold">
                  Developmental Pathway
                </span>
                <h2 className="font-headline-xl text-headline-xl text-primary tracking-tight">
                  Your Child's Growth Milestones
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  How we gently guide your child from their first day of school to primary school readiness.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-space-lg">
                {[
                  {
                    step: '01',
                    stage: 'Playgroup (PG)',
                    age: 'Age 2.5 – 3.5 Years',
                    summary: 'Focus on sensorimotor skills, speech stimulation, social adjustment away from home, and fun games in the Kids Entertainment Hall.',
                  },
                  {
                    step: '02',
                    stage: 'Nursery',
                    age: 'Age 3.5 – 4.5 Years',
                    summary: 'Introduction to letter tracing, crayon grip, basic color recognition, active listening during story hours, and routine building.',
                  },
                  {
                    step: '03',
                    stage: 'Lower KG (LKG)',
                    age: 'Age 4.5 – 5.5 Years',
                    summary: 'Forming two-letter words, counting up to 50, simple science observations, sharing habits, and smart TV audio-visual exercises.',
                  },
                  {
                    step: '04',
                    stage: 'Upper KG (UKG)',
                    age: 'Age 5.5 – 6.5 Years',
                    summary: 'Independent sentence reading, basic addition & subtraction, neat handwriting initiation, and seamless readiness for Grade 1.',
                  },
                ].map((milestone) => (
                  <div
                    key={milestone.step}
                    className="p-space-lg rounded-xl bg-surface-container-low border border-outline-variant/30 relative flex flex-col justify-between"
                  >
                    <div className="space-y-space-sm">
                      <div className="flex items-center justify-between pb-2 border-b border-outline-variant/20">
                        <span className="font-headline-lg text-headline-lg font-serif text-primary/30">{milestone.step}</span>
                        <span className="font-label-caps text-[10px] uppercase font-bold text-secondary bg-surface px-2 py-0.5 rounded border border-outline-variant/30">
                          {milestone.age}
                        </span>
                      </div>
                      <h4 className="font-headline-sm text-base font-bold text-primary">{milestone.stage}</h4>
                      <p className="font-caption text-caption text-on-surface-variant leading-relaxed">
                        {milestone.summary}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 5. CALL TO ACTION: ADMISSIONS OPEN */}
          <section className="w-full bg-primary text-on-primary px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-space-4xl">
            <div className="max-w-4xl mx-auto text-center space-y-space-lg">
              <span className="font-label-caps text-label-caps uppercase tracking-[0.2em] text-tertiary-fixed font-semibold block">
                Enrollment Open · Session 2081–2082
              </span>
              <h2 className="font-headline-xl text-headline-xl text-on-primary font-serif">
                Begin Your Child's Joyful Journey with Budhanilkantha.
              </h2>
              <p className="font-body-lead text-body-lead text-primary-fixed max-w-2xl mx-auto leading-relaxed">
                Admissions for Playgroup, Nursery, LKG, and UKG are now welcoming young learners. Visit our Shankarpur campus and see our vibrant Kids' Hall and smart classrooms firsthand!
              </p>
              <div className="pt-space-md flex flex-wrap items-center justify-center gap-space-md">
                <Link
                  to="/admissions"
                  className="px-space-xl py-space-md bg-tertiary-fixed hover:bg-tertiary-fixed-dim text-on-tertiary-fixed font-label-caps text-label-caps uppercase tracking-wider rounded font-bold transition-all shadow-lg"
                >
                  Start Online Admission
                </Link>
                <Link
                  to="/admissions"
                  className="px-space-xl py-space-md bg-primary-container hover:bg-primary text-on-primary font-label-caps text-label-caps uppercase tracking-wider rounded font-bold border border-primary-fixed/30 transition-all"
                >
                  Schedule Campus Tour
                </Link>
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

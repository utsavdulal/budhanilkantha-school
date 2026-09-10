import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PrimaryAcademics() {
  const [activeTab, setActiveTab] = useState<'math' | 'science' | 'english' | 'nepali'>('math');
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);

  const subjectData = {
    math: {
      title: 'Mathematics & Logical Reasoning',
      badge: 'Analytical Grounding',
      icon: 'calculate',
      desc: 'Building rock-solid foundations in arithmetic, fractions, geometry, word problem solving, and mental math tricks.',
      topics: ['Number Systems & Place Values', 'Multiplication & Division Fluency', 'Basic Geometry & Angles', 'Speed Math & Abacus Logic'],
    },
    science: {
      title: 'Integrated Science & Discovery',
      badge: 'Hands-on Experiments',
      icon: 'science',
      desc: 'Encouraging observational inquiry into plants, animals, energy, solar system, matter, and simple laboratory demonstrations.',
      topics: ['Living Organisms & Plant Life', 'States of Matter & Simple Machines', 'Human Body Systems & Hygiene', 'Weather, Earth & Space'],
    },
    english: {
      title: 'English Language & Literature',
      badge: 'Fluency & Writing',
      icon: 'menu_book',
      desc: 'Cultivating expressive spoken English, neat cursive penmanship, reading comprehension, grammar accuracy, and creative essay writing.',
      topics: ['Grammar & Sentence Construction', 'Reading Fluency & Book Reviews', 'Creative Story & Paragraph Writing', 'Public Speaking & Recitation'],
    },
    nepali: {
      title: 'नेपाली भाषा र व्याकरण',
      badge: 'भाषिक शुद्धता',
      icon: 'translate',
      desc: 'मातृभाषाको शुद्ध उच्चारण, सुन्दर हस्तलेखन, मौलिक साहित्य र नेपाली व्याकरणमा विशेष जोड।',
      topics: ['वर्णविन्यास र व्याकरण नियम', 'शुद्ध उच्चारण र पठन अभ्यास', 'कविता वाचन र संवाद', 'निबन्ध र रचनात्मक लेखन'],
    },
  };

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
                  <span className="text-primary font-semibold">Primary Level (Grade 1 to 5)</span>
                </nav>
                <div className="flex items-center gap-space-xs text-caption font-label-caps uppercase tracking-wider text-secondary">
                  <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim animate-pulse"></span>
                  <span>Conceptual Mastery &amp; Super Learning · Biratnagar-2</span>
                </div>
              </div>

              {/* Headline & Intro Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
                <div className="lg:col-span-7 space-y-space-md">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-tertiary-fixed/30 text-on-tertiary-container rounded-full text-[11px] font-label-caps uppercase tracking-widest font-bold">
                    <span className="material-symbols-outlined text-[16px]">menu_book</span>
                    Primary Level · Grades 1 through 5
                  </div>
                  <h1 className="font-display-hero-mobile md:font-headline-xl text-headline-xl text-primary font-serif tracking-tight leading-tight">
                    Developing Critical Thinkers &amp; Confident Learners.
                  </h1>
                  <p className="font-body-lead text-body-lead text-on-surface-variant leading-relaxed">
                    “Foundations laid strong, friendships lifelong.” Classes 1 to 5 bridge joyful early learning to analytical understanding, fortified by our unique Super Learning enrichment classes, bilingual fluency, and dedicated computer lab sessions.
                  </p>
                  <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                    <Link
                      to="/admissions"
                      className="inline-flex items-center justify-center px-space-xl py-space-md bg-primary-container hover:bg-primary text-on-primary font-label-caps text-label-caps uppercase tracking-wider rounded font-bold transition-all shadow-md active:scale-95"
                    >
                      Apply for Admission
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
                      src="/images/why-future-ready.jpg"
                      alt="Primary students collaborating in hands-on science and math workshop at Budhanilkantha School"
                      className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="font-label-caps text-[10px] uppercase tracking-widest bg-white/20 backdrop-blur-md px-2 py-0.5 rounded font-semibold inline-block mb-1">
                        Super Learning &amp; Computer Lab
                      </span>
                      <p className="font-headline-sm text-base font-semibold leading-snug">
                        Conceptual Clarity &amp; Remedial Support
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Metrics Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-md pt-space-md">
                {[
                  { metric: '5 Years', label: 'Foundational Span', sub: 'Grades 1 to 5' },
                  { metric: '8+ Core', label: 'Integrated Subjects', sub: 'National Curriculum' },
                  { metric: '100%', label: 'Super Learning', sub: 'Remedial & Enrichment' },
                  { metric: 'ICT & Labs', label: 'Computer Lab Access', sub: 'From Grade 1' },
                ].map((stat, i) => (
                  <div key={i} className="p-space-md bg-surface-container-low rounded-xl border border-outline-variant/30 text-center">
                    <span className="font-headline-md text-headline-md text-primary font-serif font-bold block">{stat.metric}</span>
                    <span className="font-label-caps text-[11px] uppercase font-bold text-on-surface-variant block mt-0.5">{stat.label}</span>
                    <span className="text-[10px] text-secondary">{stat.sub}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 2. ACADEMIC PILLARS */}
          <section className="w-full bg-surface px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-space-4xl border-b border-outline-variant/30">
            <div className="max-w-container-max mx-auto space-y-space-2xl">
              <div className="text-center max-w-2xl mx-auto space-y-space-xs">
                <span className="font-label-caps text-label-caps text-on-tertiary-container tracking-widest uppercase block font-semibold">
                  Pedagogical Distinctives
                </span>
                <h2 className="font-headline-xl text-headline-xl text-primary tracking-tight">
                  A Balanced Bridge from Literacy to Critical Inquiry
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Classes 1–5 represent a pivotal stage where students develop independent study habits, deep conceptual understanding, and problem-solving stamina.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-xl">
                <div className="bg-surface-container-low p-space-xl rounded-xl border border-outline-variant/30 shadow-sm flex flex-col justify-between">
                  <div className="space-y-space-sm">
                    <div className="w-12 h-12 rounded-xl bg-primary-container/10 text-primary flex items-center justify-center">
                      <span className="material-symbols-outlined text-[28px]">psychology</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-primary">Super Learning Classes</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Structured after-school enrichment for high-achieving pupils tackling math puzzles, and targeted remedial clinics ensuring no child gets left behind.
                    </p>
                  </div>
                  <div className="pt-space-md mt-space-md border-t border-outline-variant/20 flex items-center gap-2 text-caption text-secondary">
                    <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">verified</span>
                    <span>Individual Care &amp; Mentorship</span>
                  </div>
                </div>

                <div className="bg-surface-container-low p-space-xl rounded-xl border border-outline-variant/30 shadow-sm flex flex-col justify-between">
                  <div className="space-y-space-sm">
                    <div className="w-12 h-12 rounded-xl bg-primary-container/10 text-primary flex items-center justify-center">
                      <span className="material-symbols-outlined text-[28px]">computer</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-primary">Computer Lab &amp; Coding</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Weekly hands-on computing periods introducing keyboard typing proficiency, educational software, basic block logic, and digital ethics.
                    </p>
                  </div>
                  <div className="pt-space-md mt-space-md border-t border-outline-variant/20 flex items-center gap-2 text-caption text-secondary">
                    <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">verified</span>
                    <span>Modern Computer Lab Sessions</span>
                  </div>
                </div>

                <div className="bg-surface-container-low p-space-xl rounded-xl border border-outline-variant/30 shadow-sm flex flex-col justify-between">
                  <div className="space-y-space-sm">
                    <div className="w-12 h-12 rounded-xl bg-primary-container/10 text-primary flex items-center justify-center">
                      <span className="material-symbols-outlined text-[28px]">edit_note</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-primary">Neat Handwriting &amp; Moral Values</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Rigorous emphasis on neat cursive handwriting in English and Devnagari script, paired with daily moral lessons in honesty, respect, and discipline.
                    </p>
                  </div>
                  <div className="pt-space-md mt-space-md border-t border-outline-variant/20 flex items-center gap-2 text-caption text-secondary">
                    <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">verified</span>
                    <span>Character &amp; Penmanship Focus</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 3. INTERACTIVE SUBJECT EXPLORATION */}
          <section className="w-full bg-surface-container-low px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-space-4xl">
            <div className="max-w-container-max mx-auto space-y-space-2xl">
              <div className="text-center max-w-2xl mx-auto space-y-space-xs">
                <span className="font-label-caps text-label-caps text-on-tertiary-container tracking-widest uppercase block font-semibold">
                  Comprehensive Syllabus
                </span>
                <h2 className="font-headline-xl text-headline-xl text-primary tracking-tight">
                  Core Curriculum Subjects (Grade 1–5)
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Explore how our primary faculty turns national curriculum standards into engaging classroom experiences.
                </p>
              </div>

              {/* Subject Tabs */}
              <div className="flex flex-wrap items-center justify-center gap-2">
                {[
                  { key: 'math', label: 'Mathematics', icon: 'calculate' },
                  { key: 'science', label: 'Science & Nature', icon: 'science' },
                  { key: 'english', label: 'English Literature', icon: 'menu_book' },
                  { key: 'nepali', label: 'नेपाली भाषा', icon: 'translate' },
                ].map((tab) => (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setActiveTab(tab.key as any)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-body-sm font-bold transition-all ${
                      activeTab === tab.key
                        ? 'bg-primary text-on-primary shadow-md'
                        : 'bg-surface hover:bg-surface-container text-on-surface border border-outline-variant/30'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[18px]">{tab.icon}</span>
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Tab Content Card */}
              <div className="bg-surface p-space-xl sm:p-space-2xl rounded-2xl border border-outline-variant/40 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-space-xl items-center">
                  <div className="md:col-span-7 space-y-space-md">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container text-secondary rounded font-label-caps text-[11px] uppercase font-bold">
                      <span className="material-symbols-outlined text-[16px]">{subjectData[activeTab].icon}</span>
                      {subjectData[activeTab].badge}
                    </div>
                    <h3 className="font-headline-lg text-headline-lg text-primary font-serif">
                      {subjectData[activeTab].title}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {subjectData[activeTab].desc}
                    </p>
                  </div>
                  <div className="md:col-span-5 bg-surface-container-low p-space-lg rounded-xl border border-outline-variant/30 space-y-space-sm">
                    <h4 className="font-label-caps text-[11px] uppercase tracking-wider text-primary font-bold">
                      Key Syllabus Modules:
                    </h4>
                    <ul className="space-y-2">
                      {subjectData[activeTab].topics.map((t, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-body-sm text-secondary font-medium">
                          <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">check_circle</span>
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 4. EVALUATION SYSTEM & EXAM STRUCTURE */}
          <section className="w-full bg-surface px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-space-4xl border-t border-outline-variant/30">
            <div className="max-w-container-max mx-auto space-y-space-2xl">
              <div className="text-center max-w-2xl mx-auto space-y-space-xs">
                <span className="font-label-caps text-label-caps text-on-tertiary-container tracking-widest uppercase block font-semibold">
                  Nepal CDC Framework
                </span>
                <h2 className="font-headline-xl text-headline-xl text-primary tracking-tight">
                  Continuous Evaluation &amp; Term System
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  We balance diagnostic internal evaluations, project submissions, and periodic term exams to ensure continuous growth without exam stress.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg text-center">
                <div className="p-space-xl rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-2">
                  <span className="font-headline-xl text-headline-xl text-primary font-serif font-bold">25%</span>
                  <h4 className="font-headline-sm text-base font-bold text-primary">First Term Examination</h4>
                  <p className="font-label-caps text-[11px] uppercase text-secondary">Bhadra – Ashwin</p>
                  <p className="font-caption text-caption text-on-surface-variant pt-2 border-t border-outline-variant/20">
                    Covers first-quarter foundational units, monthly tests &amp; project portfolio.
                  </p>
                </div>

                <div className="p-space-xl rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-2">
                  <span className="font-headline-xl text-headline-xl text-primary font-serif font-bold">25%</span>
                  <h4 className="font-headline-sm text-base font-bold text-primary">Second Term Examination</h4>
                  <p className="font-label-caps text-[11px] uppercase text-secondary">Poush – Magh</p>
                  <p className="font-caption text-caption text-on-surface-variant pt-2 border-t border-outline-variant/20">
                    Mid-term diagnostic assessment, science experiments &amp; reading comprehension.
                  </p>
                </div>

                <div className="p-space-xl rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-2">
                  <span className="font-headline-xl text-headline-xl text-primary font-serif font-bold">50%</span>
                  <h4 className="font-headline-sm text-base font-bold text-primary">Final Annual Examination</h4>
                  <p className="font-label-caps text-[11px] uppercase text-secondary">Chaitra</p>
                  <p className="font-caption text-caption text-on-surface-variant pt-2 border-t border-outline-variant/20">
                    Comprehensive annual mastery check, practical marks &amp; grade progression.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 5. PLAY & LEARN QUIZ CORNER */}
          <section className="w-full bg-surface-container-lowest px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-space-4xl border-t border-outline-variant/30">
            <div className="max-w-3xl mx-auto bg-surface p-space-xl sm:p-space-2xl rounded-2xl border border-outline-variant/40 shadow-sm space-y-space-md">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[28px] text-tertiary-fixed-dim">psychology</span>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-primary">Primary Quick Brain Quiz!</h3>
                  <p className="font-caption text-caption text-secondary">A glimpse of our Super Learning problem-solving teasers.</p>
                </div>
              </div>
              <div className="bg-surface-container-low p-space-md rounded-xl space-y-space-sm">
                <p className="font-body-sm font-bold text-primary">
                  Question: If a school bus travels 15 km in 30 minutes, how many km will it travel in 1 hour at the same speed?
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 1, text: '20 km', correct: false },
                    { id: 2, text: '30 km', correct: true },
                    { id: 3, text: '45 km', correct: false },
                    { id: 4, text: '60 km', correct: false },
                  ].map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setQuizAnswer(option.id)}
                      className={`py-2 px-3 rounded-lg text-body-sm font-bold border transition-all ${
                        quizAnswer === option.id
                          ? option.correct
                            ? 'bg-green-600 text-white border-green-600'
                            : 'bg-red-600 text-white border-red-600'
                          : 'bg-surface hover:bg-surface-container border-outline-variant/30 text-on-surface'
                      }`}
                    >
                      {option.text}
                    </button>
                  ))}
                </div>
                {quizAnswer === 2 && (
                  <p className="text-caption font-bold text-green-700 animate-fadeIn">
                    ✓ Brilliant! 15 km in 30 mins = 30 km in 1 hour (Speed = 30 km/h).
                  </p>
                )}
                {quizAnswer !== null && quizAnswer !== 2 && (
                  <p className="text-caption font-bold text-red-600 animate-fadeIn">
                    ✗ Try again! Hint: 1 hour has two 30-minute blocks.
                  </p>
                )}
              </div>
            </div>
          </section>

          {/* 6. CALL TO ACTION */}
          <section className="w-full bg-primary text-on-primary px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-space-4xl">
            <div className="max-w-4xl mx-auto text-center space-y-space-lg">
              <span className="font-label-caps text-label-caps uppercase tracking-[0.2em] text-tertiary-fixed font-semibold block">
                Admissions Open · Session 2081–2082
              </span>
              <h2 className="font-headline-xl text-headline-xl text-on-primary font-serif">
                Secure Your Child's Spot in Grades 1 through 5.
              </h2>
              <p className="font-body-lead text-body-lead text-primary-fixed max-w-2xl mx-auto leading-relaxed">
                Empower your child with strong mathematical foundations, bilingual proficiency, and critical curiosity. Contact our Shankarpur admissions desk today.
              </p>
              <div className="pt-space-md flex flex-wrap items-center justify-center gap-space-md">
                <Link
                  to="/admissions"
                  className="px-space-xl py-space-md bg-tertiary-fixed hover:bg-tertiary-fixed-dim text-on-tertiary-fixed font-label-caps text-label-caps uppercase tracking-wider rounded font-bold transition-all shadow-lg"
                >
                  Apply Online Now
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

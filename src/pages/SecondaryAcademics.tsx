import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function SecondaryAcademics() {
  const [selectedSubjectTab, setSelectedSubjectTab] = useState<'compulsory' | 'optional'>('compulsory');

  const compulsorySubjects = [
    { code: 'NEP 001', name: 'Compulsory Nepali (नेपाली)', theory: 75, practical: 25, desc: 'Advanced literature, analytical essay writing, Devnagari grammar, and national literary discourse.' },
    { code: 'ENG 002', name: 'Compulsory English', theory: 75, practical: 25, desc: 'Complex comprehension, critical rhetoric, formal essays, creative writing, and spoken debate.' },
    { code: 'MTH 003', name: 'Compulsory Mathematics', theory: 75, practical: 25, desc: 'Algebra, Euclidean geometry, coordinate geometry, commercial arithmetic, trigonometry, and statistics.' },
    { code: 'SCI 004', name: 'Science & Technology', theory: 75, practical: 25, desc: 'Physics (Mechanics, Electricity, Optics), Chemistry (Periodic Table, Reactions), Biology (Genetics, Ecology), and Astronomy.' },
    { code: 'SOC 005', name: 'Social Studies & Life Skills', theory: 75, practical: 25, desc: 'Nepalese history, constitutional law, international relations, geography, and contemporary societal issues.' },
  ];

  const optionalSubjects = [
    { code: 'OPT 009', name: 'Optional Mathematics', theory: 100, practical: 0, desc: 'Matrices, vectors, calculus, trigonometry proofs, and coordinate geometry for engineering & tech aspirants.' },
    { code: 'CMP 006', name: 'Computer Science', theory: 50, practical: 50, desc: 'QBASIC/C programming, HTML/CSS web design, computer architecture, networking, and micro-controller basics.' },
    { code: 'ACC 007', name: 'Accountancy & Office Practice', theory: 75, practical: 25, desc: 'Double-entry bookkeeping, trial balance, final accounts, banking procedures, and audit principles for business tracks.' },
    { code: 'HPE 008', name: 'Health & Physical Education', theory: 50, practical: 50, desc: 'Community health, sports physiology, nutrition, first-aid response, and physical fitness conditioning.' },
  ];

  return (
    <div className="min-h-screen bg-surface font-body-md text-body-md text-on-surface antialiased selection:bg-tertiary-fixed selection:text-tertiary">
      <Navbar />
      <main className="w-full pt-28 bg-surface">
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
                  <span className="text-primary font-semibold">Secondary Level (Grade 6 to 10)</span>
                </nav>
                <div className="flex items-center gap-space-xs text-caption font-label-caps uppercase tracking-wider text-secondary">
                  <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim animate-pulse"></span>
                  <span>SEE Board Distinction · Science &amp; Robotics Labs</span>
                </div>
              </div>

              {/* Headline & Intro Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
                <div className="lg:col-span-7 space-y-space-md">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-tertiary-fixed/30 text-on-tertiary-container rounded-full text-[11px] font-label-caps uppercase tracking-widest font-bold">
                    <span className="material-symbols-outlined text-[16px]">school</span>
                    Secondary Level · Grades 6 through 10
                  </div>
                  <h1 className="font-display-hero-mobile md:font-headline-xl text-headline-xl text-primary font-serif tracking-tight leading-tight">
                    Shaping Futures with Academic Distinction &amp; Scientific Inquiry.
                  </h1>
                  <p className="font-body-lead text-body-lead text-on-surface-variant leading-relaxed">
                    Our rigorous secondary curriculum empowers middle and senior scholars with analytical mastery, state-of-the-art physics, chemistry, and robotics laboratories, comprehensive SEE board preparation, and proven track records of top national distinction.
                  </p>
                  <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                    <Link
                      to="/admissions"
                      className="inline-flex items-center justify-center px-space-xl py-space-md bg-primary-container hover:bg-primary text-on-primary font-label-caps text-label-caps uppercase tracking-wider rounded font-bold transition-all shadow-md active:scale-95"
                    >
                      Apply for Grade 6–10
                    </Link>
                    <a
                      href="tel:021514168"
                      className="inline-flex items-center justify-center px-space-lg py-space-md bg-surface hover:bg-surface-container text-primary font-label-caps text-label-caps uppercase tracking-wider rounded font-bold border border-outline-variant/40 transition-all"
                    >
                      Call Desk: 021-514168
                    </a>
                  </div>
                </div>

                {/* Right Hero Image Card: Robotics Lab */}
                <div className="lg:col-span-5">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl border border-outline-variant/30 group">
                    <img
                      src="/images/robotics-lab.jpg"
                      alt="Students working with micro-controllers and robotics kits in Budhanilkantha Robotics Lab"
                      className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="font-label-caps text-[10px] uppercase tracking-widest bg-white/20 backdrop-blur-md px-2 py-0.5 rounded font-semibold inline-block mb-1">
                        Applied STEM &amp; Innovation
                      </span>
                      <p className="font-headline-sm text-base font-semibold leading-snug">
                        Modern Science, Robotics &amp; Digital Computer Labs
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Distinction Metrics Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-md pt-space-md">
                {[
                  { metric: '100%', label: 'SEE Board Pass Rate', sub: 'Decades of Distinction' },
                  { metric: 'Top A+', label: 'GPA Achievements', sub: 'Outstanding SEE Scores' },
                  { metric: 'STEM & AI', label: 'Robotics & Coding', sub: 'Practical Electronics' },
                  { metric: 'Global', label: 'NASA & Asian Camp', sub: 'International Exposure' },
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

          {/* 2. FOUR PREPARATION STRATEGIES FOR SEE BOARD SUCCESS */}
          <section className="w-full bg-surface px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-space-4xl border-b border-outline-variant/30">
            <div className="max-w-container-max mx-auto space-y-space-2xl">
              <div className="text-center max-w-2xl mx-auto space-y-space-xs">
                <span className="font-label-caps text-label-caps text-on-tertiary-container tracking-widest uppercase block font-semibold">
                  Board Exam Excellence
                </span>
                <h2 className="font-headline-xl text-headline-xl text-primary tracking-tight">
                  Our Proven SEE Preparation Strategy
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  How Budhanilkantha Secondary School consistently guarantees 100% board success and top distinction year after year.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg">
                {[
                  {
                    num: '01',
                    title: 'Concept Mastery',
                    desc: 'Deep theoretical grounding in core formulas, scientific laws, and critical essay argumentation rather than rote memorization.',
                  },
                  {
                    num: '02',
                    title: 'Mock Board Papers',
                    desc: 'Frequent time-bound model test papers simulating real NEB/SEE examination conditions with strict marking rubrics.',
                  },
                  {
                    num: '03',
                    title: 'Revision Clinics',
                    desc: 'Targeted morning and evening revision sessions focusing on past questions, high-frequency topics, and speed calculation.',
                  },
                  {
                    num: '04',
                    title: '1-on-1 Faculty Mentoring',
                    desc: 'Individual academic counseling and stress-free motivational guidance by experienced subject department heads.',
                  },
                ].map((strat) => (
                  <div
                    key={strat.num}
                    className="p-space-xl rounded-xl bg-surface-container-low border border-outline-variant/30 relative flex flex-col justify-between hover:shadow-md transition-shadow"
                  >
                    <div className="space-y-space-sm">
                      <span className="font-headline-xl text-headline-xl font-serif text-primary/30 font-bold block">{strat.num}</span>
                      <h3 className="font-headline-sm text-lg font-bold text-primary">{strat.title}</h3>
                      <p className="font-caption text-caption text-on-surface-variant leading-relaxed">{strat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 3. SYLLABUS MATRIX: COMPULSORY & OPTIONAL SUBJECTS */}
          <section className="w-full bg-surface-container-low px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-space-4xl">
            <div className="max-w-container-max mx-auto space-y-space-2xl">
              <div className="text-center max-w-2xl mx-auto space-y-space-xs">
                <span className="font-label-caps text-label-caps text-on-tertiary-container tracking-widest uppercase block font-semibold">
                  Nepal CDC / NEB Curriculum
                </span>
                <h2 className="font-headline-xl text-headline-xl text-primary tracking-tight">
                  SEE Curriculum Subjects (Grades 9 &amp; 10)
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Detailed breakdown of credit weights, codes, and theory/practical evaluation units.
                </p>
              </div>

              {/* Switch Buttons */}
              <div className="flex items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedSubjectTab('compulsory')}
                  className={`px-6 py-2.5 rounded-lg text-body-sm font-bold transition-all ${
                    selectedSubjectTab === 'compulsory'
                      ? 'bg-primary text-on-primary shadow-md'
                      : 'bg-surface hover:bg-surface-container text-on-surface border border-outline-variant/30'
                  }`}
                >
                  Compulsory Subjects (5 Core)
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedSubjectTab('optional')}
                  className={`px-6 py-2.5 rounded-lg text-body-sm font-bold transition-all ${
                    selectedSubjectTab === 'optional'
                      ? 'bg-primary text-on-primary shadow-md'
                      : 'bg-surface hover:bg-surface-container text-on-surface border border-outline-variant/30'
                  }`}
                >
                  Optional Electives (Opt Math, Comp, Acc)
                </button>
              </div>

              {/* Table / Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
                {(selectedSubjectTab === 'compulsory' ? compulsorySubjects : optionalSubjects).map((sub) => (
                  <div
                    key={sub.code}
                    className="p-space-xl rounded-2xl bg-surface border border-outline-variant/40 shadow-sm flex flex-col justify-between"
                  >
                    <div className="space-y-space-xs">
                      <div className="flex items-center justify-between pb-2 border-b border-outline-variant/20">
                        <span className="font-label-caps text-[11px] uppercase font-bold text-primary bg-surface-container px-2 py-0.5 rounded">
                          {sub.code}
                        </span>
                        <span className="font-label-caps text-[11px] uppercase font-bold text-secondary">
                          Theory: {sub.theory} + Practical: {sub.practical}
                        </span>
                      </div>
                      <h4 className="font-headline-sm text-lg font-bold text-primary pt-1">{sub.name}</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">{sub.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 4. SCIENCE & ROBOTICS LABORATORIES */}
          <section className="w-full bg-surface px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-space-4xl border-t border-outline-variant/30">
            <div className="max-w-container-max mx-auto space-y-space-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
                <div className="lg:col-span-6 space-y-space-md">
                  <span className="font-label-caps text-label-caps text-on-tertiary-container tracking-widest uppercase block font-semibold">
                    Hands-On Practical Infrastructure
                  </span>
                  <h2 className="font-headline-xl text-headline-xl text-primary tracking-tight font-serif">
                    Advanced Physics, Chemistry, Biology &amp; Robotics Labs.
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Science is best absorbed through discovery. At Budhanilkantha Secondary School, students perform structured weekly experiments with genuine apparatus, chemical reagents, biological compound microscopes, and electronic micro-controllers.
                  </p>
                  <ul className="space-y-2 pt-space-xs">
                    {[
                      'Individual laboratory work stations with protective safety gear',
                      'Dedicated robotics micro-controller breadboards and coding kits',
                      'High-speed optical fiber computer laboratory with 1-to-1 workstation access',
                      '250-seat Audio-Visual digital seminar auditorium for scientific presentations',
                    ].map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-body-sm text-secondary font-medium">
                        <span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim shrink-0">check_circle</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  <div className="rounded-xl overflow-hidden shadow-md border border-outline-variant/30">
                    <img
                      src="/images/robotics-lab.jpg"
                      alt="Budhanilkantha Robotics & Electronics Lab"
                      className="w-full h-56 object-cover"
                    />
                    <div className="p-3 bg-surface-container-low text-xs font-semibold text-primary">
                      Robotics &amp; Micro-Controller Lab
                    </div>
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-md border border-outline-variant/30">
                    <img
                      src="/images/enrollment-students.jpg"
                      alt="Budhanilkantha Campus Students"
                      className="w-full h-56 object-cover"
                    />
                    <div className="p-3 bg-surface-container-low text-xs font-semibold text-primary">
                      Secondary Student Scholars
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 5. CALL TO ACTION */}
          <section className="w-full bg-primary text-on-primary px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-space-4xl">
            <div className="max-w-4xl mx-auto text-center space-y-space-lg">
              <span className="font-label-caps text-label-caps uppercase tracking-[0.2em] text-tertiary-fixed font-semibold block">
                Secondary Admissions · Grades 6 through 10
              </span>
              <h2 className="font-headline-xl text-headline-xl text-on-primary font-serif">
                Join a Proven Tradition of Board Exam Distinction.
              </h2>
              <p className="font-body-lead text-body-lead text-primary-fixed max-w-2xl mx-auto leading-relaxed">
                Give your child the analytical rigor, robotics exposure, and faculty guidance required to conquer the SEE examination with top distinction.
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
                  Schedule Campus Visit
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="w-full bg-surface-container-low border-t border-outline-variant/30 text-on-surface py-space-3xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
        <div className="max-w-container-max mx-auto flex flex-col sm:flex-row items-center justify-between gap-space-md text-caption text-secondary">
          <div className="flex items-center gap-2">
            <span className="font-bold text-primary">Budhanilkantha Secondary English School</span>
            <span>· Shankarpur, Biratnagar-2</span>
          </div>
          <div className="flex items-center gap-space-md font-medium">
            <Link to="/academics/pre-primary" className="hover:text-primary">Kids School (PG–UKG)</Link>
            <span>•</span>
            <Link to="/academics/primary" className="hover:text-primary">Primary Level (1–5)</Link>
            <span>•</span>
            <Link to="/admissions" className="text-primary font-bold hover:underline">Admissions</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

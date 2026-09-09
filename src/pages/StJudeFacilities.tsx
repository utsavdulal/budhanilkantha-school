import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function StJudeFacilities() {
  const [activeFilter, setActiveFilter] = useState('all');

  const facilities = [
    {
      id: 'auditorium',
      category: 'auditorium',
      title: '250-Seat Digital Conference & Projector Hall',
      subtitle: 'Acoustically Treated Audio-Visual Auditorium',
      description:
        'A state-of-the-art multimedia conference hall equipped with high-definition digital projection, surround sound acoustics, and presentation podiums. Hosts school-wide assemblies, academic seminars, guest lectures, parent orientations, and cultural performances.',
      highlights: ['250 Cushioned Auditorium Seats', 'HD Laser Projector & Cinema Sound', 'Uninterrupted Generator Power Backup', 'Acoustic Wall Treatment'],
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDJafTI1h_wxcTGMbWoqykqDwyaRJ3gcD1prgRqxuImLKmo6LmI13lt8FatGr_V61Ho5p1aQKNJoR0PPtMqM4dcBwBbmMBL5Z7ONgQS0im28JNR4EGF6nyo6KuU2z0lzV0OmEtlUITifBB6NrwOCHAzw5meNLN-JCGgCdWlOe5Ot9D2dNeX8Qj8iPpLM5mWDIKWaL3_Kk7KQpH0Fvke2macC7SkZNSD9IoTrRQV2alegivSIINYkLpFyw',
      tag: 'Audiovisual Hub',
    },
    {
      id: 'science-robotics-lab',
      category: 'labs',
      title: 'Science & Robotics Innovation Lab',
      subtitle: 'Hands-On Physics, Chemistry, Biology & Micro-Controllers',
      description:
        'Comprehensive empirical discovery facility outfitted with precision microscopes, chemical reagents, physics measurement benches, Arduino microcontrollers, and robotics breadboards. Home to our championship-winning robotics club.',
      highlights: ['Individual Workstations with Safety Gear', 'Arduino, Raspberry Pi & Sensor Toolkits', 'National Competition Prototype Benches', 'Dedicated Faculty Mentorship'],
      image: '/images/robotics-lab.jpg',
      tag: 'STEM & Research',
    },
    {
      id: 'computer-lab',
      category: 'labs',
      title: 'High-Speed Digital Computer Laboratory',
      subtitle: 'Modern Computing & Coding Workstations',
      description:
        'Dedicated air-cooled digital laboratory providing 1:1 computer access. Curriculum spans foundational digital literacy, office productivity, graphic basics, touch-typing mastery, and introductory programming languages.',
      highlights: ['1:1 High-Performance Workstations', 'High-Speed Fiber Internet Connection', 'Curated Educational Software', 'Strict Cyber Safety & Firewall'],
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDBsklaAK__b3iWaf6IP3C4GDlgjL7hyoZiRlcppLuY80oI6bLMltNU4OO-XQtyfRNtFCrcZT3MzukHWemkGDEDqykDUDE-SNAF-Oqm7pXLzcO6qAXHsh0J1eppSJLoHzPdwrTwHli29LdjN1EwQRKmVxjwT2RWwv1UV92LW1iuGKzaq5ZPZHEjHzGP3EOzhSKS8g9oeR85MMj2ntopfSMDnzYFSDYvKKKHb3N4GucAi4iZ9RB_XzbDpg',
      tag: 'Digital Literacy',
    },
    {
      id: 'kids-hall',
      category: 'early-childhood',
      title: "Kids' Entertainment Hall & Smart TV Classrooms",
      subtitle: 'Joyful Foundational Activity Center for PG to UKG',
      description:
        'Vibrant, child-safe activity arena featuring interactive smart screens, Montessori tactile toys, soft play mats, mini stage for role-play, and audio-visual rhymes learning designed to stimulate gross and fine motor skills.',
      highlights: ['Smart TV Interactive Audio-Visuals', 'Child-Safe Foam Flooring & Furniture', 'Phonics & Storytelling Corner', 'Daily Activity & Sensory Stations'],
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAK0zp2C1S9Em97K8YCxklerWYzmvk9Ci8W1QI4u-0rUxdvQ0rRQt1Z4WsTr1kpJiKFZ5Uv5tBahXHE1kGFmPbYuyIEBiYFDiu2cA6iZ2SA7V-YRbIIHdfPahf_I04d286E2fFYe9b_wtT94WoV5HpmtU_My4nT-hFFMrk8gdXuSAsBJdYcGKK2cJqo9y8euLPbGLtQeUaVaxDsVkxP6-8qbV2ZdBGgGAgLkmGSog9D02KcPIIsaDzLYg',
      tag: 'Pre-Primary Wing',
    },
    {
      id: 'hostel-dining',
      category: 'residential',
      title: 'Supervised Student Hostel & Dining Facility',
      subtitle: 'Safe, Hygienic Boarding with Warden Care',
      description:
        'Home-like residential facility for outstation and local boarding students. Features spacious, well-ventilated dormitories, daily evening supervised prep/study hours, round-the-clock security, and balanced, nutritious hot meals prepared in a hygienic kitchen.',
      highlights: ['Dedicated Male & Female Wardens', 'Evening Study & Remedial Tutoring', 'Hygienic Dining Hall & Pure Diet', 'First-Aid Medical Dispensary'],
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDvgdYKp94u7wiW_Rj92sSyqQ9KLugssbruvUKojY2o5sXOWSPMwC3xbAwIsMBDo2jKQ0p5IKVudv8sQMmLUXbp3mwbr43iIqcC0b111TN6rqCpxZdlU8SQOrGS29LZgPhspzHHHbMzu58pVg6b5Do4XQarPVLXlt3GAQoCNBTvr2i8y0VzKDlJJ30qViwUCwmY0mTubUDRIJirdZbiZNeLZ3GBpAiey0yftVhVrkQH0y7j736vn3Mg6Q',
      tag: 'Boarding Care',
    },
    {
      id: 'sports-ground',
      category: 'sports',
      title: 'Main Athletic Grounds & Cricket Turf',
      subtitle: 'Elite Sports Facilities & Assembly Arena',
      description:
        'Expansive open sports grounds dedicated to daily morning physical education, inter-house football, track athletics, volleyball, taekwondo, and specialized cricket coaching supervised by ICC Panel Umpire Mr. Buddhi Bahadur Pradhan.',
      highlights: ['Full Practice Cricket Net & Turf', 'Football & Athletics Field', 'Taekwondo Martial Arts Arena', 'Annual Sports Meet Hosting'],
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCn9o590rqwV1vZb79r7KVPGsFafoVhc85XukfuZz-gq-gnbxgLevfcY-FqOhnPrjJOPh_h85oP2I3HEcDby_GfCJFuAcZ0vDqmXnXy9i7smAj9drvbSgj6_WwgGs8kH8Ieq6sUS_rbBW7tXVtf7KOFj72p2TJnUIWr47HdBx4Ql6PkPSGyL7p2PjImXwFixt5e3KEgoljhEnMDWDgCggUP9PBrZuTXrpXX2TqqK3x2KS7ovBGTjoaUPw',
      tag: 'Athletics & Training',
    },
    {
      id: 'library-archive',
      category: 'labs',
      title: 'Academic Library & Reading Resource Center',
      subtitle: 'Comprehensive Reference & Literature Collection',
      description:
        'A peaceful study sanctuary cataloging thousands of volumes across curriculum sciences, literature, Nepali folklore, biographies, encyclopedias, and regional periodicals. Equips scholars with deep reading habits from primary through secondary grades.',
      highlights: ['Extensive National Curriculum References', 'Children Picture Books & Fiction Shelf', 'Quiet Study Desks & Group Reading', 'Daily National Newspapers & Periodicals'],
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD4Bm1jNTzVp1M8Dfg9ruxXyiVklBGvIOgfQ1ylKJrjYUGB5Ouite-NCua_gXHzxZANxVX_H1nGBkPukOCJU4dpBbnLbjrx4DoOh6PCRlKVnZ5XtsWOi15OprWngp4f6Jgxbc6Y1fjnHF0JFQ8gaC-CgV9WoLoQ7AgBZfECegi3x84GKXdfphV2E6jN8gLUUCR6c38YYGh7UHQHUDrgl_gjOpoGzYC1kwiZSI2Pn4mwBOqIQEtBUoKUhQ',
      tag: 'Knowledge Hub',
    },
    {
      id: 'water-wellness',
      category: 'residential',
      title: 'Commercial Mineral Water Purification Plant',
      subtitle: 'Campus Health, Safety & 100% Pure Drinking Water',
      description:
        'The health and wellness of our scholars is our highest priority. The school operates an automated multi-stage RO and UV mineral filtration plant supplying tested, crystal-clear drinking water across all school wings and residential hostels.',
      highlights: ['Multi-Stage Reverse Osmosis (RO) & UV', 'Regular Microbial Laboratory Testing', 'Free Cold & Warm Water Dispensers', 'Full Campus Clean Water Safety'],
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBUKAPKK5gfRBdx8bIRq4QZpETW2Sbn_ihqr__5lgGE8-4IFprka08Udvmf6yHw8DAwlFwAtD9RE9durVhTJXolEda24aMjRwQEKZE9zzaFgiw5Tm0z0p1ONbsLvTZsVrcfg1pYVtQ2QslLIBGhdIiBCLDTgZ5GLxsA2h8_GRVCnCCKJme48l4PSFDKXsw4I2MvSmdyzOCDoEOOWPn5X3dIeO5z6ff7BXOVS5lazwNky7-c1E1SlUJthQ',
      tag: 'Health & Hygiene',
    },
  ];

  const filteredFacilities =
    activeFilter === 'all'
      ? facilities
      : facilities.filter((item) => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-surface font-body-md text-body-md text-on-surface antialiased selection:bg-tertiary-fixed selection:text-tertiary">
      <Navbar />

      <main className="w-full pt-28 bg-surface">
        {/* 1. HERO BANNER */}
        <section className="relative w-full bg-primary-container text-on-primary py-space-3xl md:py-space-4xl overflow-hidden">
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 relative z-10">
            <div className="flex flex-wrap items-center gap-space-sm text-caption mb-space-md text-surface-variant">
              <Link to="/" className="hover:text-tertiary-fixed transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-tertiary-fixed font-semibold">Facilities</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-end">
              <div className="lg:col-span-8 space-y-space-md">
                <span className="font-label-caps text-label-caps uppercase tracking-[0.25em] text-tertiary-fixed font-bold block">
                  CAMPUS INFRASTRUCTURE &amp; MODERN AMENITIES
                </span>
                <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-on-primary font-normal tracking-tight font-serif">
                  Built to Inspire Discovery, Comfort &amp; Leadership.
                </h1>
                <p className="font-body-lead text-body-lead text-surface-variant max-w-3xl leading-relaxed">
                  Situated in a tranquil and secure environment in Shankarpur, Biratnagar-2, our purpose-built campus integrates advanced scientific laboratories, digital learning halls, child-safe early entertainment rooms, sports fields, and full boarding facilities.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-space-sm">
                <Link
                  to="/admissions"
                  className="inline-flex items-center justify-center px-space-xl py-3 bg-tertiary-fixed hover:bg-tertiary-fixed-dim text-primary font-label-caps text-label-caps uppercase tracking-wider rounded font-bold transition-all shadow-md active:scale-[0.99] text-center"
                >
                  Book Campus Visit
                </Link>
                <a
                  href="tel:021514168"
                  className="inline-flex items-center justify-center px-space-xl py-3 bg-white/20 hover:bg-white/30 text-white border border-white/20 font-label-caps text-label-caps uppercase tracking-wider rounded font-bold transition-all text-center"
                >
                  Direct Desk: 021-514168
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 2. STATS OVERVIEW BAR */}
        <section className="w-full bg-surface-container-low border-b border-outline-variant/30 py-space-xl">
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-space-lg text-center">
              <div className="space-y-1">
                <span className="font-headline-xl text-headline-xl text-primary font-serif">250 Seats</span>
                <p className="font-label-caps text-[11px] uppercase tracking-wider text-secondary">Digital Conference Hall</p>
              </div>
              <div className="space-y-1">
                <span className="font-headline-xl text-headline-xl text-primary font-serif">100%</span>
                <p className="font-label-caps text-[11px] uppercase tracking-wider text-secondary">RO &amp; UV Mineral Water</p>
              </div>
              <div className="space-y-1">
                <span className="font-headline-xl text-headline-xl text-primary font-serif">1:1</span>
                <p className="font-label-caps text-[11px] uppercase tracking-wider text-secondary">Computer Workstations</p>
              </div>
              <div className="space-y-1">
                <span className="font-headline-xl text-headline-xl text-primary font-serif">24/7</span>
                <p className="font-label-caps text-[11px] uppercase tracking-wider text-secondary">Hostel &amp; Power Security</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. INTERACTIVE CATEGORY FILTER */}
        <section className="w-full bg-surface py-space-2xl">
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {[
                { label: 'All Facilities', key: 'all' },
                { label: 'Auditorium & AV', key: 'auditorium' },
                { label: 'Labs & Computing', key: 'labs' },
                { label: 'Pre-Primary Hall', key: 'early-childhood' },
                { label: 'Hostel & Wellness', key: 'residential' },
                { label: 'Athletics & Sports', key: 'sports' },
              ].map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveFilter(tab.key)}
                  className={`px-space-md py-2 rounded-lg font-label-caps text-[11px] uppercase tracking-wider font-bold transition-all shrink-0 ${
                    activeFilter === tab.key
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

        {/* 4. FACILITIES SHOWCASE GRID */}
        <section className="w-full bg-surface pb-space-5xl">
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 space-y-space-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-xl">
              {filteredFacilities.map((item) => (
                <article
                  key={item.id}
                  id={item.id}
                  className="bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant/30 shadow-sm flex flex-col justify-between group hover:shadow-lg transition-all duration-300 scroll-mt-32"
                >
                  <div>
                    <div className="h-60 w-full overflow-hidden relative bg-surface-container">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 bg-primary-container/90 backdrop-blur-sm text-tertiary-fixed font-label-caps text-[10px] uppercase tracking-wider px-2.5 py-1 rounded font-bold">
                        {item.tag}
                      </span>
                    </div>

                    <div className="p-space-xl space-y-space-sm">
                      <div>
                        <h3 className="font-headline-md text-headline-md text-primary font-serif font-bold leading-snug">
                          {item.title}
                        </h3>
                        <p className="font-label-caps text-[11px] uppercase text-secondary tracking-wider font-semibold mt-0.5">
                          {item.subtitle}
                        </p>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        {item.description}
                      </p>

                      <div className="pt-space-xs space-y-1">
                        <span className="font-label-caps text-[10px] uppercase text-primary font-bold tracking-wider block mb-1">
                          Key Features:
                        </span>
                        {item.highlights.map((h, i) => (
                          <div key={i} className="flex items-center gap-2 text-caption text-secondary">
                            <span className="material-symbols-outlined text-[15px] text-tertiary-fixed-dim">
                              check_circle
                            </span>
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-space-xl pt-0 mt-space-sm">
                    <Link
                      to="/admissions"
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-surface-container hover:bg-primary-container text-primary hover:text-on-primary rounded font-label-caps text-[11px] uppercase tracking-wider font-bold transition-colors text-center"
                    >
                      <span>Inquire About Access</span>
                      <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                    </Link>
                  </div>
                </article>
              ))}
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
            <Link className="hover:text-primary transition-colors" to="/admissions">
              Admissions
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

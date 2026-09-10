import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface antialiased selection:bg-tertiary-fixed selection:text-tertiary">
      
{/*  1. TOP ANNOUNCEMENT BAR  */}
<header className="fixed top-0 left-0 right-0 z-50 shadow-md">
<div className="bg-primary-container text-on-primary py-2 px-gutter-desktop border-b border-white/10">
<div className="max-w-container-max mx-auto flex flex-col sm:flex-row items-center justify-between text-caption gap-1">
<div className="flex items-center space-x-space-sm">
<span className="inline-block w-2 h-2 rounded-full bg-tertiary-fixed animate-pulse"></span>
<span className="font-medium tracking-wide text-white text-xs sm:text-[13px]">
            Admissions Open for Academic Session 2081/2082 (Playgroup to Grade 10) • Shankarpur, Biratnagar-2
          </span>
</div>
<div className="flex items-center space-x-space-md text-xs sm:text-[13px]">
<span className="text-tertiary-fixed font-semibold inline-flex items-center gap-1">
<span className="material-symbols-outlined text-[15px]">call</span> Call: 021-514168
          </span>
<span className="text-white/30 hidden sm:inline">|</span>
<a className="text-tertiary-fixed hover:text-white font-semibold transition-colors duration-150 inline-flex items-center gap-1 underline underline-offset-4" href="#admissions-portal">
            Inquire Now <span className="text-[11px]">→</span>
</a>
</div>
</div>
</div>
{/*  2. HEADER / NAVIGATION  */}
<div className="h-20 bg-surface/98 backdrop-blur-md border-b border-outline-variant/40 shadow-[0_1px_10px_rgba(15,30,54,0.06)]">
<div className="max-w-container-max mx-auto h-full px-gutter-desktop flex items-center justify-between gap-space-lg">
<div className="flex items-center gap-3 shrink-0">
<div className="w-11 h-11 rounded-full bg-primary-container text-tertiary-fixed flex items-center justify-center font-headline-md text-[22px] font-bold border-2 border-tertiary-fixed/40 shadow-sm">
            B
          </div>
<div className="flex flex-col">
<span className="font-headline-sm text-[1.15rem] sm:text-headline-sm text-primary tracking-tight font-bold leading-none">
              Budhanilkantha Secondary English School
            </span>
<span className="font-label-caps text-[10px] sm:text-label-caps text-secondary tracking-widest uppercase mt-0.5">
              बुढानिलकण्ठ विद्यालय • Estd. 2040 B.S. • Shankarpur, Biratnagar-2
            </span>
</div>
</div>
<nav className="hidden lg:flex items-center gap-space-lg h-full">
<a className="text-on-surface font-medium hover:text-on-tertiary-container font-body-sm text-[14px] transition-colors" href="#overview">About</a>
<a className="text-on-surface font-medium hover:text-on-tertiary-container font-body-sm text-[14px] transition-colors" href="#academic-wings">Academics</a>
<a className="text-on-surface font-medium hover:text-on-tertiary-container font-body-sm text-[14px] transition-colors" href="#features">Distinctions</a>
<a className="text-on-surface font-medium hover:text-on-tertiary-container font-body-sm text-[14px] transition-colors" href="#student-life">Student Life</a>
<a className="text-on-surface font-medium hover:text-on-tertiary-container font-body-sm text-[14px] transition-colors" href="#facilities">Facilities</a>
<a className="text-on-surface font-medium hover:text-on-tertiary-container font-body-sm text-[14px] transition-colors" href="#notices-events">News &amp; Events</a>
<a className="text-on-surface font-medium hover:text-on-tertiary-container font-body-sm text-[14px] transition-colors" href="#admissions-portal">Contact</a>
</nav>
<div className="flex items-center gap-space-sm shrink-0">
<a className="hidden sm:inline-flex items-center justify-center px-4 py-2 border border-primary text-primary hover:bg-surface-container font-label-caps text-[11px] uppercase tracking-wider rounded transition-colors" href="tel:021514168">
            Inquire
          </a>
<a className="inline-flex items-center justify-center bg-primary-container hover:bg-primary text-on-primary font-label-caps text-[11px] uppercase tracking-widest px-space-lg py-2.5 rounded transition-all shadow-[0_2px_6px_rgba(15,30,54,0.15)] active:scale-[0.99]" href="#admissions-portal">
            Apply for Admission
          </a>
</div>
</div>
</div>
</header>
<main className="w-full pt-18 sm:pt-20 bg-surface">
<div className="flex flex-col w-full">
{/*  3. HERO SECTION  */}
<section className="relative w-full overflow-hidden bg-primary-container min-h-[85vh] flex items-center">
{/*  Background Image with dark overlay scrim  */}
<div className="absolute inset-0 z-0">
<img alt="Students at Budhanilkantha Academy engaged in study hall" className="w-full h-full object-cover object-center" src="https://lh3.googleusercontent.com/aida/AEtjO1UAcl9ZnKgyFyCFaRLNkKTmpqRczcmonpjeMJrBIsyU4DJA17mANSbShKoYBdoNyYDVEr3fx8NPUJlnp_OymBxWVWj2b4elu3y4Qcp0KUL4v6FioR3GzOY0eatsggbnUsAodW_8raMB0KU5gWyiNQn3LdHnnFCdJP0RUiAV9uNSlkFB8vsOepQw2oXEnIMZJt0EBocC00R4NdYrYQ049uvPhOv7Xxelyiwo182IItHH40Eob1s1h3GvicNf" />
<div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/80 to-primary/65 md:bg-gradient-to-r md:from-primary/95 md:via-primary/80 md:to-primary/45"></div>
</div>
<div className="relative z-10 w-full max-w-container-max mx-auto px-gutter-desktop pt-space-3xl pb-space-4xl">
{/*  Editorial Kicker  */}
<div className="flex flex-col md:flex-row md:items-end justify-between pb-space-lg gap-space-sm border-b border-white/20">
<div className="space-y-space-2xs">
<span className="font-label-caps text-label-caps uppercase tracking-[0.2em] text-tertiary-fixed font-bold">
                ESTABLISHED 2040 B.S. (1983 A.D.) • MORANG, NEPAL
              </span>
<p className="font-caption text-caption text-surface-variant">
                Shankarpur, Biratnagar-2, Morang • Koshi Province, Nepal
              </p>
</div>
<div className="flex items-center gap-space-md text-caption font-label-caps text-surface-variant uppercase tracking-widest text-[11px]">
<span className="text-white">SEE Board Distinction</span>
<span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed"></span>
<span className="text-white">NASA USA &amp; Asian Camp Japan</span>
<span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed hidden sm:inline-block"></span>
<span className="hidden sm:inline-block text-white">Playgroup to Grade 10</span>
</div>
</div>
{/*  Hero Main Body  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center pt-space-2xl pb-space-2xl">
<div className="lg:col-span-8">
<h1 className="font-display-hero text-display-hero-mobile lg:text-display-hero text-on-primary font-normal tracking-tight leading-tight">
                Where Curiosity Becomes <span className="italic text-tertiary-fixed font-headline-md">Confidence.</span>
<span className="block text-headline-lg sm:text-headline-xl font-headline-xl text-surface-bright mt-2 font-normal">
                  Budhanilkantha Secondary English School
                </span>
</h1>
<p className="mt-space-md text-body-lead text-surface-variant max-w-2xl font-normal leading-relaxed">
                Biratnagar's premier English-medium educational institution providing disciplined academic excellence, international exposure, and holistic character development from Playgroup to Grade 10.
              </p>
</div>
<div className="lg:col-span-4 space-y-space-md">
<div className="bg-primary/60 backdrop-blur-md p-space-lg rounded-xl border border-white/15 shadow-2xl space-y-space-md">
<span className="font-label-caps text-[11px] uppercase tracking-wider text-tertiary-fixed font-semibold block">
                  ADMISSIONS 2081/2082 OPEN
                </span>
<p className="font-body-sm text-surface-bright leading-relaxed">
                  Join a tradition of 40+ years in holistic education, high SEE performance, and international student delegations.
                </p>
<div className="flex flex-col gap-2 pt-1">
<a className="w-full inline-flex items-center justify-center px-space-lg py-space-sm bg-tertiary-fixed hover:bg-tertiary-fixed-dim text-primary font-label-caps text-[11px] uppercase tracking-wider rounded font-bold transition-all shadow-md active:scale-[0.99]" href="#academic-wings">
                    Explore Academic Wings
                  </a>
<a className="w-full inline-flex items-center justify-center px-space-lg py-space-sm bg-white/10 hover:bg-white/20 text-white border border-white/20 font-label-caps text-[11px] uppercase tracking-wider rounded transition-all" href="#admissions-portal">
                    Schedule Campus Visit
                  </a>
</div>
</div>
</div>
</div>
{/*  Hero Bottom Badge Ribbon  */}
<div className="pt-space-lg flex flex-col md:flex-row justify-between items-start md:items-center text-on-primary gap-space-sm border-t border-white/15">
<div>
<span className="font-label-caps text-[11px] uppercase tracking-widest text-tertiary-fixed block">
                बुढानिलकण्ठ विद्यालय • SHANKARPUR CAMPUS
              </span>
<p className="font-headline-sm text-headline-sm italic text-on-primary">
                "Fostering academic brilliance, technological innovation, and moral integrity."
              </p>
</div>
<div className="text-caption font-caption text-surface-variant flex items-center gap-space-xs bg-primary/80 backdrop-blur-sm px-space-md py-space-xs rounded border border-white/15">
<span className="material-symbols-outlined text-[18px] text-tertiary-fixed">verified</span>
<span className="text-white">40+ Years of Academic Distinction • Affiliated with Ministry of Education, Nepal • SEE Board Exam Excellence</span>
</div>
</div>
</div>
</section>
{/*  4. INSTITUTION OVERVIEW / INTRO  */}
<section className="w-full bg-surface py-space-4xl" id="overview">
<div className="max-w-container-max mx-auto px-gutter-desktop">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-3xl items-center">
{/*  Left Image Visual  */}
<div className="lg:col-span-6 relative">
<div className="relative rounded-xl overflow-hidden bg-surface-container-high shadow-2xl border border-outline-variant/30">
<img alt="Budhanilkantha secondary science student working in laboratory" className="w-full h-[32rem] object-cover object-center" src="https://lh3.googleusercontent.com/aida/AEtjO1VZEqDOFFMwaUz75GOD2OJ1s3wZNf1QJR7mD-qs20GhlWBZ8QfG0BmBJtATCJ20Z6gBXYNFzPncpKd6GuByO-dFmHZsQaqc_-8Y56wbRLZajoPPUrjgVc6s5w_Ps8RdM_vI5g7pcJKL-Tgg-RUOiouvOzbWpWX5rE99R8uR3IheckaW9Cjo6BD7MmHD36eojBfQdLx4bLZzQnnAaUbZikRuu9d-An38lm65_TcyuhvBhAn-8yKn2BtHzPK5" />
<div className="absolute top-4 left-4 bg-primary-container/90 text-white backdrop-blur-sm px-space-md py-1.5 rounded text-caption font-label-caps uppercase tracking-wider border border-white/20">
                  Applied Sciences &amp; Robotics • Shankarpur Lab
                </div>
</div>
{/*  Floating Accent Box  */}
<div className="absolute -bottom-6 -right-4 md:bottom-6 md:right-6 bg-primary-container text-on-primary p-space-lg rounded-xl max-w-xs shadow-2xl border border-tertiary-fixed/30">
<p className="font-headline-sm text-headline-sm italic mb-1 text-tertiary-fixed">40+ Years Legacy</p>
<p className="font-body-sm text-[13px] text-surface-variant leading-relaxed">
                  Dedicated faculty mentors, remedial academic support, and holistic child development since 2040 B.S.
                </p>
</div>
</div>
{/*  Right Narrative Column  */}
<div className="lg:col-span-6 space-y-space-lg">
<div className="space-y-space-xs">
<span className="font-label-caps text-label-caps uppercase tracking-[0.2em] text-on-tertiary-container font-semibold">
                  ESTABLISHED 2040 B.S. • BIRATNAGAR-2
                </span>
<h2 className="font-headline-xl text-headline-lg sm:text-headline-xl text-primary font-normal leading-tight">
                  Nurturing Tomorrow's Leaders with Global Vision &amp; Cultural Values
                </h2>
</div>
<p className="font-body-lead text-body-lead text-on-surface-variant font-normal leading-relaxed">
                Established in 2040 B.S. in Shankarpur, Biratnagar-2, Budhanilkantha Secondary English School delivers benchmark academic rigor paired with rich co-curricular distinction. We prepare learners not only for national board excellence but for leadership in an interconnected world.
              </p>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                From child-centric smart classrooms with interactive TV-learning in our early grades to sophisticated science, computer, and robotics laboratories for senior classes, we provide an environment where curiosity thrives. With caring day-scholar logistics and well-supervised residential hostel facilities for boys and girls, Budhanilkantha remains the educational benchmark in Koshi Province.
              </p>
{/*  Key Highlights Badges  */}
<div className="pt-space-xs grid grid-cols-1 sm:grid-cols-3 gap-space-sm">
<div className="p-space-sm bg-surface-container-low rounded border border-outline-variant/40">
<div className="flex items-center gap-1.5 text-on-tertiary-container font-semibold text-caption uppercase tracking-wider font-label-caps">
<span className="material-symbols-outlined text-[16px]">public</span> NASA USA Tour
                  </div>
<p className="text-caption text-secondary mt-1">Student delegations selected for global aerospace exposure</p>
</div>
<div className="p-space-sm bg-surface-container-low rounded border border-outline-variant/40">
<div className="flex items-center gap-1.5 text-on-tertiary-container font-semibold text-caption uppercase tracking-wider font-label-caps">
<span className="material-symbols-outlined text-[16px]">flight_takeoff</span> Asian Camp Japan
                  </div>
<p className="text-caption text-secondary mt-1">International cultural and academic youth delegations</p>
</div>
<div className="p-space-sm bg-surface-container-low rounded border border-outline-variant/40">
<div className="flex items-center gap-1.5 text-on-tertiary-container font-semibold text-caption uppercase tracking-wider font-label-caps">
<span className="material-symbols-outlined text-[16px]">precision_manufacturing</span> Robotics &amp; Labs
                  </div>
<p className="text-caption text-secondary mt-1">Award-winning STEM prototypes &amp; hands-on experiments</p>
</div>
</div>
<div className="pt-space-sm flex items-center gap-space-xl flex-wrap">
<a className="group inline-flex items-center gap-space-xs text-primary font-body-md text-body-md font-semibold hover:text-on-tertiary-container transition-colors" href="tel:021514168">
<span>Contact Admissions Desk: 021-514168</span>
<span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">arrow_forward</span>
</a>
<div className="h-5 w-px bg-outline-variant hidden sm:block"></div>
<span className="font-caption text-caption text-secondary">Shankarpur, Biratnagar-2, Morang</span>
</div>
</div>
</div>
</div>
</section>
{/*  5. METRICS & STATISTICS STRIP  */}
<section className="w-full bg-surface-container-low py-space-2xl border-y border-outline-variant/30">
<div className="max-w-container-max mx-auto px-gutter-desktop">
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-space-lg text-center md:text-left">
<div className="space-y-space-2xs">
<p className="font-headline-lg text-headline-lg text-primary font-semibold">40+ Years</p>
<p className="font-label-caps text-[11px] text-secondary uppercase tracking-wider font-semibold">Of Excellence (Est. 2040 B.S.)</p>
</div>
<div className="space-y-space-2xs">
<p className="font-headline-lg text-headline-lg text-primary font-semibold">1,350+</p>
<p className="font-label-caps text-[11px] text-secondary uppercase tracking-wider font-semibold">Enrolled Students (PG to 10)</p>
</div>
<div className="space-y-space-2xs">
<p className="font-headline-lg text-headline-lg text-primary font-semibold">100%</p>
<p className="font-label-caps text-[11px] text-secondary uppercase tracking-wider font-semibold">SEE / SLC Distinction Rate</p>
</div>
<div className="space-y-space-2xs">
<p className="font-headline-lg text-headline-lg text-primary font-semibold">250 Seats</p>
<p className="font-label-caps text-[11px] text-secondary uppercase tracking-wider font-semibold">Conference &amp; Projector Hall</p>
</div>
<div className="space-y-space-2xs">
<p className="font-headline-lg text-headline-lg text-primary font-semibold">35+ Clubs</p>
<p className="font-label-caps text-[11px] text-secondary uppercase tracking-wider font-semibold">Co-curricular &amp; Sports Programs</p>
</div>
</div>
</div>
</section>
{/*  6. ACADEMIC WINGS (PG to Grade 10)  */}
<section className="w-full bg-surface-container-lowest py-space-4xl" id="academic-wings">
<div className="max-w-container-max mx-auto px-gutter-desktop space-y-space-3xl">
{/*  Section Header  */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
<div className="max-w-2xl space-y-space-xs">
<span className="font-label-caps text-label-caps uppercase tracking-[0.2em] text-on-tertiary-container font-semibold">
                THE FOUR ACADEMIC WINGS
              </span>
<h2 className="font-headline-xl text-headline-lg sm:text-headline-xl text-primary font-normal">
                Four Structured Stages of Scholastic Growth.
              </h2>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">
              Comprehensive child-first pedagogy starting with playful early wonder through rigorous National Examination Board (SEE) mastery.
            </p>
</div>
{/*  4 Wings Grid  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
{/*  Wing 1: Pre-Primary  */}
<div className="bg-surface-container-low rounded-xl p-space-xl flex flex-col justify-between group transition-all duration-300 hover:bg-surface-container hover:shadow-lg border border-outline-variant/40">
<div className="space-y-space-md">
<div className="flex items-center justify-between">
<span className="px-space-sm py-1 bg-surface-container-highest text-primary font-label-caps text-[11px] uppercase tracking-wider rounded font-semibold">
                    PG, Nursery, LKG, UKG
                  </span>
<span className="font-headline-md text-headline-md text-secondary/30 font-light">01</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary">Pre-Primary Wing</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Activity-based early childhood education designed for joyful, stress-free foundational learning in a warm, child-safe environment.
                </p>
<div className="pt-space-xs space-y-1.5 font-caption text-caption text-secondary border-t border-outline-variant/30">
<p>• Kids' Entertainment Hall &amp; Joyful Play Corner</p>
<p>• TV-Based Smart Audio-Visual Learning Rooms</p>
<p>• Early Phonics, Numeracy &amp; Value Foundation</p>
<p>• Nurturing Montessorian Care &amp; Hygiene</p>
</div>
</div>
<div className="pt-space-lg">
<a className="inline-flex items-center gap-1.5 text-primary font-label-caps text-[11px] uppercase tracking-wider font-bold group-hover:text-on-tertiary-container" href="#admissions-portal">
<span>Pre-Primary Details</span>
<span className="material-symbols-outlined text-[15px]">north_east</span>
</a>
</div>
</div>
{/*  Wing 2: Primary  */}
<div className="bg-surface-container-low rounded-xl p-space-xl flex flex-col justify-between group transition-all duration-300 hover:bg-surface-container hover:shadow-lg border border-outline-variant/40">
<div className="space-y-space-md">
<div className="flex items-center justify-between">
<span className="px-space-sm py-1 bg-surface-container-highest text-primary font-label-caps text-[11px] uppercase tracking-wider rounded font-semibold">
                    Grades 1 to 5
                  </span>
<span className="font-headline-md text-headline-md text-secondary/30 font-light">02</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary">Primary School</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Building deep conceptual literacy, arithmetic confidence, environmental science curiosity, and foundational moral values.
                </p>
<div className="pt-space-xs space-y-1.5 font-caption text-caption text-secondary border-t border-outline-variant/30">
<p>• Strong English &amp; Nepali Bilingual Competence</p>
<p>• Conceptual Math, Science &amp; Social Studies</p>
<p>• Supervised Creative Arts &amp; Handwriting</p>
<p>• Super Learning &amp; Remedial Attention</p>
</div>
</div>
<div className="pt-space-lg">
<a className="inline-flex items-center gap-1.5 text-primary font-label-caps text-[11px] uppercase tracking-wider font-bold group-hover:text-on-tertiary-container" href="#admissions-portal">
<span>Primary Wing Details</span>
<span className="material-symbols-outlined text-[15px]">north_east</span>
</a>
</div>
</div>
{/*  Wing 3: Lower Secondary  */}
<div className="bg-surface-container-low rounded-xl p-space-xl flex flex-col justify-between group transition-all duration-300 hover:bg-surface-container hover:shadow-lg border border-outline-variant/40">
<div className="space-y-space-md">
<div className="flex items-center justify-between">
<span className="px-space-sm py-1 bg-surface-container-highest text-primary font-label-caps text-[11px] uppercase tracking-wider rounded font-semibold">
                    Grades 6 to 8
                  </span>
<span className="font-headline-md text-headline-md text-secondary/30 font-light">03</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary">Lower Secondary</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Bridging abstract theory with practical inquiry, hands-on computer science, applied laboratory experiments, and rhetorical eloquence.
                </p>
<div className="pt-space-xs space-y-1.5 font-caption text-caption text-secondary border-t border-outline-variant/30">
<p>• Hands-on Science Experiments &amp; Computing</p>
<p>• Interschool Speech, Debate &amp; Essay Writing</p>
<p>• Systematic Inter-House Sports Tournaments</p>
<p>• Continuous Formative Student Assessments</p>
</div>
</div>
<div className="pt-space-lg">
<a className="inline-flex items-center gap-1.5 text-primary font-label-caps text-[11px] uppercase tracking-wider font-bold group-hover:text-on-tertiary-container" href="#admissions-portal">
<span>Lower Secondary Details</span>
<span className="material-symbols-outlined text-[15px]">north_east</span>
</a>
</div>
</div>
{/*  Wing 4: Secondary / SEE  */}
<div className="bg-primary-container text-on-primary rounded-xl p-space-xl flex flex-col justify-between group shadow-xl border border-tertiary-fixed/30">
<div className="space-y-space-md">
<div className="flex items-center justify-between">
<span className="px-space-sm py-1 bg-white/10 text-tertiary-fixed font-label-caps text-[11px] uppercase tracking-wider rounded font-semibold">
                    Grades 9 &amp; 10 (SEE Board)
                  </span>
<span className="font-headline-md text-headline-md text-tertiary-fixed/40 font-light">04</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-primary">Secondary Wing</h3>
<p className="font-body-sm text-body-sm text-on-primary-container leading-relaxed">
                  Intensive national board examination preparation with a 100% board distinction track record, advanced STEM projects, and career counseling.
                </p>
<div className="pt-space-xs space-y-1.5 font-caption text-caption text-surface-variant border-t border-white/10">
<p>• 100% SEE Distinction Track Record</p>
<p>• Super Learning &amp; Daily Evening Remedials</p>
<p>• Advanced Physics, Chemistry &amp; Math Labs</p>
<p>• Robotics Teams &amp; NASA / Japan Opportunities</p>
</div>
</div>
<div className="pt-space-lg">
<a className="inline-flex items-center gap-1.5 text-tertiary-fixed font-label-caps text-[11px] uppercase tracking-wider font-bold hover:underline" href="#admissions-portal">
<span>Secondary &amp; SEE Details</span>
<span className="material-symbols-outlined text-[15px]">north_east</span>
</a>
</div>
</div>
</div>
</div>
</section>
{/*  7. SALIENT FEATURES & DISTINCTIONS  */}
<section className="w-full bg-surface py-space-4xl" id="features">
<div className="max-w-container-max mx-auto px-gutter-desktop space-y-space-3xl">
<div className="max-w-3xl space-y-space-xs">
<span className="font-label-caps text-label-caps uppercase tracking-[0.2em] text-on-tertiary-container font-semibold">
              SALIENT FEATURES &amp; DISTINCTIONS
            </span>
<h2 className="font-headline-xl text-headline-lg sm:text-headline-xl text-primary font-normal">
              Why Parents Choose Budhanilkantha School.
            </h2>
<p className="font-body-lead text-body-lead text-on-surface-variant">
              Decades of disciplined pedagogical excellence coupled with signature co-curricular opportunities unmatched across the region.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl">
{/*  Feature 1  */}
<div className="bg-surface-container-low p-space-xl rounded-xl border border-outline-variant/30 flex flex-col justify-between">
<div className="space-y-space-md">
<div className="w-12 h-12 rounded-lg bg-primary-container text-tertiary-fixed flex items-center justify-center">
<span className="material-symbols-outlined text-[24px]">public</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary">Global Exposure &amp; Competitions</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Student delegations to NASA (USA) and the prestigious Asian Camp in Japan; multiple-time champions in national drawing, speech, and oratory contests.
                </p>
</div>
<div className="pt-space-md border-t border-outline-variant/30 text-caption font-semibold text-on-tertiary-container">
                NASA USA &amp; Asian Camp Japan
              </div>
</div>
{/*  Feature 2  */}
<div className="bg-surface-container-low p-space-xl rounded-xl border border-outline-variant/30 flex flex-col justify-between">
<div className="space-y-space-md">
<div className="w-12 h-12 rounded-lg bg-primary-container text-tertiary-fixed flex items-center justify-center">
<span className="material-symbols-outlined text-[24px]">sports_cricket</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary">ICC Panel Mentored Sports</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Elite sports coaching mentored by ICC Panel Umpire Mr. Buddhi Bahadur Pradhan. Competitive cricket academy, football championships, taekwondo, and track events.
                </p>
</div>
<div className="pt-space-md border-t border-outline-variant/30 text-caption font-semibold text-on-tertiary-container">
                ICC Panel Umpire Buddhi B. Pradhan
              </div>
</div>
{/*  Feature 3  */}
<div className="bg-surface-container-low p-space-xl rounded-xl border border-outline-variant/30 flex flex-col justify-between">
<div className="space-y-space-md">
<div className="w-12 h-12 rounded-lg bg-primary-container text-tertiary-fixed flex items-center justify-center">
<span className="material-symbols-outlined text-[24px]">smart_toy</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary">Robotics &amp; Science Labs</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Cutting-edge physics, chemistry, biology, and robotics laboratories where students design automated systems and win top regional innovation exhibitions.
                </p>
</div>
<div className="pt-space-md border-t border-outline-variant/30 text-caption font-semibold text-on-tertiary-container">
                STEM &amp; Applied Innovation Lab
              </div>
</div>
{/*  Feature 4  */}
<div className="bg-surface-container-low p-space-xl rounded-xl border border-outline-variant/30 flex flex-col justify-between">
<div className="space-y-space-md">
<div className="w-12 h-12 rounded-lg bg-primary-container text-tertiary-fixed flex items-center justify-center">
<span className="material-symbols-outlined text-[24px]">psychology</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary">Super Learning &amp; Remedials</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Structured Super Learning sessions and evening remedial support ensuring every learner masters concepts thoroughly before board evaluations.
                </p>
</div>
<div className="pt-space-md border-t border-outline-variant/30 text-caption font-semibold text-on-tertiary-container">
                Individual Attention &amp; Daily Tutoring
              </div>
</div>
</div>
</div>
</section>
{/*  8. FACILITIES SHOWCASE  */}
<section className="w-full bg-surface-container-lowest py-space-4xl" id="facilities">
<div className="max-w-container-max mx-auto px-gutter-desktop space-y-space-3xl">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
<div className="space-y-space-xs">
<span className="font-label-caps text-label-caps uppercase tracking-[0.2em] text-on-tertiary-container font-semibold">
                CAMPUS INFRASTRUCTURE &amp; AMENITIES
              </span>
<h2 className="font-headline-xl text-headline-lg sm:text-headline-xl text-primary font-normal">
                Designed for Safety, Discovery &amp; Well-being.
              </h2>
</div>
<a className="group inline-flex items-center gap-space-xs text-primary font-label-caps text-label-caps uppercase tracking-wider font-semibold hover:text-on-tertiary-container" href="#admissions-portal">
<span>Schedule Shankarpur Campus Tour</span>
<span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1">arrow_forward</span>
</a>
</div>
{/*  Facilities 5-Card Layout  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
{/*  Facility 1: Conference Hall  */}
<div className="bg-surface-container-low rounded-xl p-space-xl border border-outline-variant/30 space-y-space-md">
<div className="w-10 h-10 rounded-lg bg-primary-container text-tertiary-fixed flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">co_present</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary">250-Seat Digital Conference &amp; Projector Hall</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                State-of-the-art multi-purpose digital auditorium with HD projection, surround audio, and tiered seating for seminars, assemblies, and fests.
              </p>
<div className="pt-space-xs text-caption text-secondary font-medium">• Audio-visual lectures • Guest speakers • Cultural celebrations</div>
</div>
{/*  Facility 2: Kids Entertainment Hall  */}
<div className="bg-surface-container-low rounded-xl p-space-xl border border-outline-variant/30 space-y-space-md">
<div className="w-10 h-10 rounded-lg bg-primary-container text-tertiary-fixed flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">tv_gen</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary">Kids' Entertainment Hall &amp; Smart TV Rooms</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Interactive learning spaces with educational television programming, tactile Montessori toys, and padded play areas for nursery to Grade 2.
              </p>
<div className="pt-space-xs text-caption text-secondary font-medium">• Smart visual education • Motor skill development • Safe environment</div>
</div>
{/*  Facility 3: Labs  */}
<div className="bg-surface-container-low rounded-xl p-space-xl border border-outline-variant/30 space-y-space-md">
<div className="w-10 h-10 rounded-lg bg-primary-container text-tertiary-fixed flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">biotech</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary">Science, Computer &amp; Robotics Labs</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Separate laboratory suites with modern precision apparatus, microscopes, computer stations with high-speed internet, and electronics kits.
              </p>
<div className="pt-space-xs text-caption text-secondary font-medium">• Individual computer terminals • Chemistry benches • Robotics kits</div>
</div>
{/*  Facility 4: Supervised Hostel  */}
<div className="bg-surface-container-low rounded-xl p-space-xl border border-outline-variant/30 space-y-space-md lg:col-span-2">
<div className="w-10 h-10 rounded-lg bg-primary-container text-tertiary-fixed flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">hotel</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary">Supervised Hostel Accommodation (Boys &amp; Girls)</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Secure, well-managed residential hostel wings providing hygienic multi-course dining, 24/7 warden supervision, mandatory evening study halls with resident teacher mentorship, and recreation facilities.
              </p>
<div className="pt-space-xs text-caption text-secondary font-medium flex flex-wrap gap-4">
<span>• Nutritious hygienic meals</span>
<span>• Evening supervised remedial studies</span>
<span>• Strict security &amp; medical care</span>
</div>
</div>
{/*  Facility 5: Water & Hygiene  */}
<div className="bg-surface-container-low rounded-xl p-space-xl border border-outline-variant/30 space-y-space-md">
<div className="w-10 h-10 rounded-lg bg-primary-container text-tertiary-fixed flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">water_drop</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary">Purified Drinking Water Systems</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Centralized multi-stage commercial water filtration plant supplying 100% pure, safe drinking water across all school wings and hostel dining areas.
              </p>
<div className="pt-space-xs text-caption text-secondary font-medium">• Reverse osmosis &amp; UV treatment • Regular microbial testing</div>
</div>
</div>
</div>
</section>
{/*  9. NOTICES, NEWS & UPCOMING EVENTS  */}
<section className="w-full bg-surface py-space-4xl border-t border-outline-variant/30" id="notices-events">
<div className="max-w-container-max mx-auto px-gutter-desktop space-y-space-3xl">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
<div className="space-y-space-xs">
<span className="font-label-caps text-label-caps uppercase tracking-[0.2em] text-on-tertiary-container font-semibold">
                CAMPUS DISPATCHES &amp; NOTICES
              </span>
<h2 className="font-headline-xl text-headline-lg sm:text-headline-xl text-primary font-normal">
                School News, Notices &amp; Calendar.
              </h2>
</div>
<a className="group inline-flex items-center gap-space-xs text-primary font-label-caps text-label-caps uppercase tracking-wider font-semibold hover:text-on-tertiary-container" href="#admissions-portal">
<span>Download Academic Calendar</span>
<span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1">arrow_forward</span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-xl">
{/*  Item 1: Admission Notice  */}
<div className="bg-surface-container-lowest p-space-xl rounded-xl border border-outline-variant/40 space-y-space-md flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
<div className="space-y-space-sm">
<div className="flex items-center justify-between">
<span className="px-2.5 py-1 bg-amber-100 text-amber-900 font-label-caps text-[11px] uppercase tracking-wider rounded font-bold">
                    Official Notice
                  </span>
<span className="text-caption text-secondary font-medium">Baishakh 2081</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary leading-snug">
                  Admission Entrance Examination for Session 2081/2082 Announced
                </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Admissions are open from Playgroup to Grade 10. Entrance tests and parent interviews for newly enrolling students are scheduled every Saturday at our Shankarpur campus.
                </p>
</div>
<div className="pt-space-md border-t border-outline-variant/30 flex items-center justify-between">
<a className="text-on-tertiary-container font-label-caps text-[11px] uppercase tracking-wider font-bold hover:underline" href="#admissions-portal">
                  Apply Online Now →
                </a>
<span className="text-caption text-secondary">Tel: 021-514168</span>
</div>
</div>
{/*  Item 2: News  */}
<div className="bg-surface-container-lowest p-space-xl rounded-xl border border-outline-variant/40 space-y-space-md flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
<div className="space-y-space-sm">
<div className="flex items-center justify-between">
<span className="px-2.5 py-1 bg-blue-100 text-blue-950 font-label-caps text-[11px] uppercase tracking-wider rounded font-bold">
                    Academic News
                  </span>
<span className="text-caption text-secondary font-medium">Chaitra 2080</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary leading-snug">
                  Annual Science &amp; Robotics Exhibition: Budhanilkantha Wins Top Honors
                </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Our secondary school scholars presented working automation sensors, water purification prototypes, and robotic arms, securing 1st place in the Biratnagar interschool STEM showcase.
                </p>
</div>
<div className="pt-space-md border-t border-outline-variant/30 flex items-center justify-between">
<a className="text-on-tertiary-container font-label-caps text-[11px] uppercase tracking-wider font-bold hover:underline" href="#overview">
                  View Photo Gallery →
                </a>
<span className="text-caption text-secondary">Koshi Province</span>
</div>
</div>
{/*  Item 3: Event  */}
<div className="bg-surface-container-lowest p-space-xl rounded-xl border border-outline-variant/40 space-y-space-md flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
<div className="space-y-space-sm">
<div className="flex items-center justify-between">
<span className="px-2.5 py-1 bg-emerald-100 text-emerald-900 font-label-caps text-[11px] uppercase tracking-wider rounded font-bold">
                    Sports Championship
                  </span>
<span className="text-caption text-secondary font-medium">Falgun 2080</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary leading-snug">
                  Biratnagar Inter-School Cricket Championship under ICC Umpire Mentorship
                </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Guided by ICC Panel Umpire Mr. Buddhi Bahadur Pradhan, the Budhanilkantha cricket squad demonstrated disciplined batting and bowling to claim the district school trophy.
                </p>
</div>
<div className="pt-space-md border-t border-outline-variant/30 flex items-center justify-between">
<a className="text-on-tertiary-container font-label-caps text-[11px] uppercase tracking-wider font-bold hover:underline" href="#features">
                  Athletics Program →
                </a>
<span className="text-caption text-secondary">Cricket Academy</span>
</div>
</div>
</div>
</div>
</section>
{/*  10. PARENT & STUDENT TESTIMONIAL  */}
<section className="w-full bg-primary-container text-on-primary py-space-5xl">
<div className="max-w-container-max mx-auto px-gutter-desktop">
<div className="max-w-4xl mx-auto text-center space-y-space-xl">
<span className="font-label-caps text-label-caps uppercase tracking-[0.3em] text-tertiary-fixed block font-bold">
              VOICES FROM OUR COMMUNITY
            </span>
<blockquote className="font-display-hero-mobile md:font-headline-xl text-headline-xl font-normal leading-snug italic text-on-primary">
              “Budhanilkantha gave our children the disciplined foundation to top their board exams while providing the confidence to represent Nepal on international platforms like NASA and Japan. The individual care by teachers in Shankarpur is truly exemplary.”
            </blockquote>
<div className="pt-space-md flex flex-col items-center justify-center space-y-space-2xs">
<div className="w-14 h-14 rounded-full overflow-hidden bg-surface-tint mb-space-xs border-2 border-tertiary-fixed/40 flex items-center justify-center text-tertiary-fixed font-headline-sm font-bold shadow-md">
                BS
              </div>
<div className="font-headline-sm text-headline-sm text-tertiary-fixed">Proud Parents Community</div>
<div className="font-caption text-caption text-on-primary-container">
                Shankarpur, Biratnagar-2 • SEE Distinction &amp; Global Exchange Alumni
              </div>
</div>
</div>
</div>
</section>
{/*  11. ADMISSIONS CALL TO ACTION BANNER  */}
<section className="w-full bg-surface py-space-5xl" id="admissions-portal">
<div className="max-w-container-max mx-auto px-gutter-desktop">
<div className="bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-space-2xl md:p-space-4xl shadow-xl">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
<div className="lg:col-span-8 space-y-space-md">
<span className="font-label-caps text-label-caps uppercase tracking-[0.2em] text-on-tertiary-container font-bold block">
                  THE 2081–2082 ENROLLMENT CYCLE (PLAYGROUP TO GRADE 10)
                </span>
<h2 className="font-display-hero-mobile md:font-headline-xl text-headline-xl text-primary font-normal leading-tight">
                  Give Your Child the Foundation of Excellence at Budhanilkantha School.
                </h2>
<p className="font-body-lead text-body-lead text-on-surface-variant leading-relaxed">
                  Admissions for the upcoming academic session are now open for Playgroup through Grade 10. We warmly invite parents and prospective students to visit our Shankarpur campus, meet our dedicated educators, and experience our vibrant academic community.
                </p>
<div className="pt-space-xs flex flex-wrap items-center gap-space-md text-caption text-secondary">
<div className="flex items-center gap-1.5 font-medium">
<span className="material-symbols-outlined text-[18px] text-on-tertiary-container">schedule</span>
                    Campus Visit Hours: Sunday to Friday (9:00 AM – 4:00 PM)
                  </div>
<div className="flex items-center gap-1.5 font-medium">
<span className="material-symbols-outlined text-[18px] text-on-tertiary-container">location_on</span>
                    Shankarpur, Biratnagar-2, Morang
                  </div>
</div>
</div>
<div className="lg:col-span-4 bg-surface-container-low p-space-xl rounded-xl border border-outline-variant/50 space-y-space-md">
<h3 className="font-headline-sm text-headline-sm text-primary">Inquire Online</h3>
<p className="text-caption text-secondary">Fill in details and our admissions officer will contact you within 24 hours.</p>
<form className="space-y-space-sm" onSubmit={(e) => { e.preventDefault(); alert('Thank you for inquiring! We will contact you soon.'); }}>
<div>
<label className="block text-caption font-semibold text-primary mb-1">Parent's Full Name</label>
<input className="w-full px-3 py-2 bg-surface border border-outline-variant rounded text-body-sm text-on-surface focus:outline-none focus:border-primary" placeholder="e.g. Ramesh Sharma" required={true} type="text" />
</div>
<div>
<label className="block text-caption font-semibold text-primary mb-1">Mobile / Telephone Number</label>
<input className="w-full px-3 py-2 bg-surface border border-outline-variant rounded text-body-sm text-on-surface focus:outline-none focus:border-primary" placeholder="e.g. 98XXXXXXXX or 021-XXXXXX" required={true} type="tel" />
</div>
<div>
<label className="block text-caption font-semibold text-primary mb-1">Applying for Grade</label>
<select className="w-full px-3 py-2 bg-surface border border-outline-variant rounded text-body-sm text-on-surface focus:outline-none focus:border-primary">
<option>Playgroup / Nursery</option>
<option>LKG / UKG</option>
<option>Primary (Grades 1–5)</option>
<option>Lower Secondary (Grades 6–8)</option>
<option>Secondary (Grades 9 &amp; 10 / SEE)</option>
<option>Hostel Accommodation Inquiry</option>
</select>
</div>
<button className="w-full py-3 bg-primary-container hover:bg-primary text-on-primary font-label-caps text-[11px] uppercase tracking-wider rounded font-bold transition-all shadow active:scale-[0.99]" type="submit">
                    Submit Admission Inquiry
                  </button>
<p className="text-[11px] text-center text-secondary">
                    Or call directly: <a className="font-bold text-primary hover:underline" href="tel:021514168">021-514168</a>
</p>
</form>
</div>
</div>
</div>
</div>
</section>
</div>
      </main>
      <Footer />
    </div>
  );
}

import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function StJudeAbout() {
  return (
    <div className="min-h-screen bg-surface font-body-md text-body-md text-on-surface antialiased selection:bg-tertiary-fixed selection:text-tertiary">
      <Navbar />
      <main className="w-full pt-18 sm:pt-20 bg-surface"><div className="flex flex-col w-full">
{/*  About School Hero Section  */}
<section className="relative w-full bg-surface py-space-4xl lg:py-space-5xl overflow-hidden border-b border-surface-container-high/60">
  <div className="max-w-container-max mx-auto px-gutter-desktop">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl lg:gap-space-3xl items-center">
      {/* Text Column */}
      <div className="lg:col-span-6 space-y-space-lg">
        <div className="flex items-center gap-space-xs text-sm font-medium text-secondary">
          <Link className="hover:text-primary transition-colors" to="/">Home</Link>
          <span>/</span>
          <span className="text-primary font-semibold">About</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-medium text-on-surface tracking-tight leading-[1.12]">
          Welcome to <br />
          <span className="text-primary font-serif italic">Budhanilkantha</span> <br />
          <span className="text-primary">Secondary School</span>
        </h1>

        <div className="space-y-space-md text-base sm:text-lg text-on-surface-variant leading-relaxed font-normal">
          <p>
            Budhanilkantha Secondary English School welcomes you to a rich tradition of holistic education in Shankarpur, Biratnagar-2. Established in 2040 B.S. (1983 A.D.), we have nurtured generations of scholars from Playgroup to Grade 10 through disciplined learning, curiosity, and values-based character formation.
          </p>
          <p>
            Our comprehensive academic programs combine rigorous SEE preparation with cutting-edge STEM robotics labs, smart audio-visual classrooms, and distinguished co-curricular mentorship under ICC panel coaching and international platforms like NASA.
          </p>
          <p className="text-sm text-secondary font-medium">
            Be part of an inspiring, caring, and enriching academic journey with us in Biratnagar.
          </p>
        </div>
      </div>

      {/* Campus Image Column */}
      <div className="lg:col-span-6">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-surface-container-high aspect-[16/11] lg:min-h-[440px]">
          <img
            className="w-full h-full object-cover object-center"
            data-alt="Budhanilkantha Secondary English School Campus building in Shankarpur, Biratnagar-2"
            src="/images/school-building.jpg"
          />
        </div>
      </div>
    </div>
  </div>
</section>

{/*  Head of School / Principal's Message  */}
<section className="w-full py-space-4xl lg:py-space-5xl bg-surface" id="headmaster">
  <div className="max-w-container-max mx-auto px-gutter-desktop">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-space-2xl lg:gap-space-3xl items-center">
      {/* Principal Photo */}
      <div className="md:col-span-5 flex justify-center md:justify-end">
        <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-surface-container-high">
          <img
            className="w-full h-full object-cover object-top"
            data-alt="Dedicated school principal standing in formal attire"
            src="/images/principal.jpg"
          />
        </div>
      </div>

      {/* Message Content */}
      <div className="md:col-span-7 space-y-space-lg md:pl-space-lg">
        <div className="space-y-1">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-on-surface font-sans font-medium tracking-tight leading-[1.12]">
            Message <br />
            from <br />
            <span className="text-primary font-serif italic">the Principal</span>
          </h2>
        </div>

        <div className="space-y-space-md text-base sm:text-lg text-on-surface-variant leading-relaxed">
          <p>
            Welcome to Budhanilkantha Secondary English School, Shankarpur, Biratnagar-2. Since 1983 (2040 B.S.), we have dedicated ourselves to fostering an empowering environment where every child thrives through personalized guidance, academic excellence, and holistic growth.
          </p>
          <p>
            Our commitment goes beyond traditional textbooks—nurturing curiosity, ethical leadership, and global competitiveness through modern pedagogy, experiential labs, and comprehensive co-curricular programs.
          </p>
        </div>

        {/* Principal Sign-off / Signature Details */}
        <div className="pt-space-md space-y-1 border-t border-surface-container-high">
          <div className="text-lg md:text-xl font-semibold text-primary">
            Principal &amp; Founder
          </div>
          <div className="text-sm md:text-base text-on-surface-variant">
            Budhanilkantha Secondary English School
          </div>
          <div className="text-xs md:text-sm uppercase tracking-wider text-secondary">
            Shankarpur, Biratnagar-2, Morang
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


{/*  Leadership & Board of Trustees Directory  */}
<section className="w-full py-space-4xl lg:py-space-5xl bg-surface-container-low"><div className="max-w-container-max mx-auto px-gutter-desktop space-y-space-3xl"><div className="max-w-3xl space-y-space-xs"><span className="font-label-caps text-label-caps uppercase tracking-widest text-on-tertiary-container">Academic Mentorship &amp; Faculty Leadership</span><h2 className="font-headline-xl text-headline-xl text-primary font-serif">Dedicated Mentors of Budhanilkantha</h2><p className="font-body-lead text-body-lead text-on-surface-variant">Experienced educators, national sports champions, and department heads dedicated to child-centered pedagogical excellence.</p></div><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg"><div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col justify-between group"><div><div className="relative h-64 overflow-hidden bg-surface-container"><img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Cricket mentor and umpire in professional attire" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQ3yN9KLUMMRZpDlVtrJekOJJ6g2LiEKbXkxvLFSfaumNdUgB8qaaO3BKS-GtgCNmyooK-0kD0cqqJY6efqZjJJmc6QTWq-dyJZXfdBgaMGnpZivJMS43eC7sNMOiPusfBaERMFSw3P6UAsKUV1BRUAuZmW5u5hk-RKY1NGnEvbsC7bu6lr7l65pUKflrWkT0psjMeYIGA2yzx-K2mvfH7T1OMEquWHymMDO19vttF1guenmapjGyXeQ" /><span className="absolute top-space-xs right-space-xs bg-primary-container text-surface-container-lowest font-label-caps text-[10px] uppercase px-space-xs py-1 rounded">Cricket Mentorship</span></div><div className="p-space-lg space-y-space-xs"><h3 className="font-headline-sm text-headline-sm text-primary">Buddhi B. Pradhan</h3><p className="font-label-caps text-[11px] uppercase tracking-wider text-on-tertiary-container">ICC Panel Umpire · Sports Advisor</p><p className="font-caption text-caption text-secondary">International Cricket Council (ICC) Panel</p><p className="font-body-sm text-body-sm text-on-surface-variant pt-space-xs">Directs student cricket academies and athlete conditioning with international standard ethics.</p></div></div><div className="p-space-lg pt-0"><a className="inline-flex items-center gap-1 font-label-caps text-label-caps uppercase text-primary hover:text-on-tertiary-container transition-colors" href="#"><span className="">Sports Program</span><span className="material-symbols-outlined text-[14px]">arrow_forward</span></a></div></div><div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col justify-between group"><div><div className="relative h-64 overflow-hidden bg-surface-container"><img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Senior STEM and Science faculty instructor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuMkOumzRPXSA1k0FyDz0A_pX6ycGt8CEOahu1zkvCMIpW0oQPGsuNlVWy63GkQm05iOci3Qi4YTGZQsIH5v6CSeuHOXk8u6EKkAuV8OAiT_q0ZprEbHlU2SNdYDrXZBsD8Pim-IVVmi1gFLb_xqA_eyuVSdj1vXsOTkVjt1_7ZnyDY6XY3juI4bpt7U1-HztVw8KF0IUC0GDXbhXpnV1FYCp5x4O_HDPcsZYUWNZ2jhkIQ_dredic2w" /><span className="absolute top-space-xs right-space-xs bg-primary-container text-surface-container-lowest font-label-caps text-[10px] uppercase px-space-xs py-1 rounded">Science &amp; Robotics</span></div><div className="p-space-lg space-y-space-xs"><h3 className="font-headline-sm text-headline-sm text-primary">Science &amp; STEM Faculty</h3><p className="font-label-caps text-[11px] uppercase tracking-wider text-on-tertiary-container">Robotics &amp; Innovation Lab</p><p className="font-caption text-caption text-secondary">M.Sc. Physics · Science Olympiad Mentors</p><p className="font-body-sm text-body-sm text-on-surface-variant pt-space-xs">Leads practical wet laboratory experiments, coding bootcamps, and NASA-aligned student research.</p></div></div><div className="p-space-lg pt-0"><a className="inline-flex items-center gap-1 font-label-caps text-label-caps uppercase text-primary hover:text-on-tertiary-container transition-colors" href="#"><span className="">Robotics Wing</span><span className="material-symbols-outlined text-[14px]">arrow_forward</span></a></div></div><div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col justify-between group"><div><div className="relative h-64 overflow-hidden bg-surface-container"><img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Early childhood education coordinator smiling gently in classroom" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJP0lluRm8W6FWRuN0ULwCbUcqMGt5h8DNoTyRyor1E3WaPNRIXdRntlZKnonq3_mKeAvZi3Mcnm-vh6dCOIHEgH7wEa3OYJjDhbhJrPengmiJU5CZIT8XSM-LiXULLFb7rX1Dr0PqUkSZGQQkCAEx58df40_tdkpMrAzRryoefIGHkjgLJ8XztV1LSN4LL6LZgCmC8v_1NMRuW-C_1Ka1fTVXIyOL-ylLOVq8LijwSny6Q1J5i6eWTA" /><span className="absolute top-space-xs right-space-xs bg-primary-container text-surface-container-lowest font-label-caps text-[10px] uppercase px-space-xs py-1 rounded">Junior Wing</span></div><div className="p-space-lg space-y-space-xs"><h3 className="font-headline-sm text-headline-sm text-primary">Pre-Primary Coordinator</h3><p className="font-label-caps text-[11px] uppercase tracking-wider text-on-tertiary-container">Playgroup to Grade 3</p><p className="font-caption text-caption text-secondary">Child Psychology &amp; Experiential Learning</p><p className="font-body-sm text-body-sm text-on-surface-variant pt-space-xs">Oversees interactive audiovisual learning, tactile playrooms, and foundational phonetics.</p></div></div><div className="p-space-lg pt-0"><a className="inline-flex items-center gap-1 font-label-caps text-label-caps uppercase text-primary hover:text-on-tertiary-container transition-colors" href="#"><span className="">Pre-Primary Wing</span><span className="material-symbols-outlined text-[14px]">arrow_forward</span></a></div></div><div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col justify-between group"><div><div className="relative h-64 overflow-hidden bg-surface-container"><img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Senior academic coordinator in professional suit" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrjB4uqqfJqAGjZVcmk-tTYrpyD139vucDT3mFq7CugxwzMwgVwQH_AwMf2sB4LRchHC3o2dL4GKpkw_TW1y-BsyPBjpoAhqfCSD_QTTt6wHzy8zTsZIW7peYHRQFZcNUoCOgpmQO4zh_T-7OEjEfLfPYJmxanAZtelAZ13K2AlAyNo9yh2nk7inp7LmAY-EpVO7n5hrHlaeb5sXnhenwOtroYJ1W9dpszT7lHjYphKOfi9t8QmVzltg" /><span className="absolute top-space-xs right-space-xs bg-primary-container text-surface-container-lowest font-label-caps text-[10px] uppercase px-space-xs py-1 rounded">SEE Board</span></div><div className="p-space-lg space-y-space-xs"><h3 className="font-headline-sm text-headline-sm text-primary">SEE Examination Dean</h3><p className="font-label-caps text-[11px] uppercase tracking-wider text-on-tertiary-container">Grades 8, 9 &amp; 10 Division</p><p className="font-caption text-caption text-secondary">M.A., B.Ed. · Senior Pedagogist</p><p className="font-body-sm text-body-sm text-on-surface-variant pt-space-xs">Coordinates mock tests, board preparations, and personal counseling for distinction results.</p></div></div><div className="p-space-lg pt-0"><a className="inline-flex items-center gap-1 font-label-caps text-label-caps uppercase text-primary hover:text-on-tertiary-container transition-colors" href="#"><span className="">SEE Academic Records</span><span className="material-symbols-outlined text-[14px]">arrow_forward</span></a></div></div></div></div></section>
</div>
{/*  Inline Interactive Script for Timeline Eras Filtering  */}
</main>
      <Footer />


    </div>
  );
}

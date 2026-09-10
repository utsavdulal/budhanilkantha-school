import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useData } from '../context/DataContext';

export default function StJudeAdmissions() {
  const { addAdmissionInquiry } = useData();
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    studentName: '',
    grade: 'Playgroup (PG)',
    enrollmentType: 'Day Scholar',
    email: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.parentName.trim() || !formData.phone.trim() || !formData.studentName.trim()) {
      alert('Please fill in required fields (Parent Name, Phone, and Student Name).');
      return;
    }

    addAdmissionInquiry({
      parentName: formData.parentName,
      studentName: formData.studentName,
      grade: formData.grade,
      phone: formData.phone,
      email: formData.email,
      notes: `${formData.enrollmentType ? `[${formData.enrollmentType}] ` : ''}${formData.notes}`,
    });

    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      parentName: '',
      phone: '',
      studentName: '',
      grade: 'Playgroup (PG)',
      enrollmentType: 'Day Scholar',
      email: '',
      notes: '',
    });
    setSubmitted(false);
  };
  return (
    <div className="min-h-screen bg-surface font-body-md text-body-md text-on-surface antialiased selection:bg-tertiary-fixed selection:text-tertiary">
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="w-full pt-18 sm:pt-20 bg-surface">
        {/* 1. ISLINGTON-STYLE FULL-WIDTH HERO BANNER */}
        <section className="relative w-full bg-[#0a192f] text-white py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden border-b border-outline-variant/30">
          {/* Background Photo */}
          <div
            className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-1000"
            style={{ backgroundImage: `url('/images/enrollment-students.jpg')` }}
          />
          
          {/* Cinematic Dark Gradient Overlay (Islington appointment style) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071324]/95 via-[#0a1d38]/90 to-[#0e274a]/80" />
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />

          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
            <div className="max-w-4xl space-y-4 sm:space-y-5">
              
              {/* Category Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#f5be38] text-xs uppercase tracking-[0.2em] font-bold">
                <span className="w-2 h-2 rounded-full bg-[#f5be38] animate-pulse" />
                <span>Admissions &amp; Enrollment · Academic Year 2081/2082</span>
              </div>

              {/* Main Large Heading with Highlight Span */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-serif font-bold text-white tracking-tight leading-[1.15]">
                Take the next step towards <span className="text-[#f5be38]">your child's future.</span>
              </h1>

              {/* Subtitle / Lead Paragraph */}
              <p className="text-base sm:text-lg md:text-xl text-slate-200/90 max-w-2xl font-normal leading-relaxed">
                Our admission counsellors are here to guide you through every step of enrollment for <strong>Playgroup through Grade 10</strong>. Submit your inquiry below and our team will get back to you shortly.
              </p>

              {/* Quick Contact & Info Chips */}
              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-slate-300 font-medium">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 px-3.5 py-2 rounded-lg">
                  <span className="material-symbols-outlined text-[18px] text-[#f5be38]">school</span>
                  <span>Playgroup to Grade 10</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 px-3.5 py-2 rounded-lg">
                  <span className="material-symbols-outlined text-[18px] text-[#f5be38]">location_on</span>
                  <span>Shankarpur, Biratnagar-2</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 px-3.5 py-2 rounded-lg">
                  <span className="material-symbols-outlined text-[18px] text-[#f5be38]">call</span>
                  <span>Tel: 021-514168</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 2. FORM & ADMISSIONS CONTENT CONTAINER */}
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-space-2xl md:py-space-3xl space-y-space-3xl">

          {/* MAIN 2-COLUMN SECTION: FORM & ESSENTIAL INFO */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-start">
            
            {/* LEFT COLUMN: MINIMAL INQUIRY FORM */}
            <div className="lg:col-span-7 bg-surface-container-lowest p-space-xl md:p-space-2xl rounded-2xl shadow-sm border border-outline-variant/40 space-y-space-lg">
              <div className="border-b border-outline-variant/30 pb-space-sm">
                <h2 className="font-headline-sm text-headline-sm text-primary font-serif">
                  Online Admission Inquiry
                </h2>
                <p className="text-body-sm text-on-surface-variant mt-1">
                  Submit details below and our admissions team will contact you within 24 hours.
                </p>
              </div>

              {submitted ? (
                <div className="p-space-xl bg-green-50 border border-green-200 rounded-xl space-y-space-md animate-fadeIn">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[28px] text-green-600 shrink-0">check_circle</span>
                    <div>
                      <h3 className="font-headline-sm text-lg font-bold text-green-900">
                        Inquiry Submitted Successfully!
                      </h3>
                      <p className="text-body-sm text-green-800 mt-1">
                        Thank you, <strong>{formData.parentName}</strong>. We have received the admission application for <strong>{formData.studentName}</strong> for <strong>{formData.grade}</strong>.
                      </p>
                      <p className="text-caption text-green-700 mt-2">
                        Our admissions officer will contact you at <strong>{formData.phone}</strong> shortly.
                      </p>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-green-200">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-4 py-2 bg-green-700 hover:bg-green-800 text-white rounded font-label-caps text-[11px] uppercase tracking-wider font-bold transition-all cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form className="space-y-space-md" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    <div>
                      <label className="block font-label-caps text-caption text-secondary uppercase tracking-wider mb-1 font-semibold">
                        Parent / Guardian Name *
                      </label>
                      <input
                        className="w-full h-11 px-space-md bg-surface border border-outline-variant/60 rounded-lg font-body-sm text-body-sm text-primary focus:outline-none focus:border-primary transition-colors"
                        placeholder="e.g. Ramesh Shrestha"
                        required
                        type="text"
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block font-label-caps text-caption text-secondary uppercase tracking-wider mb-1 font-semibold">
                        Phone Number *
                      </label>
                      <input
                        className="w-full h-11 px-space-md bg-surface border border-outline-variant/60 rounded-lg font-body-sm text-body-sm text-primary focus:outline-none focus:border-primary transition-colors"
                        placeholder="98XXXXXXXX / 021-XXXXXX"
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    <div>
                      <label className="block font-label-caps text-caption text-secondary uppercase tracking-wider mb-1 font-semibold">
                        Child's Full Name *
                      </label>
                      <input
                        className="w-full h-11 px-space-md bg-surface border border-outline-variant/60 rounded-lg font-body-sm text-body-sm text-primary focus:outline-none focus:border-primary transition-colors"
                        placeholder="Student Full Name"
                        required
                        type="text"
                        value={formData.studentName}
                        onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block font-label-caps text-caption text-secondary uppercase tracking-wider mb-1 font-semibold">
                        Applying for Grade *
                      </label>
                      <select
                        value={formData.grade}
                        onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                        className="w-full h-11 px-space-md bg-surface border border-outline-variant/60 rounded-lg font-body-sm text-body-sm text-primary focus:outline-none focus:border-primary transition-colors"
                      >
                        <option>Playgroup (PG)</option>
                        <option>Nursery</option>
                        <option>LKG</option>
                        <option>UKG</option>
                        <option>Grade 1</option>
                        <option>Grade 2</option>
                        <option>Grade 3</option>
                        <option>Grade 4</option>
                        <option>Grade 5</option>
                        <option>Grade 6</option>
                        <option>Grade 7</option>
                        <option>Grade 8</option>
                        <option>Grade 9</option>
                        <option>Grade 10 (SEE)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    <div>
                      <label className="block font-label-caps text-caption text-secondary uppercase tracking-wider mb-1 font-semibold">
                        Enrollment Type
                      </label>
                      <select
                        value={formData.enrollmentType}
                        onChange={(e) => setFormData({ ...formData, enrollmentType: e.target.value })}
                        className="w-full h-11 px-space-md bg-surface border border-outline-variant/60 rounded-lg font-body-sm text-body-sm text-primary focus:outline-none focus:border-primary transition-colors"
                      >
                        <option>Day Scholar</option>
                        <option>Hostel / Boarding Student</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-label-caps text-caption text-secondary uppercase tracking-wider mb-1 font-semibold">
                        Email Address (Optional)
                      </label>
                      <input
                        className="w-full h-11 px-space-md bg-surface border border-outline-variant/60 rounded-lg font-body-sm text-body-sm text-primary focus:outline-none focus:border-primary transition-colors"
                        placeholder="parent@example.com"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-label-caps text-caption text-secondary uppercase tracking-wider mb-1 font-semibold">
                      Questions / Additional Notes
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full p-space-md bg-surface border border-outline-variant/60 rounded-lg font-body-sm text-body-sm text-primary focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Tell us about previous school or any specific questions..."
                    ></textarea>
                  </div>

                  <div className="pt-space-xs flex items-center justify-between">
                    <button
                      className="h-12 px-space-xl bg-primary-container hover:bg-primary text-on-primary font-label-caps text-[11px] uppercase tracking-widest rounded-lg transition-all shadow-md active:scale-[0.99] font-bold cursor-pointer"
                      type="submit"
                    >
                      Submit Admissions Inquiry
                    </button>
                    <span className="text-caption font-caption text-secondary hidden sm:inline">
                      Direct Helpline: <strong>021-514168</strong>
                    </span>
                  </div>
                </form>
              )}
            </div>

            {/* RIGHT COLUMN: ESSENTIAL INFO & CHECKLIST */}
            <div className="lg:col-span-5 space-y-space-lg">
              
              {/* Quick Contact & Visit Info */}
              <div className="bg-primary-container text-on-primary p-space-xl rounded-2xl shadow-md space-y-space-md">
                <div className="flex items-center gap-space-xs text-tertiary-fixed font-label-caps text-label-caps uppercase tracking-widest font-bold">
                  <span className="material-symbols-outlined text-[18px]">contact_support</span>
                  <span>Admissions Help Desk</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-primary font-serif">
                  Visit Our Campus in Person
                </h3>
                <p className="text-body-sm text-on-primary-container leading-relaxed">
                  Parents are warmly invited to visit our administration office for campus tours, fee details, and student interaction.
                </p>

                <div className="space-y-space-sm pt-space-xs border-t border-white/10 text-body-sm">
                  <div className="flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-[20px] text-tertiary-fixed">call</span>
                    <div>
                      <span className="text-caption text-on-primary-container block">Direct Phone</span>
                      <a href="tel:021514168" className="font-bold text-tertiary-fixed hover:underline">
                        021-514168
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-[20px] text-tertiary-fixed">schedule</span>
                    <div>
                      <span className="text-caption text-on-primary-container block">Office Hours</span>
                      <span className="font-medium text-white">Sunday – Friday: 9:00 AM – 4:00 PM</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-[20px] text-tertiary-fixed">location_on</span>
                    <div>
                      <span className="text-caption text-on-primary-container block">Campus Location</span>
                      <span className="font-medium text-white">Shankarpur, Biratnagar-2, Morang</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Required Documents Card */}
              <div className="bg-surface-container-low p-space-xl rounded-2xl border border-outline-variant/40 space-y-space-md">
                <h3 className="font-headline-sm text-headline-sm text-primary font-serif">
                  Required Documents
                </h3>
                <ul className="space-y-space-xs text-body-sm text-on-surface-variant">
                  <li className="flex items-start gap-space-2xs">
                    <span className="material-symbols-outlined text-[18px] text-primary mt-0.5">check_circle</span>
                    <span>Student's Birth Certificate copy</span>
                  </li>
                  <li className="flex items-start gap-space-2xs">
                    <span className="material-symbols-outlined text-[18px] text-primary mt-0.5">check_circle</span>
                    <span>Previous grade marksheet &amp; character certificate</span>
                  </li>
                  <li className="flex items-start gap-space-2xs">
                    <span className="material-symbols-outlined text-[18px] text-primary mt-0.5">check_circle</span>
                    <span>2 recent passport-size student photographs</span>
                  </li>
                  <li className="flex items-start gap-space-2xs">
                    <span className="material-symbols-outlined text-[18px] text-primary mt-0.5">check_circle</span>
                    <span>Copy of parent/guardian citizenship ID</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>

          {/* MINIMAL FAQ SECTION */}
          <div className="border-t border-outline-variant/30 pt-space-2xl space-y-space-lg">
            <div className="max-w-2xl space-y-space-2xs">
              <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary font-semibold">
                COMMON QUESTIONS
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary font-serif">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
              <div className="bg-surface-container-lowest p-space-lg rounded-xl border border-outline-variant/30 space-y-2">
                <h4 className="font-headline-sm text-headline-sm text-primary font-serif">
                  Which grades are open?
                </h4>
                <p className="text-body-sm text-on-surface-variant leading-relaxed">
                  Admissions are currently open for <strong>Playgroup through Grade 10</strong> on a rolling basis subject to seat availability.
                </p>
              </div>

              <div className="bg-surface-container-lowest p-space-lg rounded-xl border border-outline-variant/30 space-y-2">
                <h4 className="font-headline-sm text-headline-sm text-primary font-serif">
                  Is hostel available?
                </h4>
                <p className="text-body-sm text-on-surface-variant leading-relaxed">
                  Yes, secure boarding hostel accommodations with nutritious meals and evening faculty tuition are available for out-of-town students.
                </p>
              </div>

              <div className="bg-surface-container-lowest p-space-lg rounded-xl border border-outline-variant/30 space-y-2">
                <h4 className="font-headline-sm text-headline-sm text-primary font-serif">
                  How does assessment work?
                </h4>
                <p className="text-body-sm text-on-surface-variant leading-relaxed">
                  Pre-primary children undergo a friendly readiness interaction, while Grades 1–9 take a short assessment in English and Mathematics.
                </p>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

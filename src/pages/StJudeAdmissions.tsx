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
        <section className="relative w-full bg-primary-container text-white py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden border-b border-outline-variant/30">
          {/* Background Photo */}
          <div
            className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-1000"
            style={{ backgroundImage: `url('/images/enrollment-students.jpg')` }}
          />
          
          {/* Cinematic Dark Gradient Overlay (Royal Bronze & Gold) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#120c04]/95 via-[#1c1409]/90 to-[#2b1d0a]/80" />
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />

          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
            <div className="max-w-4xl space-y-4 sm:space-y-5">

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
            
            {/* LEFT COLUMN: PROFESSIONAL INQUIRY FORM */}
            <div className="lg:col-span-7 bg-surface-container-lowest p-6 sm:p-8 md:p-10 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-outline-variant/50 space-y-8">
              
              {/* Form Header */}
              <div className="border-b border-outline-variant/40 pb-5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-tertiary mb-1">
                  <span className="material-symbols-outlined text-[18px]">edit_document</span>
                  <span>Online Application</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif text-primary font-bold">
                  Admission Inquiry Form
                </h2>
                <p className="text-sm text-on-surface-variant mt-1.5 leading-relaxed">
                  Fill in the details below. Our admissions officer will review your submission and contact you within <strong>24 business hours</strong>.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 sm:p-8 bg-green-50 border border-green-200 rounded-2xl space-y-5 animate-fadeIn">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[32px] text-green-700">check_circle</span>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-green-950 font-serif">
                        Inquiry Submitted Successfully!
                      </h3>
                      <p className="text-sm text-green-800 leading-relaxed">
                        Thank you, <strong>{formData.parentName}</strong>. We have registered the application for <strong>{formData.studentName}</strong> for <strong>{formData.grade}</strong> ({formData.enrollmentType}).
                      </p>
                      <div className="p-3 bg-white/80 rounded-lg border border-green-200 text-xs text-green-900 space-y-1">
                        <div>📞 Contact: <strong>{formData.phone}</strong> {formData.email ? `• ✉️ ${formData.email}` : ''}</div>
                        <div>⏱️ Status: <strong>Pending Review by Admissions Officer</strong></div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-green-200 flex items-center justify-between">
                    <span className="text-xs text-green-700 font-medium">Have urgent questions? Call 021-514168</span>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-4 py-2 bg-green-700 hover:bg-green-800 text-white rounded-lg text-xs uppercase tracking-wider font-bold transition-all shadow-sm cursor-pointer"
                    >
                      New Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  
                  {/* Section 1: Guardian Details */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-secondary border-b border-outline-variant/30 pb-2">
                      <span className="material-symbols-outlined text-[16px] text-primary">person</span>
                      <span>1. Parent / Guardian Information</span>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-on-surface mb-1.5">
                          Parent / Guardian Full Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <span className="material-symbols-outlined absolute left-3.5 top-3 text-[18px] text-on-surface-variant/60 pointer-events-none">badge</span>
                          <input
                            className="w-full h-11 pl-10 pr-3.5 bg-surface border border-outline-variant/60 rounded-xl text-sm text-primary placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm"
                            placeholder="e.g. Ramesh Shrestha"
                            required
                            type="text"
                            value={formData.parentName}
                            onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-on-surface mb-1.5">
                          Mobile Phone Number <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <span className="material-symbols-outlined absolute left-3.5 top-3 text-[18px] text-on-surface-variant/60 pointer-events-none">phone</span>
                          <input
                            className="w-full h-11 pl-10 pr-3.5 bg-surface border border-outline-variant/60 rounded-xl text-sm text-primary placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm"
                            placeholder="98XXXXXXXX / 021-XXXXXX"
                            required
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-on-surface mb-1.5">
                        Email Address <span className="text-on-surface-variant/60 font-normal">(Optional for updates)</span>
                      </label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-3.5 top-3 text-[18px] text-on-surface-variant/60 pointer-events-none">mail</span>
                        <input
                          className="w-full h-11 pl-10 pr-3.5 bg-surface border border-outline-variant/60 rounded-xl text-sm text-primary placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm"
                          placeholder="parent.email@example.com"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Section 2: Student Details */}
                  <div className="space-y-4 pt-2">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-secondary border-b border-outline-variant/30 pb-2">
                      <span className="material-symbols-outlined text-[16px] text-primary">school</span>
                      <span>2. Student &amp; Academic Enrollment</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-on-surface mb-1.5">
                          Child's Full Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <span className="material-symbols-outlined absolute left-3.5 top-3 text-[18px] text-on-surface-variant/60 pointer-events-none">face</span>
                          <input
                            className="w-full h-11 pl-10 pr-3.5 bg-surface border border-outline-variant/60 rounded-xl text-sm text-primary placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm"
                            placeholder="Student Full Name"
                            required
                            type="text"
                            value={formData.studentName}
                            onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-on-surface mb-1.5">
                          Applying For Grade <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <span className="material-symbols-outlined absolute left-3.5 top-3 text-[18px] text-on-surface-variant/60 pointer-events-none">grade</span>
                          <select
                            value={formData.grade}
                            onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                            className="w-full h-11 pl-10 pr-8 bg-surface border border-outline-variant/60 rounded-xl text-sm text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm appearance-none cursor-pointer"
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
                          <span className="material-symbols-outlined absolute right-3 top-3 text-[18px] text-on-surface-variant/60 pointer-events-none">expand_more</span>
                        </div>
                      </div>
                    </div>

                    {/* Enrollment Type Choice */}
                    <div>
                      <label className="block text-xs font-semibold text-on-surface mb-2">
                        Enrollment Preference
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, enrollmentType: 'Day Scholar' })}
                          className={`p-3 rounded-xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                            formData.enrollmentType === 'Day Scholar'
                              ? 'bg-primary-container text-on-primary border-primary shadow-sm font-semibold'
                              : 'bg-surface border-outline-variant/60 text-on-surface hover:bg-surface-container'
                          }`}
                        >
                          <span className="material-symbols-outlined text-[20px]">directions_bus</span>
                          <div>
                            <div className="text-xs font-bold">Day Scholar</div>
                            <div className={`text-[11px] ${formData.enrollmentType === 'Day Scholar' ? 'text-slate-200' : 'text-on-surface-variant'}`}>Daily school commute</div>
                          </div>
                        </button>

                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, enrollmentType: 'Hostel / Boarding Student' })}
                          className={`p-3 rounded-xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                            formData.enrollmentType === 'Hostel / Boarding Student'
                              ? 'bg-primary-container text-on-primary border-primary shadow-sm font-semibold'
                              : 'bg-surface border-outline-variant/60 text-on-surface hover:bg-surface-container'
                          }`}
                        >
                          <span className="material-symbols-outlined text-[20px]">hotel</span>
                          <div>
                            <div className="text-xs font-bold">Boarding / Hostel</div>
                            <div className={`text-[11px] ${formData.enrollmentType === 'Hostel / Boarding Student' ? 'text-slate-200' : 'text-on-surface-variant'}`}>Full residential care</div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Section 3: Questions / Notes */}
                  <div className="space-y-2 pt-2">
                    <label className="block text-xs font-semibold text-on-surface">
                      Specific Questions or Previous Academic Background <span className="text-on-surface-variant/60 font-normal">(Optional)</span>
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full p-3.5 bg-surface border border-outline-variant/60 rounded-xl text-sm text-primary placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none shadow-sm"
                      placeholder="Please let us know your child's previous school, extracurricular interests, or any specific queries..."
                    ></textarea>
                  </div>

                  {/* Submit Button & Security Guarantee */}
                  <div className="pt-3 border-t border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button
                      className="w-full sm:w-auto h-12 px-8 bg-primary hover:bg-primary-container text-on-primary font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md hover:shadow-lg active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                      type="submit"
                    >
                      <span>Submit Admission Inquiry</span>
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </button>
                    
                    <div className="flex items-center gap-1.5 text-xs text-on-surface-variant">
                      <span className="material-symbols-outlined text-[16px] text-green-600">verified_user</span>
                      <span>100% Confidential &amp; Direct</span>
                    </div>
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
